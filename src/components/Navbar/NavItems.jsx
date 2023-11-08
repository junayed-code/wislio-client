import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

const navItems = [
  {
    path: "/",
    name: "Home",
    private: false,
  },
  {
    path: "/books",
    name: "All Books",
    private: false,
  },
  {
    path: "/add-book",
    name: "Add Book",
    private: true,
  },
  {
    path: "/borrowedbooks",
    name: "Borrowed Books",
    private: true,
  },
];

export default function NavItems({ className = "", onItemClick }) {
  const { currentUser } = useAuth();

  return (
    <ul className={"text-lg ".concat(className).trim()}>
      {navItems
        .filter(item => !item.private || (currentUser && item.private))
        .map(item => (
          <li key={item.name}>
            <NavLink
              onClick={onItemClick}
              className="text-base-content/75 hover:underline underline-offset-4"
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
