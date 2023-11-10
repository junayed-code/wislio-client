import { BsPerson } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export default function UserAccount() {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  const handleLogoutUser = () => {
    logOut().then(() => navigate("/signin"));
  };

  return (
    <div className="hidden lg:block">
      {currentUser ? (
        <div className="flex items-center bg-base-300 py-2 px-3 rounded-[100px]">
          <div className="avatar flex items-center">
            <div className="w-10 rounded-full">
              <img src={currentUser.photoURL} alt={currentUser.displayName} />
            </div>
            <span className="ml-2 font-semibold">
              Hi, {currentUser.displayName}
            </span>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <FiMoreVertical className="text-2xl ml-2 cursor-pointer" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-2 dropdown-content mt-5 z-50 p-2 w-52 bg-base-100 border border-neutral rounded-md"
            >
              <li>
                <a className="text-base">Profile</a>
              </li>
              <li>
                <button
                  onClick={handleLogoutUser}
                  className="inline-flex justify-between items-center text-base"
                >
                  Logout <IoIosLogOut />
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link
          to="/signin"
          className="flex items-center gap-x-2 hover:underline underline-offset-4"
        >
          <BsPerson className="text-[28px]" />
          <span>Sign In</span>
        </Link>
      )}
    </div>
  );
}
