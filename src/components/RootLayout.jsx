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
import { useEffect, useState } from "react";
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
    <div className="mx-auto w-full max-w-[1200px]">
      <header className="mb-4 flex items-center justify-between rounded-[360px] bg-[#F0F4FD] px-6 py-4 lg:px-20 lg:py-7">
        <Link href="/" className="text-[32px] font-extrabold text-[#2F0FD1]">
          CF
        </Link>

        {/* DESKTOP NAV */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink asChild>
                  <a
                    href={link.href}
                    className="text-[#0D0516] hover:underline"
                  >
                    {link.title}
                  </a>
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
                <a href="/">CF</a>
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
                          <a
                            href={link.href}
                            className="text-[#0D0516] hover:underline"
                          >
                            {link.title}
                          </a>
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

      <main>
        <Outlet />
      </main>

      <footer className="space-y-16 bg-[#F0F4FD] px-4 pt-16 pb-20 md:px-10">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-8">
            <div className="w-full max-w-[483px] space-y-4">
              <p className="text-[40px] font-semibold text-[#2F0FD1]">CF</p>
              <p className="text-[20px] font-light text-[#09032A]">
                Contribute.fi — Decentralized coordination for communities.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
              <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70 sm:w-fit">
                Explore Communities
              </Button>
              <Button
                variant="outline"
                className="w-full cursor-pointer rounded-md bg-white px-8 py-4 text-[#2F0FD1] hover:text-[#2F0FD1] sm:w-fit"
              >
                View Tasks
              </Button>
            </div>
          </div>

          <div className="grid w-fit grid-cols-1 gap-5 lg:flex-1 lg:grid-cols-3">
            {FOOTER_LINKS.map((link, i) => (
              <Link
                className="font-normal text-[#1C1C1E] hover:underline"
                key={i}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center font-medium text-[#1C097D]">
          © 2025 Contribute.fi. All rights reserved{" "}
        </p>
      </footer>
    </div>
  );
}

export default RootLayout;
