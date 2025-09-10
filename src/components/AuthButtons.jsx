import React from "react";
import { Button } from "./ui/button";

function AuthButtons() {
  return (
    <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
      <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70 sm:w-auto">
        Get Started
      </Button>
      <Button
        variant="outline"
        className="w-full cursor-pointer rounded-md bg-[#EDF2FF] px-8 py-4 text-[#2F0FD1] hover:text-[#2F0FD1] sm:w-auto"
      >
        Log In
      </Button>
    </div>
  );
}

export default AuthButtons;
