function OverviewHeading({ children, title, description, large }) {
  return (
    <div
      className={`flex flex-col gap-6 ${large ? "lg:flex-row lg:items-end lg:justify-between" : "sm:flex-row sm:items-end sm:justify-between"} `}
    >
      <div className="space-y-2">
        <h2 className="text-[20px] font-bold text-[#050215]">{title}</h2>
        <p className="font-medium text-[#777F90]">{description}</p>
      </div>

      <div className="flex gap-4">{children}</div>
    </div>
  );
}

export default OverviewHeading;
