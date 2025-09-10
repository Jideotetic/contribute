import AuthButtons from "@/components/AuthButtons";
import { Button } from "@/components/ui/button";

const METRICS = [
  { title: "communities", value: "1,200" },
  { title: "quests completed", value: "4,000" },
  { title: "paid out", value: "2.3M" },
  { title: "contributors", value: "15,000" },
];

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

const COMMUNITIES = [
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
];

const TASK_TAG_BG = {
  Design: "bg-[#FDE7E1]",
  Development: "bg-[#F6ECF5]",
  Growth: "bg-[#D9F3DC]",
  QA: "bg-[#E3F3FE]",
};

const COMMUNITY_TAG_BG = {
  Dex: "bg-[#FDE7E1]",
  DeFi: "bg-[#F6ECF5]",
};

const TESTIMONIALS = [
  {
    image: "/Frame 63.svg",
    message:
      "Thanks to Contribute.fi’s transparent payouts, our contributors trust us more. No more confusion about deadlines or payments — it’s all on-chain.",
    name: "Mark Joe",
    designation: "Community Owner",
  },
  {
    image: "/Frame 63 (1).svg",
    message:
      "Thanks to Contribute.fi’s transparent payouts, our contributors trust us more. No more confusion about deadlines or payments — it’s all on-chain.",
    name: "Ade Makinwa",
    designation: "Product Designer",
  },
  {
    image: "/Frame 63 (2).svg",
    message:
      "Thanks to Contribute.fi’s transparent payouts, our contributors trust us more. No more confusion about deadlines or payments — it’s all on-chain.",
    name: "Sarah Martins",
    designation: "Backend Developer",
  },
];

function HomePage() {
  return (
    <>
      <div className="mb-10 space-y-16 bg-linear-to-b from-white to-[#EDF2FF] px-4">
        <div className="space-y-12">
          <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#1C1C1E]">
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

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        <div>
          <img className="w-full" src="/Frame.svg" alt="" />
        </div>
      </div>

      <div className="mb-10 space-y-4 bg-white px-4">
        <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            A Growing Network of Builders
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Join communities, complete tasks, and earn rewards alongside
            thousands of contributors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 lg:px-20">
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

      <div className="mb-10 flex flex-col gap-12 px-4 lg:flex-row lg:gap-20 lg:px-20">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] text-[#1082E4]">
            About Contribute
          </div>

          <div className="space-y-8 text-[#050215]">
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

        <img
          className="mx-auto h-auto w-full sm:w-1/2 lg:w-full"
          src="/Frame (1).svg"
          alt=""
        />
      </div>

      <div className="mb-10 space-y-8 bg-[#F7F9FD] px-4">
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
          {TASKS.map((task, i) => (
            <div
              key={i}
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
                      <img src="/UsersThree.svg" alt="" />{" "}
                      {task.numberOfMembers}
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
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70">
            See all Tasks
          </Button>
        </div>
      </div>

      <div className="mb-10 flex flex-col gap-12 px-4 lg:flex-row lg:gap-20 lg:px-20">
        <div className="flex flex-col gap-6 lg:order-2">
          <div className="w-fit rounded-[58px] bg-[#E2F1FE] px-8 py-2 text-[20px] text-[#1082E4]">
            Create, Work & Earn
          </div>

          <div className="space-y-8 text-[#050215]">
            <h2 className="text-[30px] font-extrabold md:text-[44px]">
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

      <div className="mb-10 space-y-8 bg-[#F7F9FD] px-4">
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
            <div
              key={i}
              className={`flex flex-col justify-center gap-8 rounded-[8px] border-2 border-[#F0F4FD] bg-white px-[24px] py-[28px]`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <img src="/ChartPolar.svg" alt="" />
                    <div className="space-y-1">
                      <p className="font-semibold text-[#050215]">
                        {community.name}
                      </p>
                      <p className="flex gap-1 text-[14px] text-[#2F0FD1]">
                        <img src="UsersThree (1).svg" alt="" />{" "}
                        <span className="shrink-0">
                          {community.numberOfMembers} members
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {community.tag.map((t, i) => (
                      <div
                        className={`rounded-[4px] px-[12px] py-[5px] text-sm font-normal text-[#313131] ${COMMUNITY_TAG_BG[t]}`}
                        key={i}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-light text-[#050215]">
                  {community.description}
                </p>
              </div>

              <div className="flex items-end justify-between rounded-[4px] border-[0.5px] border-[#F0F4FD] bg-[#F7F9FD] p-4">
                <div className="space-y-2 text-sm font-normal text-[#525866]">
                  <div className="flex gap-1.5">
                    <img src="/Briefcase.svg" alt="" />
                    <span> {community.newTask} new tasks</span>
                  </div>
                  <div className="flex gap-1.5">
                    <img src="/Coins.svg" alt="" />
                    <span>{community.amountSpent} spent</span>
                  </div>
                </div>

                <button className="font-medium text-[#2F0FD1]"> + Join</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-4 hover:bg-[#2F0FD1]/70">
            Explore all Communities
          </Button>
        </div>
      </div>

      <div className="mb-10 space-y-8 px-4 lg:px-10">
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
