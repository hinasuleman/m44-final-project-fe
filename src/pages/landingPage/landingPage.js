import React from "react";
import logo from "../../../src/images/logo/full_logo_transparent.png"
import "./landingPage.css";
import { useNavigate  } from 'react-router-dom';
import { login } from "../../utilities/utilities";



export default function LandingPage(setter) {
  const navigate = useNavigate();
  const navigateSignIn = (e) =>{
    //handling signup by reirection to signUp page
   e.preventDefault ();
   navigate ("/signuppage");
  }
  //handle login intitate TOKEN and store User information
  
    const handleLogin = async (e) => {
    console.log("login functionality");
    
    e.preventDefault ();
   
    const email = document.getElementById('emailBox').value;
    const password = document.getElementById('passwordBox').value;

    
        e.preventDefault();
        console.log("executing login request")
        //log in + set TOKEN + setUser via setter
       const userInfo= await login(email,password,setter);
       navigate ("/mainpage");
       //if query succeful move to main
  if (userInfo != null){
    navigate ("/mainpage");
  }

  }
  return (
    <div>
      {" "}
      {/* <form onSubmit={submitHandler}> */}
      <form>
        {/* <label for="Input"></label> */}
        <input
          type="text"
          id="emailBox"
          placeholder=" Email"
          // onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        {/* <label for="Input"></label> */}
        <input
          type="password"
          id="passwordBox"
          placeholder=" Password"
          // onChange={(event) => setPassword(event.target.value)}
        />
<<<<<<< HEAD
      </form>
      <div className="button-container">
=======
      
      <div class="button-container">
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a
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
        {/* <div className="box4">Everyones favourite BookClub.</div> */}
        <div className="box5">Login or sign up to get started</div>
      </div>
    </div>
  );
}
