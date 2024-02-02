import { Inter } from "next/font/google";
import { Logo } from "@/components/svg images/Logo";
import { Geld } from "@/components/svg images/Geld";

const inter = Inter({ subsets: ["latin"] });

export default function Balance() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-2">
        <Logo /> <Geld />
      </div>
      <div>
        <p className="text-3xl semibold">Set up your cash Balance</p>
      </div>
    <input className="input bg-slate-50" placeholder="cash"></input>
      <p>How much cash do you have in your wallet?</p>
      <a href="done">
          <button className="btn bg-[#0166FF]">Confirm</button>
      </a>
    </main>
  );
}
