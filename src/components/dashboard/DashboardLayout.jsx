import DashboardLayoutContainer from "./DashboardLayoutContainer";
import DashboardMobileHeader from "./DashboardMobileHeader";
import MobileNavigation from "../MobileNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { useState } from "react";
import DashboardSidebarContainer from "./DashboardSidebarContainer";
import DashboardDesktopHeader from "./DashboardDesktopHeader";
import { Link, Outlet, useLocation } from "react-router";
import DashboardContainer from "./DashboardContainer";
import { Button } from "../ui/button";
import BackButton from "../BackButton";
import CustomSearch from "../Search";
import Heading from "./Heading";

function DashboardLayout() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const queryParams = new URLSearchParams(location.search);
  const communityName = queryParams.get("community");

  console.log({ communityName });

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
        {communityName ? <BackButton /> : <Heading />}

        <div className="flex items-center gap-4">
          {currentPath === "communities" && !communityName && (
            <div className="hidden flex-col gap-3 lg:flex lg:flex-row">
              <CustomSearch placeholder="Search community" />

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
