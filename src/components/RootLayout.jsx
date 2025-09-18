import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="fixed right-0 left-0 z-50 px-5 pt-2">
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
