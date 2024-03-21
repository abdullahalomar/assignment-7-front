/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cloth.png";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/features/darkMood/darkMoodSlice";
import dark from "../../assets/images/night-mode.png";
import light from "../../assets/images/light-mode.png";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
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
              {currentUser ? (
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-md font-bold hover:text-cyan-500"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null}

              <li>
                {currentUser ? (
                  <NavLink
                    to="/leaderboard"
                    className="text-md font-bold hover:text-cyan-500"
                  >
                    Leaderboard
                  </NavLink>
                ) : null}
              </li>

              {currentUser ? (
                <li>
                  <NavLink
                    to="/winter-clothes"
                    className="text-md font-bold hover:text-cyan-500"
                  >
                    All Winter Clothes
                  </NavLink>
                </li>
              ) : (
                <NavLink
                  to="/winter-clothes"
                  className="text-md font-bold"
                  activeClassName="cursor-not-allowed"
                  aria-disabled="true"
                  onClick={(e) => e.preventDefault()}
                >
                  All Winter Clothes
                </NavLink>
              )}

              <li>
                <NavLink
                  to="/community"
                  className="text-md font-bold hover:text-cyan-500"
                >
                  Community
                </NavLink>
              </li>
              {currentUser ? (
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0}>
                    <li>
                      <NavLink
                        to="/volunteer"
                        className="text-md font-bold hover:text-cyan-500"
                      >
                        Volunteer
                      </NavLink>
                    </li>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        to="/volunteer/about-us"
                        className="text-md font-bold hover:text-cyan-500"
                      >
                        Our Volunteers
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} width={100} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {currentUser ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={0}>
                  <li>
                    <NavLink
                      to="/volunteer"
                      className="text-md font-bold hover:text-cyan-500"
                    >
                      Volunteer
                    </NavLink>
                  </li>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/volunteer/about-us"
                      className="text-md font-bold hover:text-cyan-500"
                    >
                      Our Volunteers
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}

            <li>
              <NavLink
                to="/community"
                className="text-md font-bold hover:text-cyan-500"
              >
                Community
              </NavLink>
            </li>
            <li>
              {currentUser ? (
                <NavLink
                  to="/winter-clothes"
                  className="text-md font-bold hover:text-cyan-500"
                >
                  All Winter Clothes
                </NavLink>
              ) : (
                <NavLink
                  to="/winter-clothes"
                  className="text-md font-bold"
                  activeClassName="cursor-not-allowed"
                  aria-disabled="true"
                  onClick={(e) => e.preventDefault()}
                >
                  All Winter Clothes
                </NavLink>
              )}
            </li>
            <li>
              {currentUser ? (
                <NavLink
                  to="/leaderboard"
                  className="text-md font-bold hover:text-cyan-500"
                >
                  Leaderboard
                </NavLink>
              ) : null}
            </li>
            <li>
              {currentUser ? (
                <NavLink
                  to="/dashboard"
                  className="text-md font-bold hover:text-cyan-500"
                >
                  Dashboard
                </NavLink>
              ) : null}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
          <motion.div
            className="ms-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {darkMode ? (
              <button className="" onClick={handleDarkModeToggle}>
                <img src={light} width={35} alt="" />
              </button>
            ) : (
              <button className="" onClick={handleDarkModeToggle}>
                <img src={dark} width={35} alt="" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
