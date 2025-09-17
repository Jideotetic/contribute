import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import TaskPage from "./pages/TaskPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Communities from "./pages/dashboard/Communities";
import Tasks from "./pages/dashboard/Tasks";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "learn-more", element: <></> },
      { path: "tasks", Component: TaskPage },
      { path: "communities", Component: CommunitiesPage },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      // { index: true, Component: HomePage },
      { path: "overview", Component: Overview },
      { path: "communities", Component: Communities },
      { path: "tasks", Component: Tasks },
      { path: "earnings", element: <></> },
      { path: "analytics", element: <></> },
      { path: "profile", element: <></> },
      { path: "notifications", element: <></> },
      { path: "help", element: <></> },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
