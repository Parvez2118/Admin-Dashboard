
import { useAuth0 } from "@auth0/auth0-react";
function Login(){
    const { loginWithRedirect, logout } = useAuth0();

    return(
        <>
        <button onClick={() => loginWithRedirect()}>Log In</button> 

        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </>
    )
}

export default Login;




// import React, { useState } from "react";
// import "./Login.css";

// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

 

//   return (
//     <div className="screen">
//       <div className="left"></div>
//       <div className="box">
//         <div className="main-title">Hello Again!</div>
//         <p className="text">Welcome back, you've been missed</p>
//         <div className="inputs">
//           <input
//             className="box2"
//             placeholder="Enter User Name"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <input
//             className="box2"
//             placeholder="Password"
//             type="password" // Use type="password" for password input
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <div className="forgot">Forgot Password?</div>
//         </div>
//         <button className="login" >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;