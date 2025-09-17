import CommunitiesCard from "@/components/CommunitiesCard";
import CustomPagination from "@/components/CustomPagination";
import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import { COMMUNITIES_OVERVIEW } from "@/lib/constants";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { FaLink } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import BackButton from "@/components/BackButton";
import Heading from "@/components/dashboard/Heading";
import MetricsContainer from "@/components/dashboard/MetricsContainer";
import MetricCard from "@/components/dashboard/MetricCard";
import CustomSearch from "@/components/Search";
import Sort from "@/components/Sort";
import TasksCard from "@/components/TasksCard";

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

const COMMUNITIES_TAG = ["Dex", "DeFi", "Wallet"];

const COMMUNITIES_DETAILS = [
  { title: "Members", value: 64 },
  { title: "Contributors", value: 23 },
  { title: "Total Tasks", value: 12 },
  { title: "Total Spent", value: 2000 },
];

function Communities() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const totalCommunities = COMMUNITIES.length;
  const totalPages = Math.ceil(totalCommunities / COMMUNITIES_PER_PAGE);

  const startIndex = (currentPage - 1) * COMMUNITIES_PER_PAGE;
  const currentCommunities = COMMUNITIES.slice(
    startIndex,
    startIndex + COMMUNITIES_PER_PAGE,
  );

  const [taskCurrentPage, setTaskCurrentPage] = useState(1);

  const totalTask = TASKS.length;
  const taskTotalPages = Math.ceil(totalTask / COMMUNITIES_PER_PAGE);

  const taskStartIndex = (currentPage - 1) * COMMUNITIES_PER_PAGE;
  const currentTask = TASKS.slice(
    taskStartIndex,
    taskStartIndex + COMMUNITIES_PER_PAGE,
  );

  const queryParams = new URLSearchParams(location.search);
  const communityName = queryParams.get("community");

  console.log({ communityName });

  const handleSort = (sortOrder) => {
    console.log("Sort by:", sortOrder); // "Newest" or "Oldest"
    // trigger your sort logic here
  };

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

              <div className="top-[42%] right-0 flex flex-wrap items-center justify-between gap-2 lg:absolute lg:w-1/2 xl:top-[53%] xl:w-1/3">
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

              <div className="rounded-[4px] bg-white px-5 py-4 xl:w-1/2 xl:self-end">
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

          <div className="space-y-4 rounded-[4px] bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="w-full xl:order-2 xl:w-fit">
                <CustomSearch placeholder="Search task" />
              </div>

              <div className="flex w-full flex-1 shrink-0 gap-4 rounded-[8px] bg-[#F7F9FD] p-2 xl:w-1/2">
                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-white p-2 text-[15px] text-[#2F0FD1]"
                >
                  Tasks
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                >
                  Forum
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 cursor-pointer rounded-[2px] border-none bg-[#F7F9FD] p-2 text-[15px] text-[#525866]"
                >
                  Leader Board
                </Button>
              </div>

              <div className="flex gap-4 xl:order-3">
                <Filter />
                <Sort onToggle={handleSort} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {currentTask.map((task, i) => (
                <TasksCard task={task} key={i} />
              ))}
            </div>

            <CustomPagination
              currentPage={taskCurrentPage}
              totalPages={taskTotalPages}
              onPageChange={(page) => setTaskCurrentPage(page)}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="md:hidden">
              <Heading />
            </div>

            <MetricsContainer>
              {COMMUNITIES_OVERVIEW.map((item, index) => (
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
                      {item.value}
                    </span>
                    <span className="font-medium text-[#7A899B]">
                      {item.title}
                    </span>
                  </div>
                </MetricCard>
              ))}
            </MetricsContainer>
          </div>

          <div className="space-y-4 rounded-[4px] bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
              <CustomSearch placeholder="search community" />

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
                <Sort onToggle={handleSort} />
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
