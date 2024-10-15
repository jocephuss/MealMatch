import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_PROFILE } from "../utils/mutations";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { error }] = useMutation(LOGIN_PROFILE, {
    onCompleted(data) {
      // Handle successful login
      const token = data.login.token;
      localStorage.setItem("token", token); // Save the token to localStorage
      onLogin(); // Call the onLogin prop function
      navigate("/home"); // Navigate to the home page
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    try {
      await login({ variables: { email, password } });
    } catch (e) {
      console.error("Login error:", e); // Handle any errors
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>Error logging in: {error.message}</p>}{" "}
      <p className="signup-link">
        Don’t have an account? <a href="/signup">Sign up!</a>
      </p>
    </div>
  );
};

export default Login;
