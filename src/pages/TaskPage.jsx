import CommunitiesCard from "@/components/CommunitiesCard";
import Filter from "@/components/Filter";
import TasksCard from "@/components/TasksCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const TASKS = [
  {
    title: "Landing Page and Web App Redesign",
    amount: "45",
    community: "The Starks",
    tag: ["Design", "Development", "Growth"],
    numberOfMembers: 24,
  },
  {
    title: "Identify and report security bugs",
    amount: "45",
    community: "JayCube",
    tag: ["Development", "QA"],
    numberOfMembers: 24,
  },
  {
    title: "Landing Page and Web App Redesign",
    amount: "45",
    community: "The Starks",
    tag: ["Design"],
    numberOfMembers: 24,
  },
  {
    title: "Landing Page and Web App Redesign",
    amount: "45",
    community: "The Starks",
    tag: ["Design"],
    numberOfMembers: 24,
  },
  {
    title: "Landing Page and Web App Redesign",
    amount: "45",
    community: "The Starks",
    tag: ["Design"],
    numberOfMembers: 24,
  },
  {
    title: "Landing Page and Web App Redesign",
    amount: "45",
    community: "The Starks",
    tag: ["Design"],
    numberOfMembers: 24,
  },
];

function TaskPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 pb-10 lg:px-10">
        <button
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-2"
        >
          <img src="/CaretCircleLeft.svg" alt="" />
          <span className="text-[18px] text-[#0D0516]">Back</span>
        </button>

        <div className="flex flex-wrap items-end justify-between gap-4 lg:items-end">
          <div className="text-[#050215]">
            <h2 className="text-[24px] font-extrabold md:text-[44px]">
              Available Tasks ({TASKS.length})
            </h2>
            <p className="font-light md:text-[20px]">
              Explore list of available tasks
            </p>
          </div>

          <div className="flex shrink-0 lg:order-3">
            <Filter />
          </div>

          <div className="relative w-full rounded-md border border-[#D0D5DD] px-[30px] py-2 sm:order-2 lg:w-[350px]">
            <Search
              className="absolute top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]"
              size={16}
            />
            <input
              type="text"
              // value={searchItem}
              placeholder="search task"
              // onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full rounded-md border-none bg-[lg:w-[300px] pl-1 text-[14px] text-[#667185] outline-none placeholder:text-[#8E8E93]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TASKS.map((task, i) => (
            <TasksCard task={task} key={i} />
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
            Explore all task
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
