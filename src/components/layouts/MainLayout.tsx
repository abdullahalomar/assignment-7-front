import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const MainLayout = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  return (
    <div>
      <Navbar />
      <div
        className={`main-layout ${darkMode ? "bg-slate-900 text-white" : ""}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
