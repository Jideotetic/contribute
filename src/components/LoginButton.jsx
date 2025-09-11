import React from "react";
import { Button } from "./ui/button";

function LoginButton({ bgColor }) {
  return (
    <Button variant="outline" size="lg" className={bgColor}>
      Log In
    </Button>
  );
}

export default LoginButton;
