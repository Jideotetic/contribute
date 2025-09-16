import CommunitiesCard from "@/components/CommunitiesCard";
import TasksCard from "@/components/TasksCard";
import { Button } from "@/components/ui/button";
import { COMMUNITIES, OVERVIEW, TASKS } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/utils";
import React from "react";
import { useLocation } from "react-router";

function Overview() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-[20px] font-bold text-[#050215] md:hidden">
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
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-[20px] font-bold text-[#050215]">Open Tasks</h2>
            <p className="font-medium text-[#777F90]">
              Explore available tasks
            </p>
          </div>

          <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:w-auto">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TASKS.map((task, i) => (
            <TasksCard task={task} key={i} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-[20px] font-bold text-[#050215]">
              Communities
            </h2>
            <p className="font-medium text-[#777F90]">
              Discover and Join communities building impactful projects
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 cursor-pointer rounded-md bg-white px-8 py-5 text-[#2F0FD1] hover:text-[#2F0FD1]"
            >
              View All
            </Button>

            <Button className="w-1/2 cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:flex-1">
              Create Community
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((community, i) => (
            <CommunitiesCard community={community} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
