import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    onCompleted(data) {
      // Handle successful signup
      const token = data.addProfile.token;
      localStorage.setItem("token", token); // Save the token to localStorage
      navigate("/home"); // Navigate to the home page
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up with:", { email, password, username });

    try {
      await addProfile({ variables: { username, email, password } });
    } catch (e) {
      console.error("Signup error:", e);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text" // Change to text type for username
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>Error signing up: {error.message}</p>}
      <p className="login-link">
        Already have an account? <a href="/">Log in!</a>
      </p>
    </div>
  );
};

export default Signup;
