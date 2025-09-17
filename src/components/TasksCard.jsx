import { TASK_TAG_BG } from "@/lib/constants";

function TasksCard({ task }) {
  return (
    <div
      className={`flex flex-col justify-center gap-8 rounded-[8px] border-2 border-[#F0F4FD] bg-white px-[24px] py-[28px]`}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {task.tag.map((t, i) => (
            <div
              className={`rounded-[4px] px-[12px] py-[5px] text-sm font-normal text-[#313131] ${TASK_TAG_BG[t]}`}
              key={i}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p className="flex shrink-0 gap-1.5 font-semibold text-[#2F0FD1]">
            <img src="/Gift.svg" alt="" />
            {task.amount} XLM
          </p>
          <div className="flex shrink-0 items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-[#636366]" />
            <p className="flex gap-1.5 font-semibold text-[#8791A7]">
              <img src="/UsersThree.svg" alt="" /> {task.numberOfMembers}
            </p>
          </div>
        </div>
      </div>
      <div className={`space-y-2`}>
        <p className="max-w-full truncate overflow-hidden font-semibold whitespace-nowrap text-[#1C1C1E]">
          {task.title}
        </p>
        <p className="max-w-full truncate overflow-hidden text-[15px] font-normal whitespace-nowrap text-[#636366]">
          by {task.community}
        </p>
      </div>
    </div>
  );
}

export default TasksCard;
