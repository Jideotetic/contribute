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
        <p className="text-2xl font-bold text-[#050215]">
          {capitalizeFirstLetter(currentPath)}
        </p>
        <img src="/Frame 43596.svg" alt="" />
      </DashboardDesktopHeader>
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
