import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthenticatePage = () => {
  const [isLogin, setIsLogin] = useState(true); // state to toggle between login and signup

  const toggleAuthMode = () => {
    setIsLogin(!isLogin); // toggle between login and signup modes
  };

  return (
    <div>
      {/* <h1>{isLogin ? "Login" : "Signup"}</h1> */}
      {isLogin ? <Login /> : <Signup />}
      {/* <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={toggleAuthMode}>{isLogin ? "Signup" : "Login"}</button>
      </p> */}
    </div>
  );
};

export default AuthenticatePage;
