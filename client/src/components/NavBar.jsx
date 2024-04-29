import { Link } from "react-router-dom";
import "./Navbar.css";
import GlobalSearch from "./GlobalSearch/GlobalSearch";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <div className="navItem">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/rules">Rules</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/classes">Classes</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/bestiary">Bestiary</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/spells">Spells</Link>
          </div>
        </li>
      </ul>
      <GlobalSearch />
    </nav>
  );
}

export default NavBar;
