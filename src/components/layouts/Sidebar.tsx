import {
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquareCode,
  Shirt,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const currentUser = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <aside className="bg-gray-800 text-white h-screen col-span-2 sticky top-0 left-0 overflow-auto">
      <h2 className="text-2xl font-semibold my-8 ms-5 truncate">Dashboard</h2>
      <nav className="flex flex-col mt-6 lg:px-5 md:px-5 ps-5">
        <ul>
          <li className="mb-6">
            <Link to="/" className="text-md font-bold hover:text-cyan-600">
              <Home className="shrink-0" />
              {/* <span className="truncate  font-bold">Dashboard</span> */}
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/dashboard"
              className="py-2 px-4 outline hover:outline-0 hover:bg-slate-300 text-white hover:text-black rounded me-3 sm:me-3 md:mx-auto lg:mx-auto flex items-center justify-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 mb-4"
            >
              <LayoutDashboard className="shrink-0" />
              <span className="truncate  font-bold">Dashboard</span>
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/dashboard/winter-cloths"
              className="py-2 px-4 outline hover:outline-0 hover:bg-slate-300 text-white hover:text-black rounded me-3 sm:me-3 md:mx-auto lg:mx-auto flex items-center justify-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 mb-4"
            >
              <Shirt className="shrink-0" />
              <span className="truncate  font-bold">Winter Cloths</span>
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/dashboard/testimonials"
              className="py-2 px-4 outline hover:outline-0 hover:bg-slate-300 text-white hover:text-black rounded me-3 sm:me-3 md:mx-auto lg:mx-auto flex items-center justify-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 mb-4"
            >
              <MessageSquareCode className="shrink-0" />

              <span className="truncate  font-bold">Testimonials</span>
            </Link>
          </li>

          <li className="mt-14">
            <Link
              to="#"
              onClick={handleLogout}
              className="text-md font-bold py-2 px-4 outline hover:outline-0 hover:bg-slate-300 text-white hover:text-black rounded me-3 sm:me-3 md:mx-auto lg:mx-auto flex items-center justify-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 mb-4"
            >
              <LogOut className="shrink-0" />
              <span className="truncate font-bold">Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
