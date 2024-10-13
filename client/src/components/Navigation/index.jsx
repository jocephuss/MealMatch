import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faUserSlash } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <ul className="Navs">
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        <FontAwesomeIcon icon={faStar} />
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        <FontAwesomeIcon icon={faUserSlash} />
      </NavLink>
    </ul>
  );
};

export default Navigation;
