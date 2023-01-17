import { NavLink } from "react-router-dom";
import style from "../styles/Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
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
