import { Fragment, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Button } from "./ui/button";
import ScrollToTop from "./ScrollToTop";
import { FOOTER_LINKS, LANDING_NAV_LINKS } from "@/lib/constants";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";
import AuthButtons from "@/components/AuthButtons";

function RootLayout() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="fixed right-0 left-0 z-50 px-5 pt-2">
        <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-[360px] bg-[#F0F4FD] px-6 py-4 lg:py-6">
          <Logo />

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex gap-5 lg:gap-10">
              {LANDING_NAV_LINKS.map((link) => (
                <li key={link.title}>
                  {link.title === "Testimonials" ? (
                    <a
                      className="text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "font-extrabold text-[#2F0FD1] hover:underline"
                          : "text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
                      }
                      to={link.href}
                    >
                      {link.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <AuthButtons device="desktop" />

          {/* MOBILE NAV */}
          <MobileNavigation
            side="right"
            sheetIsOpen={sheetIsOpen}
            setSheetIsOpen={setSheetIsOpen}
          >
            <div className="flex min-h-1/2 flex-col items-center justify-center gap-14 px-4 pt-24">
              <nav>
                <ul className="flex flex-col items-center gap-6">
                  {LANDING_NAV_LINKS.map((link) => (
                    <li key={link.title}>
                      {link.title === "Testimonials" ? (
                        <a
                          className="text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
                          href={link.href}
                          onClick={() => setSheetIsOpen(false)}
                        >
                          {link.title}
                        </a>
                      ) : (
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "font-extrabold text-[#2F0FD1] hover:underline"
                              : "text-[#0D0516] hover:text-[#2F0FD1] hover:underline"
                          }
                          to={link.href}
                          onClick={() => setSheetIsOpen(false)}
                        >
                          {link.title}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <AuthButtons device="mobile" />
            </div>
          </MobileNavigation>
        </header>
      </div>

      <main>
        <Outlet />
      </main>

      <div className="bg-[#F0F4FD]">
        <footer className="mx-auto w-full max-w-[1200px] space-y-16 px-5 pt-16 pb-5 md:px-10">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8">
              <div className="w-full max-w-[483px] space-y-4">
                <p className="text-[40px] font-semibold text-[#2F0FD1]">CF</p>
                <p className="text-[20px] font-light text-[#09032A]">
                  Contribute.fi — Decentralized coordination for communities.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
                <Button variant="secondary" size="lg">
                  Explore Communities
                </Button>
                <Button variant="outline" size="lg" className="bg-white">
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
    </>
  );
}

export default RootLayout;
