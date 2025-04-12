import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
export default function AuthNav() {
  const getLinkStyles = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <NavLink to="/" className={getLinkStyles}>
        Home
      </NavLink>
      <NavLink className={getLinkStyles} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkStyles} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
