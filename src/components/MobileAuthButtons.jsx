import GetStartedButton from "./GetStartedButton";
import LoginButton from "./LoginButton";

function MobileAuthButtons() {
  return (
    <div className="flex w-full flex-col gap-2 md:hidden">
      <GetStartedButton />
      <LoginButton />
    </div>
  );
}

export default MobileAuthButtons;
