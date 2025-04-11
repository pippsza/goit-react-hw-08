import { NavLink } from "react-router";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
