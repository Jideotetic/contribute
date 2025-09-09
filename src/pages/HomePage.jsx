import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";

const METRICS = [
  { title: "communities", value: "1,200" },
  { title: "quests completed", value: "4,000" },
  { title: "paid out", value: "2.3M" },
  { title: "contributors", value: "15,000" },
];

function HomePage() {
  return (
    <>
      <div className="mb-10 space-y-16 bg-linear-to-b from-white to-[#EDF2FF]">
        <div className="space-y-12 border-2">
          <div className="mx-auto max-w-[1200px] space-y-8 border-2 text-center text-[#1C1C1E]">
            <h1 className="text-[36px] font-extrabold md:text-[64px]">
              Powering Communities, One Contribution at a Time
            </h1>

            <p className="mx-auto max-w-[842px] font-light md:text-[20px]">
              Contribute.fi connects projects with passionate contributors
              through smart contracts, wallet-linked reputation, and transparent
              rewards — built on Soroban & Stellar.
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-col items-center justify-center gap-4 border-2 sm:flex-row">
            <Button className="w-full cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70 sm:w-fit">
              Explore Communities
            </Button>
            <Button
              variant="outline"
              className="w-full cursor-pointer rounded-md bg-[#EDF2FF] px-8 py-4 text-[#2F0FD1] hover:text-[#2F0FD1] sm:w-fit"
            >
              View Tasks
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="border border-red-500">
          <img className="w-full" src="/Frame.svg" alt="" />
        </div>
      </div>

      <div className="mb-10 space-y-4 border-2 border-green-500 bg-white">
        <div className="mx-auto max-w-[1200px] space-y-8 border-2 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            A Growing Network of Builders
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Join communities, complete tasks, and earn rewards alongside
            thousands of contributors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 border-2 border-red-500 sm:grid-cols-4 lg:px-20">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col justify-center rounded-[8px] bg-[#F7F9FD] px-[20px] py-[40px] ${metric.title === "paid out" && "sm:order-4"}`}
            >
              <div
                className={`${metric.title === "communities" || metric.title === "contributors" ? "text-[#2F0FD1]" : "text-[#1082E4]"} text-[20px] font-bold`}
              >
                {metric.title === "paid out" && "$"}
                {metric.value}
              </div>
              <div className="text-[15px] text-[#636366]">{metric.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 flex flex-col gap-12 border-2 border-green-500 lg:flex-row lg:gap-20 lg:px-20">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] text-[#1082E4]">
            About Contribute
          </div>

          <div className="space-y-8 border-2 text-[#050215]">
            <h2 className="text-[30px] font-extrabold md:text-[44px]">
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

        <img className="" src="/Frame (1).svg" alt="" />
      </div>

      <div className="mb-10 space-y-8 border-2 border-green-500">
        <div className="mx-auto max-w-[1200px] space-y-8 border-2 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            A Growing Network of Builders
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Join communities, complete tasks, and earn rewards alongside
            thousands of contributors.
          </p>
        </div>
      </div>

      <div className="mb-10 flex flex-col gap-12 border-2 border-green-500 lg:flex-row lg:gap-20 lg:px-20">
        <img className="" src="/Group 14.svg" alt="" />

        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] text-[#1082E4]">
            About Contribute
          </div>

          <div className="space-y-8 border-2 text-[#050215]">
            <h2 className="text-[30px] font-extrabold md:text-[44px]">
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
      </div>
    </>
  );
}

export default HomePage;
