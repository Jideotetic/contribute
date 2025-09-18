import { IoGrid } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdLibraryAddCheck } from "react-icons/md";
import { GiFallingStar, GiTwoCoins } from "react-icons/gi";
import { GiIceCube } from "react-icons/gi";
import { BsBoundingBox } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BsIntersect } from "react-icons/bs";
import { LuListChecks } from "react-icons/lu";

export const LANDING_NAV_LINKS = [
  { title: "Communities", href: "/communities" },
  { title: "Tasks", href: "/tasks" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Learn More", href: "/learn-more" },
];

export const METRICS = [
  { title: "communities", value: "1,200" },
  { title: "quests completed", value: "4,000" },
  { title: "paid out", value: "2.3M" },
  { title: "contributors", value: "15,000" },
];

export const TASKS = [
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

export const COMMUNITIES = [
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
  },
  {
    name: "The Unifiers",
    description: "Building an efficient payment flow for everyone.",
    numberOfMembers: 24,
    tag: ["DeFi", "Dex"],
    newTask: 12,
    amountSpent: "1,0000",
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

export const TASK_TAG_BG = {
  Design: "bg-[#FDE7E1]",
  Development: "bg-[#F6ECF5]",
  Growth: "bg-[#D9F3DC]",
  QA: "bg-[#E3F3FE]",
};

export const COMMUNITY_TAG_BG = {
  Dex: "bg-[#FDE7E1]",
  DeFi: "bg-[#F6ECF5]",
};

export const TESTIMONIALS = [
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

export const FOOTER_LINKS = [
  { title: "Communities", href: "/communities" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Tasks", href: "/tasks" },
  { title: "Terms of Use", href: "/terms-of-use" },
  { title: "Learn More", href: "/learn-more" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];

export const DASHBOARD_NAV_LINKS = [
  {
    heading: "MAIN MENU",
    links: [
      { title: "Overview", href: "/dashboard/overview", icon: IoGrid },
      {
        title: "Communities",
        href: "/dashboard/communities",
        icon: HiSquare3Stack3D,
      },
      { title: "Tasks", href: "/dashboard/tasks", icon: FaNewspaper },
      { title: "Earnings", href: "/dashboard/earnings", icon: FaCreditCard },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BsBarChartLineFill,
      },
    ],
  },
  {
    heading: "PERSONAL",
    links: [
      { title: "Profile", href: "/dashboard/profile", icon: FaUser },
      {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: FaBell,
      },
      {
        title: "Help & Support",
        href: "/dashboard/help",
        icon: IoIosHelpCircle,
      },
    ],
  },
];

export const OVERVIEW = [
  {
    title: "task in progress",
    value: 23,
    icon: MdLibraryAddCheck,
  },
  {
    title: "amount earned",
    value: 1500,
    icon: GiTwoCoins,
  },
  {
    title: "communities",
    value: 8,
    icon: GiIceCube,
  },
  {
    title: "reputation score",
    value: 5,
    icon: GiFallingStar,
  },
];

export const COMMUNITIES_OVERVIEW = [
  {
    title: "total communities",
    value: 82,
    icon: BsBoundingBox,
  },
  {
    title: "communities joined",
    value: 34,
    icon: FaUserCheck,
  },
  {
    title: "total members",
    value: 433,
    icon: HiUserGroup,
  },
  {
    title: "overall spent",
    value: 5,
    icon: GiTwoCoins,
  },
];

export const TASKS_OVERVIEW = [
  {
    title: "active tasks",
    value: 32,
    icon: BsIntersect,
  },
  {
    title: "tasks claimed",
    value: 14,
    icon: LuListChecks,
  },
  {
    title: "total contributors",
    value: 124,
    icon: HiUserGroup,
  },
  {
    title: "overall tasks",
    value: 432,
    icon: BsBoundingBox,
  },
];
