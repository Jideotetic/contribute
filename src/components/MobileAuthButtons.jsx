import React from "react";
import { Button } from "./ui/button";

function MobileAuthButtons() {
  return (
    <div className="flex w-full flex-col gap-4 md:hidden">
      <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70">
        Get Started
      </Button>
      <Button
        variant="outline"
        className="w-full cursor-pointer rounded-md bg-[#EDF2FF] px-8 py-4 text-[#2F0FD1] hover:text-[#2F0FD1]"
      >
        Log In
      </Button>
    </div>
  );
}

export default MobileAuthButtons;
