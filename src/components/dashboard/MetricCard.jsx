function MetricCard({ children }) {
  return (
    <div className="flex w-full min-w-[260px] items-center gap-4 rounded-[8px] bg-white px-4.5 py-4">
      {children}
    </div>
  );
}

export default MetricCard;
