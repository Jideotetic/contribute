export default function DashboardLayoutContainer({ children }) {
  return (
    <div className="grid min-h-screen grid-cols-12 grid-rows-12 border-2 border-red-500 bg-[#F7F9FD]">
      {children}
    </div>
  );
}
