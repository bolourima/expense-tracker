import React, { useEffect, useState } from "react";
import { Geld } from "./svg images/Geld";
import { Logo } from "./svg images/Logo";

const BASE_URL = "http://localhost:8080";

export const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState([]);
  const [passport, setPassport] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "/users");
      const data = await res.json();

      setUsers(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const createData = async () => {
    if (!email || !passport) {
      return alert("Email and Passport are required");
    }

    const newUser = {
      name,
      email,
      passport,
    };
    try {
      const res = await fetch(BASE_URL + "/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (res.ok) alert("Successfully Created User");
    } catch (error) {
      alert("ERROR: " + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="w-full h-screen flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-10 w-[384px]">
          <div className="flex justify-center items-center gap-2">
            <Logo /> <Geld />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Welcome Back</p>
            <p>Welcome back, Please enter your details</p>
          </div>
          <div className="flex flex-col gap-3">
            <input className="input bg-[#F3F4F6]" placeholder="Email"></input>
            <input
              className="input bg-[#F3F4F6]"
              placeholder="Passport"
            ></input>
            <button className="btn bg-[#0166FF] text-white">Log in</button>
          </div>
          <div className="flex justify-center">
            <p> Don't you have account?</p>
            <a href="/signup" className="px-3 text-[#0166FF]">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </main>
  );
};
