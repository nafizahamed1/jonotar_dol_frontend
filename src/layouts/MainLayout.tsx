import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;