import BackButton from "@/components/BackButton";
import CustomPagination from "@/components/CustomPagination";
import Filter from "@/components/Filter";
import CustomSearch from "@/components/Search";
import TasksCard from "@/components/TasksCard";
import { TASKS } from "@/lib/constants";
import React, { useState } from "react";

const TASKS_PER_PAGE = 15;

function TaskPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalTasks = TASKS.length;
  const totalPages = Math.ceil(totalTasks / TASKS_PER_PAGE);

  const startIndex = (currentPage - 1) * TASKS_PER_PAGE;
  const currentTasks = TASKS.slice(startIndex, startIndex + TASKS_PER_PAGE);

  return (
    <div className="bg-white pt-40">
      <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 pb-10 lg:px-10">
        <BackButton />

        <div className="flex flex-wrap items-end justify-between gap-4 lg:items-end">
          <div className="text-[#050215]">
            <h2 className="text-[24px] font-extrabold md:text-[44px]">
              Available Tasks ({totalTasks})
            </h2>
            <p className="font-light md:text-[20px]">
              Explore list of available tasks
            </p>
          </div>

          <div className="flex shrink-0 lg:order-3">
            <Filter tag="landing" />
          </div>

          <CustomSearch placeholder="Search task" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentTasks.map((task, i) => (
            <TasksCard task={task} key={i} tag="task-page" />
          ))}
        </div>

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default TaskPage;
