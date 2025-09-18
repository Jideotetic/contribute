import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  COMMUNITIES,
  METRICS,
  TASKS,
  TASK_TAG_BG,
  COMMUNITY_TAG_BG,
  TESTIMONIALS,
} from "@/lib/constants";
import CommunitiesCard from "@/components/CommunitiesCard";
import TasksCard from "@/components/TasksCard";
import AuthButtons from "@/components/AuthButtons";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Delay to ensure element is mounted
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <div className="bg-linear-to-b from-white to-[#EDF2FF] pt-30">
        <div className="mx-auto w-full max-w-[1200px] space-y-14 px-5">
          <div className="space-y-12">
            <div className="space-y-8 text-center text-[#1C1C1E]">
              <h1 className="text-[36px] font-extrabold md:text-[64px]">
                Powering Communities, One Contribution at a Time
              </h1>

              <p className="mx-auto max-w-[842px] font-light md:text-[20px]">
                Contribute.fi connects projects with passionate contributors
                through smart contracts, wallet-linked reputation, and
                transparent rewards — built on Soroban & Stellar.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:w-fit">
                Explore Communities
              </Button>
              <Button
                variant="outline"
                className="w-full cursor-pointer rounded-md bg-[#EDF2FF] px-8 py-5 text-[#2F0FD1] hover:text-[#2F0FD1] sm:w-fit"
              >
                View Tasks
              </Button>
            </div>
          </div>

          {/* Image */}

          <img className="h-auto w-full" src="/Frame.svg" alt="" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] space-y-8 bg-white px-5 py-10 md:space-y-16 md:pt-[104px]">
        <div className="mx-auto max-w-[1200px] space-y-4 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            A Growing Network of Builders
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Join communities, complete tasks, and earn rewards alongside
            thousands of contributors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:px-10 [@media(max-width:379px)]:grid-cols-1">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col justify-center rounded-[8px] bg-[#F7F9FD] px-[20px] py-[40px] [@media(max-width:379px)]:items-center ${metric.title === "paid out" && "sm:order-4 [@media(max-width:379px)]:order-4"}`}
            >
              <div
                className={`${metric.title === "communities" || metric.title === "contributors" ? "text-[#2F0FD1]" : "text-[#1082E4]"} text-[32px] font-bold lg:text-[48px]`}
              >
                {metric.title === "paid out" && "$"}
                {metric.value} {metric.title !== "contributors" && "+"}
              </div>
              <div className="text-[15px] text-[#636366] lg:text-[20px]">
                {metric.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 bg-white px-5 py-10 pb-10 md:py-[104px] lg:flex-row lg:gap-20 lg:px-10">
        <div className="flex flex-col gap-6 lg:max-w-[576px]">
          <div className="lg-text-[24px] w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] font-light text-[#1082E4] lg:px-8 lg:py-3">
            About Contribute
          </div>

          <div className="space-y-8 text-[#050215]">
            <h2 className="text-[30px] font-extrabold md:text-[40px]">
              A thriving ecosystem of builders and innovators
            </h2>

            <p className="text-[18px] font-light md:text-[20px]">
              Contribute.fi is a decentralized contributor coordination and
              community management platform built on Soroban and integrated into
              the Stellar ecosystem. Contribute.fi connects projects with
              contributors through smart-contract-enforced tasks, wallet-linked
              reputation, community hubs, AI-powered analytics, and Git-based
              development tracking.
            </p>
          </div>
        </div>

        <img
          className="mx-auto h-auto w-full sm:w-1/2 lg:w-full"
          src="/Frame (1).svg"
          alt=""
        />
      </div>

      <div className="bg-[#F7F9FD]">
        <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 py-10 md:py-[104px]">
          <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
            <h2 className="text-[32px] font-extrabold md:text-[44px]">
              Explore Available Tasks
            </h2>

            <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
              Discover the most active opportunities from communities making
              real impact
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {TASKS.map((task, i) => (
              <TasksCard task={task} key={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
              See all Tasks
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 bg-white px-5 py-10 pb-10 md:py-[104px] lg:flex-row lg:gap-20 lg:px-10">
        <div className="flex flex-col gap-6 lg:order-2 lg:max-w-[576px]">
          <div className="lg-text-[24px] w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] font-light text-[#1082E4] lg:px-8 lg:py-3">
            Create, Work & Earn
          </div>

          <div className="space-y-8 text-[#050215]">
            <h2 className="text-[30px] font-extrabold md:text-[40px]">
              Build, Contribute and Get Rewarded
            </h2>

            <p className="text-[18px] font-light md:text-[20px]">
              Discover communities, take on meaningful quests, and track your
              growth with AI-powered insights and Git-based contribution
              tracking and earn while at it. Contribute.fi helps your
              collaborate with other brilliant minds without friction.
            </p>
          </div>

          <AuthButtons />
        </div>

        <img
          className="mx-auto h-auto w-full bg-radial from-blue-100 from-40% to-white sm:w-1/2 lg:order-1 lg:w-full"
          src="/Blue Harmony and Balance 1.svg"
          alt=""
        />
      </div>

      <div className="bg-[#F7F9FD]">
        <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 py-10 md:py-[104px]">
          <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
            <h2 className="text-[32px] font-extrabold md:text-[44px]">
              Featured Communities
            </h2>

            <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
              Join thousands of contributors making impact across decentralized
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {COMMUNITIES.map((community, i) => (
              <CommunitiesCard community={community} key={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
              Explore all Communities
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-full max-w-[1200px] space-y-8 px-4 py-10 md:py-[104px] lg:px-10">
        <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
          <h2
            id="testimonials"
            className="text-[32px] font-extrabold md:text-[44px]"
          >
            Testimonials
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Stories from people who have built reputations, earned rewards, and
            grown with Contribute.fi.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-scroll">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="w-full min-w-[300px] space-y-6 rounded-2xl bg-[#F7F9FD] px-6 py-8 sm:min-w-[392px]"
            >
              <div className="flex items-start justify-between">
                <img src={testimonial.image} alt="" />
                <img src="/Quotes.svg" alt="" />
              </div>

              <p className="font-normal text-[#636366]">
                {testimonial.message}
              </p>

              <div className="space-y-2">
                <p className="text-[20px] font-semibold text-[#050215]">
                  {testimonial.name}
                </p>
                <p className="text-[18px] font-medium text-[#2F0FD1]">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
