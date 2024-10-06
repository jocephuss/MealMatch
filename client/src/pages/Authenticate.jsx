import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthenticatePage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login onLogin={onLogin} /> : <Signup />}{" "}
      {/* Pass onLogin to Login */}
      {/* <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={toggleAuthMode}>{isLogin ? "Signup" : "Login"}</button>
      </p> */}
    </div>
  );
};

export default AuthenticatePage;
