import { DASHBOARD_NAV_LINKS } from "@/lib/constants";
import { NavLink } from "react-router";

function DashboardNavigation({
  setSheetIsOpen,
  platform = "mobile" | "desktop",
}) {
  return (
    <div
      className={`h-full space-y-4 px-4 ${platform === "mobile" ? "pt-8" : "pt-4"}`}
    >
      {DASHBOARD_NAV_LINKS.map((section, index) => (
        <div key={index} className="space-y-3">
          <div className="pl-6 text-[14px] font-medium text-[#525866]">
            {section.heading}
          </div>

          <ul className="">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  onClick={() => {
                    setSheetIsOpen(false);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
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

          {index !== DASHBOARD_NAV_LINKS.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
}

export default DashboardNavigation;
