import React from "react";
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
  
    const handleLogin = async (event) => {
    console.log("login functionality");
    
    // const [username,setUsername] =useState();
    // const [email,setEmail] =useState();
    // const [password,setPassword] =useState();
    const email = document.getElementById('emailBox').value;
    const password = document.getElementById('passwordBox').value;

    
        event.preventDefault();
        console.log("executing login request")
        //log in + set TOKEN + setUser via setter
       const userInfo= await login(email,password,setter);
    
  

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
      
      <div class="button-container">
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
        <div className="box2">BiblioTech</div>
        <div className="box3">Welcome!</div>
        <div className="box4">Everyones favourite BookClub.</div>
        <div className="box5">Sign up for free to get started.</div>
      </div>
    </div>
  );
}
