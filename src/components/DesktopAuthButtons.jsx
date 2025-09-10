import React from "react";
import { Button } from "./ui/button";

function DesktopAuthButtons() {
  return (
    <div className="hidden items-center justify-between gap-4 md:flex">
      <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
        Get Started
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer rounded-md bg-[#EDF2FF] px-8 py-5 text-[#2F0FD1] hover:text-[#2F0FD1]"
      >
        Log In
      </Button>
    </div>
  );
}

export default DesktopAuthButtons;
