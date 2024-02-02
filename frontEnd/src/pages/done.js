import { useState } from "react";

import { Inter } from "next/font/google";
import { Waiting } from "@/components/Waiting";
import { Logo } from "@/components/svg images/Logo";
import { Geld } from "@/components/svg images/Geld";

const inter = Inter({ subsets: ["latin"] });

export default function Done() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-2">
        <Logo /> <Geld />{" "}
      </div>
      <div>
        <p className="text-3xl semibold">Good Job!</p>
      </div>
      <p>
        Your very first account has been created. Now continue to dashboard and start tracking
      </p>
      <a href="/dashboard">
        <button className="btn bg-[#0166FF]">Go to Dashboard</button>
      </a>
    </main>
  );
}
