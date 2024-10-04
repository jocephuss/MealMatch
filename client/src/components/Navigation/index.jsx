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
      
      <NavLink
      to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Login
      </NavLink>
    </ul>
  );
};
export default Navigation;
