import CommunitiesCard from "@/components/CommunitiesCard";
import TasksCard from "@/components/TasksCard";
import { Button } from "@/components/ui/button";
import { COMMUNITIES, OVERVIEW, TASKS } from "@/lib/constants";
import OverviewHeading from "./OverviewHeading";
import MetricsContainer from "@/components/dashboard/MetricsContainer";
import MetricCard from "@/components/dashboard/MetricCard";
import Heading from "@/components/dashboard/Heading";

function Overview() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="md:hidden">
          <Heading />
        </div>

        <MetricsContainer>
          {OVERVIEW.map((item, index) => (
            <MetricCard key={index}>
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
            </MetricCard>
          ))}
        </MetricsContainer>
      </div>

      <div className="space-y-5">
        <OverviewHeading
          title="Open Tasks"
          description="Explore available tasks"
        >
          <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:w-auto">
            View All
          </Button>
        </OverviewHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {TASKS.map((task, i) => (
            <TasksCard task={task} key={i} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <OverviewHeading
          title="Communities"
          description="Discover and Join communities building impactful projects"
        >
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
        </OverviewHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {COMMUNITIES.map((community, i) => (
            <CommunitiesCard community={community} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
