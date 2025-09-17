import { capitalizeFirstLetter } from "@/lib/utils";
import { useLocation } from "react-router";

export default function Heading() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1];
  return (
    <h1 className="text-[20px] font-bold text-[#050215] md:text-2xl">
      {capitalizeFirstLetter(currentPath)}
    </h1>
  );
}
