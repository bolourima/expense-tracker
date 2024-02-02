// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { sql } = require("./db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8080;
// const secretKey = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/users", async (req, res) => {
  const { name, email, passport } = req.body;

  if (!name || !email || !passport) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  const encryptedPassword = await bcrypt.hash(passport, 10);

  try {
    await sql`INSERT INTO users (email, name, passport, avatarImg, createdAt, updatedAt)
    VALUES (${email}, ${name}, ${encryptedPassword}, 'img', ${new Date()}, ${new Date()} );`;

    res.status(201).send({ message: "Successfully Created" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, passport } = req.body;

  if (!email || !passport) {
    return res.status(400).send("Email and Passport required");
  }
  let userData
  try {
    userData =
      await sql`SELECT * FROM users WHERE email = ${email.toLowerCase()}`;
    if (userData.length === 0) {
      return res.status(401).send("Invalid Email or Passport");
    }

    const hashedPassport = userData[0].passport;
    const passportMatch = await bcrypt.compare(passport, hashedPassport);

    if (!passportMatch) {
      return res.status(401).send("Passport not match");
    }

    // const token = jwt.sign({ userId: userData[0].id }, secretKey, {
    //   expiresIn: "10h",
    // });

    res.status(201).send({ message: "Successfully Login" });
  } catch (error) {
    console.error("Error during Login: ", error);
    res.status(500).send("Internal server Error");
  }
});

app.listen(PORT, () => {
  console.log("Application runnig at http://localhost:" + PORT);
});
