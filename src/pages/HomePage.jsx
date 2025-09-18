import { useEffect } from "react";
import { useLocation } from "react-router";
import AuthButtons from "@/components/AuthButtons";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import ExploreTask from "@/components/ExploreTask";
import FeaturedCommunities from "@/components/FeaturedCommunities";
import Metrics from "@/components/Metrics";

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

      <Metrics />

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
