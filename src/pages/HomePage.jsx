import { useEffect } from "react";
import { useLocation } from "react-router";
import { METRICS } from "@/lib/constants";
import AuthButtons from "@/components/AuthButtons";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import ExploreTask from "@/components/ExploreTask";
import FeaturedCommunities from "@/components/FeaturedCommunities";

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
      <Hero />

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

      <About />

      <ExploreTask />

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

      <FeaturedCommunities />

      <Testimonial />
    </>
  );
}

export default HomePage;
