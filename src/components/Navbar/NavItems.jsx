import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/books",
    name: "All Books",
  },
  {
    path: "/add-book",
    name: "Add Book",
    roles: ["librarian"],
  },
  {
    path: "/borrowedbooks",
    name: "Borrowed Books",
    roles: ["user", "librarian"],
  },
];

export default function NavItems({ className = "", onItemClick }) {
  const { currentUser } = useAuth();
  const userRole = currentUser?.role;

  const displayNavItems = navItems.filter(
    item => !item.roles || item.roles?.includes(userRole)
  );

  return (
    <ul className={"text-lg ".concat(className).trim()}>
      {displayNavItems.map(item => (
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
