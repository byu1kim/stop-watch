import { NavLink } from "react-router-dom";
import style from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <header>
      <nav className={style.navi}>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">STATISTICS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
