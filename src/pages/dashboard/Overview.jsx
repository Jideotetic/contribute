import CommunitiesCard from "@/components/CommunitiesCard";
import TasksCard from "@/components/TasksCard";
import { Button } from "@/components/ui/button";
import { COMMUNITIES, OVERVIEW, TASKS } from "@/lib/constants";
import OverviewHeading from "./OverviewHeading";
import MetricsContainer from "@/components/dashboard/MetricsContainer";
import MetricCard from "@/components/dashboard/MetricCard";
import Heading from "@/components/dashboard/Heading";
import { useNavigate } from "react-router";
import CreateCommunityForm from "@/components/CreateCommunityForm";

function Overview() {
  const navigate = useNavigate();
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
          <Button
            onClick={() => navigate("/dashboard/tasks")}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            View All
          </Button>
        </OverviewHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {TASKS.slice(0, 6).map((task, i) => (
            <TasksCard task={task} key={i} tag="overview" />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <OverviewHeading
          title="Communities"
          description="Discover and Join communities building impactful projects"
          large={true}
        >
          <div className="flex w-full gap-4">
            <Button
              onClick={() => navigate("/dashboard/communities")}
              variant="outline"
              size="lg"
              className="flex-1 bg-white"
            >
              View All
            </Button>

            <div className="w-1/2 sm:flex-1">
              <CreateCommunityForm />
            </div>
          </div>
        </OverviewHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {COMMUNITIES.slice(0, 6).map((community, i) => (
            <CommunitiesCard community={community} key={i} tag="overview" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
