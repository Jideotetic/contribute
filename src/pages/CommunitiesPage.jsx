import CommunitiesCard from "@/components/CommunitiesCard";
import Filter from "@/components/Filter";
import CustomPagination from "@/components/CustomPagination";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { COMMUNITIES } from "@/lib/constants";
import CustomSearch from "@/components/Search";

const COMMUNITIES_PER_PAGE = 15;

function CommunitiesPage() {
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
        <BackButton />

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

          <CustomSearch placeholder="Search community" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentCommunities.map((community, i) => (
            <CommunitiesCard
              community={community}
              key={i}
              tag="communities-page"
            />
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
