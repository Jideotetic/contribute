import GetStartedButton from "./GetStartedButton";
import LoginButton from "./LoginButton";

function DesktopAuthButtons() {
  return (
    <div className="hidden items-center justify-between gap-4 md:flex">
      <GetStartedButton />
      <LoginButton bgColor="bg-white" />
    </div>
  );
}

export default DesktopAuthButtons;
