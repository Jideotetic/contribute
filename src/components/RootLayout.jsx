import DesktopAuthButtons from "@/components/DesktopAuthButtons";
import MobileAuthButtons from "@/components/MobileAuthButtons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { title: "Communities", href: "/communities" },
  { title: "Tasks", href: "/tasks" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Learn More", href: "/learn-more" },
];

const FOOTER_LINKS = [
  { title: "Communities", href: "/communities" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Tasks", href: "/tasks" },
  { title: "Terms of Use", href: "/terms-of-use" },
  { title: "Learn More", href: "/learn-more" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];

function RootLayout() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handler = () => {
      if (mediaQuery.matches) {
        setSheetIsOpen(false);
      }
    };

    handler();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div>
      <div className="px-5">
        <header className="mx-auto mt-8 mb-10 flex w-full max-w-[1200px] items-center justify-between rounded-[360px] bg-[#F0F4FD] px-6 py-4 md:mb-[104px] lg:px-20 lg:py-6">
          <Link href="/" className="text-[32px] font-bold text-[#2F0FD1]">
            CF
          </Link>

          {/* DESKTOP NAV */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-3 lg:gap-10">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink asChild>
                    {link.title === "Testimonials" ? (
                      <a
                        className="text-[#0D0516] hover:underline"
                        href={link.href}
                      >
                        {" "}
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        className="text-[#0D0516] hover:underline"
                        to={link.href}
                      >
                        {link.title}
                      </Link>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <DesktopAuthButtons />

          {/* MOBILE NAV */}
          <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
            <SheetTrigger asChild>
              <button className="cursor-pointer rounded-[4px] bg-[#2F0FD1] p-0.5 opacity-100 ring-offset-background transition-opacity hover:opacity-70 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary md:hidden">
                <Menu className="size-8 text-white" />
                <span className="sr-only">Open mobile navigation</span>
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader className="sr-only">
                <SheetTitle>
                  <Link href="/">CF</Link>
                </SheetTitle>
                <SheetDescription>Mobile navigation</SheetDescription>
              </SheetHeader>
              <div className="flex min-h-1/2 flex-col items-center justify-center gap-14 px-4 pt-24">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-6">
                    {NAV_LINKS.map((link) => (
                      <NavigationMenuItem key={link.title}>
                        <NavigationMenuLink asChild>
                          <SheetClose asChild>
                            {link.title === "Testimonials" ? (
                              <a
                                className="text-[#0D0516] hover:underline"
                                href={link.href}
                                onClick={(e) => {
                                  e.preventDefault();

                                  setSheetIsOpen(false);

                                  setTimeout(() => {
                                    const el =
                                      document.querySelector("#testimonials");
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth" });
                                    }
                                  }, 300); // delay should match your sheet transition duration
                                }}
                              >
                                {" "}
                                {link.title}
                              </a>
                            ) : (
                              <Link
                                className="text-[#0D0516] hover:underline"
                                to={link.href}
                              >
                                {link.title}
                              </Link>
                            )}
                          </SheetClose>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                <MobileAuthButtons />
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>

      <main>
        <Outlet />
      </main>

      <div className="bg-[#F0F4FD]">
        <footer className="mx-auto w-full max-w-[1200px] space-y-16 px-5 pt-16 pb-20 md:px-10">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8">
              <div className="w-full max-w-[483px] space-y-4">
                <p className="text-[40px] font-semibold text-[#2F0FD1]">CF</p>
                <p className="text-[20px] font-light text-[#09032A]">
                  Contribute.fi — Decentralized coordination for communities.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
                <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:w-fit">
                  Explore Communities
                </Button>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer rounded-md bg-white px-8 py-5 text-[#2F0FD1] hover:text-[#2F0FD1] sm:w-fit"
                >
                  View Tasks
                </Button>
              </div>
            </div>

            <div className="grid w-fit grid-cols-1 gap-5 lg:flex-1 lg:grid-cols-3">
              {FOOTER_LINKS.map((link, i) => (
                <Fragment key={i}>
                  {link.title === "Testimonials" ? (
                    <a
                      className="font-normal text-[#1C1C1E] hover:underline"
                      href={link.href}
                    >
                      {" "}
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      className="font-normal text-[#1C1C1E] hover:underline"
                      to={link.href}
                    >
                      {link.title}
                    </Link>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <p className="text-center font-medium text-[#1C097D]">
            © 2025 Contribute.fi. All rights reserved{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default RootLayout;
