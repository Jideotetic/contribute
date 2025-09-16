import { capitalizeFirstLetter } from "@/lib/utils";
import React from "react";
import { useLocation } from "react-router";

function Overview() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  return (
    <div>
      <p className="text-[20px] font-bold text-[#050215] md:hidden">
        {capitalizeFirstLetter(currentPath)}
      </p>
    </div>
  );
}

export default Overview;
