import { capitalizeFirstLetter } from "@/lib/utils";
import { useLocation } from "react-router";

export default function Heading() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  return (
    <h1 className="text-[20px] font-bold text-[#050215] md:text-2xl">
      {capitalizeFirstLetter(currentPath)}
    </h1>
  );
}
