import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";

const Sort = ({ onToggle }) => {
  const [isNewest, setIsNewest] = useState(true);

  const handleToggle = () => {
    const newState = !isNewest;
    setIsNewest(newState);
    onToggle?.(newState ? "Newest" : "Oldest");
  };

  return (
    <button
      onClick={handleToggle}
      className="group flex cursor-pointer items-center gap-2 rounded-md bg-[#F7F9FD] px-4 py-2 text-sm font-medium text-[#2F0FD1] hover:bg-[#2F0FD1] hover:text-[#F7F9FD]"
    >
      <LuArrowUpDown className="text-[#2F0FD1] group-hover:text-[#F7F9FD]" />
      {isNewest ? "Newest" : "Oldest"}
    </button>
  );
};

export default Sort;
