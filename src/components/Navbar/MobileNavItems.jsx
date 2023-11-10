import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoMdMenu, IoMdClose, IoIosLogOut } from "react-icons/io";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import NavItems from "./NavItems";
import { useAuth, useTheme } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";

export default function MobileNavItems() {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const { currentTheme, changeTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(open => !open);
  }
  function handleToggleTheme() {
    const theme = currentTheme === "light" ? "dark" : "light";
    changeTheme(theme);
  }
  const handleLogoutUser = () => {
    logOut().then(() => navigate("/signin"));
  };

  return (
    <>
      <label
        tabIndex={0}
        className="p-2 lg:hidden cursor-pointer"
        onClick={handleMenuToggle}
      >
        <IoMdMenu className="text-3xl" />
      </label>

      <div
        className={`grid lg:hidden fixed inset-0 z-50 overflow-y-auto overflow-x-hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleMenuToggle}
          className="hero-overlay bg-opacity-40"
        ></div>
        <div
          className={`w-80 sm:w-96 px-5 py-4 justify-self-end bg-base-100 col-start-1 row-start-1 duration-200 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-2 space-y-4">
            <label className="flex justify-end">
              <span tabIndex={0} onClick={handleMenuToggle}>
                <IoMdClose className="text-3xl cursor-pointer" />
              </span>
            </label>
            {/* User profile */}
            {currentUser && (
              <div className="flex items-center tracking-wider p-2 rounded-md bg-secondary text-secondary-content px-4">
                <img
                  className="w-10 aspect-square rounded-full mr-4 ring-4 ring-base-100"
                  src={currentUser.photoURL}
                  alt=""
                />
                <div className="font-semibold text-sm">
                  <p className="">{currentUser.displayName}</p>
                  <p>{currentUser.email}</p>
                </div>
              </div>
            )}

            {/* Theme change and logout button */}
            <ul className="text-base font-medium space-y-1">
              {currentUser ? (
                <li
                  className="p-2 bg-secondary text-secondary-content rounded-md hover:bg-secondary-focus"
                  onClick={handleMenuToggle}
                >
                  <button
                    onClick={handleLogoutUser}
                    className="inline-flex justify-between items-center text-base w-full"
                  >
                    Logout <IoIosLogOut />
                  </button>
                </li>
              ) : (
                <li
                  className="p-2 bg-secondary text-secondary-content rounded-md hover:bg-secondary-focus"
                  onClick={handleMenuToggle}
                >
                  <Link
                    to="/signin"
                    className="flex items-center justify-between hover:underline"
                  >
                    <span>Sign In</span>
                    <BsPerson className="text-lg" />
                  </Link>
                </li>
              )}
              <li className="p-2 bg-secondary text-secondary-content rounded-md hover:bg-secondary-focus">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={handleToggleTheme}
                >
                  <span>Theme </span>
                  {currentTheme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
                </button>
              </li>
            </ul>

            {/* Navbar Items */}
            <NavItems className="menu p-0" onItemClick={handleMenuToggle} />
          </div>
        </div>
      </div>
    </>
  );
}
