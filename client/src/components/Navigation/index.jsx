import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <NavLink
      to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Home
      </NavLink> 
      <NavLink
      to="/favorite"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Favorite
      </NavLink>
      
      <li>Other things</li>
    </ul>
  );
};
export default Navigation;
