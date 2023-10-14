
import React, { useState } from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
     {
      !isAuthenticated &&
      <div className="screenlogin">
      <div className="leftlogin"></div>
      <div className="box">
        <div className="main-titlelogin">Hello Again!</div>
        <p className="textlogin">Welcome back, you've been missed</p>
        <div className="inputslogin">
          <input
            className="box2"
            placeholder="Enter User Name"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="box2"
            placeholder="Password"
            type="password" // Use type="password" for password input
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="forgot">Forgot Password?</div>
        </div>
        <button className="login" >
          Login
        </button>

        <button className="login1" onClick={() => loginWithRedirect()}><FcGoogle size={20} style={{paddingRight:"5px"}}></FcGoogle>Log In With Google</button> 
      </div>
    </div>
     }

    {
      isAuthenticated&&<Dashboard></Dashboard>
    }
    </>
  );
}

export default App;
