import CommunitiesCard from "@/components/CommunitiesCard";
import Filter from "@/components/Filter";
import CustomPagination from "@/components/CustomPagination";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const COMMUNITIES_PER_PAGE = 15;

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

function CommunitiesPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalCommunities = COMMUNITIES.length;
  const totalPages = Math.ceil(totalCommunities / COMMUNITIES_PER_PAGE);

  const startIndex = (currentPage - 1) * COMMUNITIES_PER_PAGE;
  const currentCommunities = COMMUNITIES.slice(
    startIndex,
    startIndex + COMMUNITIES_PER_PAGE,
  );

  return (
    <div className="bg-white pt-40">
      <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 pb-10 lg:px-10">
        <button
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-2"
        >
          <img src="/CaretCircleLeft.svg" alt="" />
          <span className="text-[18px] text-[#0D0516]">Back</span>
        </button>

        <div className="flex flex-wrap items-end justify-between gap-4 lg:items-end">
          <div className="text-[#050215]">
            <h2 className="text-[24px] font-extrabold md:text-[44px]">
              All Communities ({COMMUNITIES.length})
            </h2>
            <p className="font-light md:text-[20px]">
              Explore communities building impactful projects
            </p>
          </div>

          <div className="flex shrink-0 lg:order-3">
            <Filter tag="landing" />
          </div>

          <div className="relative w-full rounded-md border border-[#D0D5DD] px-[30px] py-2 sm:order-2 lg:w-[350px]">
            <Search
              className="absolute top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]"
              size={16}
            />
            <input
              type="text"
              // value={searchItem}
              placeholder="search community"
              // onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full rounded-md border-none bg-[lg:w-[300px] pl-1 text-[14px] text-[#667185] outline-none placeholder:text-[#8E8E93]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentCommunities.map((community, i) => (
            <CommunitiesCard community={community} key={i} />
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

export default CommunitiesPage;
