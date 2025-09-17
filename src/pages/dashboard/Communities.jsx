import CommunitiesCard from "@/components/CommunitiesCard";
import CustomPagination from "@/components/CustomPagination";
import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import { COMMUNITIES_OVERVIEW } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { FaLink } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import BackButton from "@/components/BackButton";

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

const COMMUNITIES_TAG = ["Dex", "DeFi", "Wallet"];

const COMMUNITIES_DETAILS = [
  { title: "Members", value: 64 },
  { title: "Contributors", value: 23 },
  { title: "Total Tasks", value: 12 },
  { title: "Total Spent", value: 2000 },
];

function Communities() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const [currentPage, setCurrentPage] = useState(1);

  const totalCommunities = COMMUNITIES.length;
  const totalPages = Math.ceil(totalCommunities / COMMUNITIES_PER_PAGE);

  const startIndex = (currentPage - 1) * COMMUNITIES_PER_PAGE;
  const currentCommunities = COMMUNITIES.slice(
    startIndex,
    startIndex + COMMUNITIES_PER_PAGE,
  );

  const queryParams = new URLSearchParams(location.search);
  const communityName = queryParams.get("community");

  console.log({ communityName });

  return (
    <>
      {communityName ? (
        <div className="space-y-6">
          <div className="md:hidden">
            <BackButton />
          </div>

          <div className="relative space-y-20 lg:space-y-25">
            <div className="relative h-[180px] rounded-[4px] bg-[url(/Mask-group.svg)] bg-cover bg-center bg-no-repeat lg:h-[229px]">
              <div className="absolute -bottom-1/3 left-1/2 h-[118px] w-[118px] -translate-x-1/2 rounded-full bg-white p-2 lg:left-10 lg:h-[140px] lg:w-[140px] lg:translate-x-0">
                <div className="h-full rounded-full bg-[#F2F2F7] p-5">
                  <img src="/ChartPolar (1).svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 xl:flex-row">
              <div className="space-y-3 xl:space-y-4">
                <h2 className="text-[20px] font-semibold text-[#050215] md:text-[24px]">
                  {communityName}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {COMMUNITIES_TAG.map((community, index) => (
                    <div
                      className="rounded-[4px] bg-[#E2F1FE] px-2 py-1 text-[14px] text-[#1082E4]"
                      key={index}
                    >
                      {community}
                    </div>
                  ))}
                </div>
                <p className="font-normal text-[#09032A] md:text-[18px]">
                  Building an efficient payment flow for everyone.
                </p>
              </div>

              <div className="top-[42%] right-0 flex flex-wrap items-center justify-between gap-2 lg:absolute lg:w-1/2 xl:top-[55%] xl:w-1/3">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white p-2">
                    <FaLink className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <RiTwitterXFill className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <RiInstagramFill className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <LuGithub className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                </div>

                <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
                  Join
                </Button>
              </div>

              <div className="rounded-[4px] bg-white px-5 py-4 xl:w-1/2">
                <div className="grid grid-cols-2 divide-x divide-y divide-[#F0F4FD] lg:grid-cols-4 lg:divide-y-0">
                  {COMMUNITIES_DETAILS.map((community, index) => {
                    const disableRightLine = index === 1;
                    const disableTopLine = index === 2;
                    const isLastItem = index === COMMUNITIES_DETAILS.length - 1;

                    return (
                      <div
                        key={index}
                        className={`space-y-1.5 px-4 py-3 lg:items-start ${disableRightLine ? "border-r-0" : ""} ${disableTopLine ? "border-b-0" : ""} border-[#F0F4FD] ${!isLastItem ? "lg:border-r" : ""}`}
                      >
                        <div className="text-[14px] font-normal text-[#525866]">
                          {community.title}
                        </div>
                        <div className="font-semibold text-[#09032A]">
                          {community.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-500">
            <div className="space-y-4 rounded-[4px] bg-white p-4">
              <div className="flex border-2 gap-5">
                <div className="flex flex-col gap-3 border-2 flex-1">
                  <div className="relative flex-1 rounded-md border border-[#D0D5DD] px-[30px] py-2">
                    <Search
                      className="absolute top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]"
                      size={16}
                    />
                    <input
                      type="text"
                      // value={searchItem}
                      placeholder="search task"
                      // onChange={(e) => onSearchChange?.(e.target.value)}
                      className="w-full rounded-md border-none bg-[lg:w-[300px] pl-1 text-[14px] text-[#667185] outline-none placeholder:text-[#8E8E93]"
                    />
                  </div>

                  {/* <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:flex-1">
                  Create Community
                </Button> */}
                </div>

                <div className="flex flex-1 flex-wrap items-center justify-between gap-4 border-2">
                  <div className="flex w-full gap-4 rounded-[8px] bg-[#F7F9FD] p-2 lg:w-1/2">
                    <Button
                      variant="outline"
                      className="flex-1 cursor-pointer rounded-[2px] border-none bg-white p-2 text-[15px] text-[#2F0FD1]"
                    >
                      All
                    </Button>

                    <Button
                      variant="outline"
                      className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                    >
                      Joined
                    </Button>

                    <Button
                      variant="outline"
                      className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                    >
                      Created
                    </Button>
                  </div>

                  <div className="flex gap-4">
                    <Filter />
                    <Filter />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#050215] md:hidden">
              {capitalizeFirstLetter(currentPath)}
            </h1>

            <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
              {COMMUNITIES_OVERVIEW.map((item, i) => (
                <div
                  key={i}
                  className="flex w-full min-w-[260px] items-center gap-4 rounded-[8px] bg-white px-4.5 py-4"
                >
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
                      {item.title === "reputation score" && (
                        <small> / 10</small>
                      )}
                    </span>
                    <span className="font-medium text-[#7A899B]">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[4px] bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
              <div className="relative flex-1 rounded-md border border-[#D0D5DD] px-[30px] py-2">
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

              <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70 sm:flex-1">
                Create Community
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex w-full gap-4 rounded-[8px] bg-[#F7F9FD] p-2 lg:w-1/2">
                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-white p-2 text-[15px] text-[#2F0FD1]"
                >
                  All
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                >
                  Joined
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                >
                  Created
                </Button>
              </div>

              <div className="flex gap-4">
                <Filter />
                <Filter />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
      )}
    </>
  );
}

export default Communities;
