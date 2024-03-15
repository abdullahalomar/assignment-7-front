import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/cloth.png";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-slate-200 md:px-28 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="#" className="text-md font-bold hover:text-cyan-500">
                All Winter Clothes
              </NavLink>
            </ul>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/dashboard"
                className="text-md font-bold hover:text-cyan-500"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>

          <Link to="/">
            <img src={logo} width={100} alt="" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex me-6">
            <ul className="menu menu-horizontal px-4">
              <NavLink
                to="/winter-clothes"
                className="text-md font-bold hover:text-cyan-500"
              >
                All Winter Clothes
              </NavLink>
            </ul>
            {currentUser ? (
              <ul className="menu menu-horizontal px-1">
                <NavLink
                  to="/dashboard"
                  className="text-md font-bold hover:text-cyan-500"
                >
                  Dashboard
                </NavLink>
              </ul>
            ) : null}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-md font-bold hover:text-white btn btn-secondary"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="text-md font-bold hover:text-white btn btn-primary"
              >
                Login
              </NavLink>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
