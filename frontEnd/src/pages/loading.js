import { useState } from "react";

import { Inter } from "next/font/google";
import { Waiting } from "@/components/Waiting";

const inter = Inter({ subsets: ["latin"] });

export default function Loading() {
  return (
    <main>
      <Waiting />
    </main>
  );
}
