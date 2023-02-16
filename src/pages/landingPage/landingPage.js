import React, { useState } from "react";
import logo from "../../../src/images/logo/full_logo_transparent.png"
import "./landingPage.css";
import { useNavigate  } from 'react-router-dom';
import { login, logout } from "../../utilities/userfunctions";

export default function LandingPage({ setter }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateSignIn = (e) => {
    e.preventDefault();
    logout(setter)
    navigate("/signuppage");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("executing login request")
    await login(email, password, setter);
    navigate("/mainpage");
  }


  return (
    <div>

      <form>
          <input
            type="text"
            id="emailBox"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />

          <input
            type="password"
            id="passwordBox"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />

          <br></br>

      <div className="button-container">
        <button id="loginBtn" onClick={handleLogin}>
          Login
        </button>
        <button id="signUpBtn" onClick={navigateSignIn}>
          Sign Up!
        </button>
      </div>

    </form>
    <div className="box-container">
        <div className="box1">Box 1</div>
        <div className="box2"><img src={logo} alt="Logo" /></div>
        <div className="box3">Welcome!</div>
        <div className="box4">Login or sign up to get started</div>
    
      </div>
    </div>
  );
}