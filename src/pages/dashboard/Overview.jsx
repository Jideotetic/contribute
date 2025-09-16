import { OVERVIEW } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/utils";
import React from "react";
import { useLocation } from "react-router";

function Overview() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="mb text-[20px] font-bold text-[#050215] md:hidden">
          {capitalizeFirstLetter(currentPath)}
        </h1>

        <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
          {OVERVIEW.map((item, i) => (
            <div
              key={i}
              className="flex w-full min-w-[260px] items-center gap-4 rounded-[8px] bg-white px-4.5 py-4"
            >
              <div className="rounded-full bg-[#F0F4FD] p-3">
                {item.icon && (
                  <item.icon
                    className={`inline-block text-[30px] text-[#2F0FD1] ${item.title === "reputation score" && "rotate-270"}`}
                  />
                )}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-bold text-[#050215]">
                  {item.title === "amount earned" && "$"}
                  {item.value}
                  {item.title === "reputation score" && <small> / 10</small>}
                </span>
                <span className="font-medium text-[#7A899B]">{item.title}</span>
              </div>

              {/* <p className="font-normal text-[#636366]">
                {testimonial.message}
              </p>

              <div className="space-y-2">
                <p className="text-[20px] font-semibold text-[#050215]">
                  {testimonial.name}
                </p>
                <p className="text-[18px] font-medium text-[#2F0FD1]">
                  {testimonial.designation}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Overview;
