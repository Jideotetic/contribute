function MetricsContainer({ children }) {
  return (
    <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
      {children}
    </div>
  );
}

export default MetricsContainer;
