import { TASKS } from "@/lib/constants";
import { useNavigate } from "react-router";
import TasksCard from "./TasksCard";
import { Button } from "./ui/button";

function ExploreTask() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F7F9FD]">
      <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 py-10 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            Explore Available Tasks
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Discover the most active opportunities from communities making real
            impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {TASKS.slice(0, 6).map((task, i) => (
            <TasksCard task={task} key={i} tag="home-page" />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => {
              navigate("/tasks");
            }}
            size="lg"
            variant="secondary"
          >
            See all Tasks
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExploreTask;
