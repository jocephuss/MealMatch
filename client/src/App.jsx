import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.css";

const App = ({ handleLogin }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    setIsAuthenticated(true);
    handleLogin();
    navigate("/home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <header>
        <h1>MealMatch</h1>

        {isAuthenticated && (
          <nav>
            <ul>
              <li>
                <Link to="/">Authenticate</Link>
              </li>
              <li>
                <Link to="/home">Discover</Link>
              </li>
              <li>
                <Link to="/favorite">Favorites</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="Foot">
        <p>MealMatch Footer!</p>
      </footer>
    </>
  );
};

export default App;
