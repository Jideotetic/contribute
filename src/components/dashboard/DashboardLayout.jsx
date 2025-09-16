import DashboardLayoutContainer from "./DashboardLayoutContainer";
import DashboardMobileHeader from "./DashboardMobileHeader";
import MobileNavigation from "../MobileNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { useState } from "react";
import DashboardSidebarContainer from "./DashboardSidebarContainer";
import DashboardDesktopHeader from "./DashboardDesktopHeader";
import { Link, Outlet, useLocation } from "react-router";
import { capitalizeFirstLetter } from "@/lib/utils";
import DashboardContainer from "./DashboardContainer";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

function DashboardLayout() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  return (
    <DashboardLayoutContainer>
      <DashboardMobileHeader>
        <MobileNavigation
          side="left"
          sheetIsOpen={sheetIsOpen}
          setSheetIsOpen={setSheetIsOpen}
        >
          <DashboardNavigation
            setSheetIsOpen={setSheetIsOpen}
            platform="mobile"
          />
        </MobileNavigation>

        <Link
          className="text-[28px] font-extrabold text-[#2F0FD1]"
          to="/dashboard/overview"
        >
          CF
        </Link>

        <img src="/Frame 43596.svg" alt="" />
      </DashboardMobileHeader>

      <DashboardSidebarContainer>
        <Link
          className="block h-[70px] border-b border-gray-300 bg-white py-4 text-center text-[28px] font-extrabold text-[#2F0FD1]"
          to="/dashboard/overview"
        >
          CF
        </Link>

        <DashboardNavigation platform="desktop" />
      </DashboardSidebarContainer>

      <DashboardDesktopHeader>
        <h1 className="text-2xl font-bold text-[#050215]">
          {capitalizeFirstLetter(currentPath)}
        </h1>
        <div className="flex items-center gap-4">
          {currentPath === "communities" && (
            <div className="hidden flex-col gap-3 lg:flex lg:flex-row">
              <div className="relative flex-1 rounded-md border border-[#D0D5DD] px-[30px] py-2">
                <Search
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]"
                  size={16}
                />
                <input
                  type="text"
                  // value={searchItem}
                  placeholder="search community"
                  // onChange={(e) => onSearchChange?.(e.target.value)}
                  className="w-full rounded-md border-none bg-[lg:w-[300px] pl-1 text-[14px] text-[#667185] outline-none placeholder:text-[#8E8E93]"
                />
              </div>

              <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:flex-1">
                Create Community
              </Button>
            </div>
          )}

          <img src="/Frame 43596.svg" alt="" />
        </div>
      </DashboardDesktopHeader>
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
