import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="Navs">
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        Favorite
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link tabs active" : "nav-link tabs"
        }
      >
        Log out
      </NavLink>
    </ul>
  );
};
export default Navigation;
