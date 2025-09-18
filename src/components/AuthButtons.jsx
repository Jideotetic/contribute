import { Button } from "./ui/button";

function AuthButtons({ device }) {
  return (
    <div
      className={`${device === "desktop" ? "hidden items-center justify-between gap-4 md:flex" : device === "mobile" ? "flex w-full flex-col gap-2 md:hidden" : "flex flex-wrap gap-4"}`}
    >
      <Button variant="secondary" size="lg">
        Get Started
      </Button>
      <Button variant="outline" size="lg" className="bg-white">
        Log In
      </Button>
    </div>
  );
}

export default AuthButtons;
