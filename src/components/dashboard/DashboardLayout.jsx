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
import CreateCommunityForm from "../CreateCommunityForm";

function DashboardLayout() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1];

  const queryParams = new URLSearchParams(location.search);
  const communityName = queryParams.get("community");
  const taskTitle = queryParams.get("task");

  console.log({ communityName, currentPath, taskTitle });

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
        {communityName || taskTitle ? <BackButton /> : <Heading />}

        <div className="flex items-center gap-4">
          {currentPath === "communities" && !communityName && (
            <div className="hidden items-center gap-3 lg:flex lg:flex-row">
              <div>
                <CustomSearch placeholder="Search community" />
              </div>

              <div>
                <CreateCommunityForm />
              </div>
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
