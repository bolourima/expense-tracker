import React from "react";
import { Logo } from "./svg images/Logo";
import { Geld } from "./svg images/Geld";

export const Waiting = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex mb-12 justify-center items-center gap-2">
        <Logo /> <Geld />
      </div>
      <div className="loading mb-4">loading</div>
      <div>
        <div>Түр хүлээнэ үү...</div>
      </div>
    </div>
  );
};
