import { NavLink } from "react-router";
import { IoGrid } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

const NAV_LINKS = [
  {
    heading: "MAIN MENU",
    links: [
      { title: "Overview", href: "/dashboard/overview", icon: IoGrid },
      {
        title: "Communities",
        href: "/dashboard/communities",
        icon: HiSquare3Stack3D,
      },
      { title: "Tasks", href: "/dashboard/tasks", icon: FaNewspaper },
      { title: "Earnings", href: "/dashboard/earnings", icon: FaCreditCard },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BsBarChartLineFill,
      },
    ],
  },
  {
    heading: "PERSONAL",
    links: [
      { title: "Profile", href: "/dashboard/profile", icon: FaUser },
      {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: FaBell,
      },
      {
        title: "Help & Support",
        href: "/dashboard/help",
        icon: IoIosHelpCircle,
      },
    ],
  },
];

function DashboardNavigation({ setSheetIsOpen }) {
  return (
    <div className="h-full space-y-4 px-4 pt-8">
      {NAV_LINKS.map((section, index) => (
        <div key={index} className="space-y-3">
          <div className="pl-6 text-[14px] font-medium text-[#525866]">
            {section.heading}
          </div>

          <ul className="">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  onClick={() => setSheetIsOpen(false)}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "block rounded-[8px] bg-[#F0F4FD] px-6 py-3 font-medium text-[#2F0FD1]"
                      : "block px-6 py-3 text-[#8791A7] hover:text-[#2F0FD1]"
                  }
                >
                  {link.icon && (
                    <link.icon className="mr-4 inline-block text-2xl" />
                  )}
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {index !== NAV_LINKS.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
}

export default DashboardNavigation;
