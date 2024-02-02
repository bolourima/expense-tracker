import { Geld } from "@/components/svg images/Geld";
import { Logo } from "@/components/svg images/Logo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Waiting() {
  return (
    <main className="w-full h-screen">
          <div className="flex justify-center items-center h-screen gap-2">
            <Logo /> <Geld />
          </div>
    </main>
  );
}
