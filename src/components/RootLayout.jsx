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

const NAV_LINKS = [
  { title: "Communities", href: "/communities" },
  { title: "Tasks", href: "/tasks" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Learn More", href: "/learn-more" },
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
    <div className="mx-auto w-full max-w-[1200px] p-4">
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

      <footer></footer>
    </div>
  );
}

export default RootLayout;
