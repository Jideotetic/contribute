import { Link } from "react-router";

function DashboardLogo() {
  return (
    <Link
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="text-[32px] font-extrabold text-[#2F0FD1]"
      to="/dashboard/overview"
    >
      CF
    </Link>
  );
}

export default DashboardLogo;
