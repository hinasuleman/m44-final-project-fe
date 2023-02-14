import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  function handleLogin() {
    console.log("login functionality");
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
          type="text"
          id="passwordBox"
          placeholder=" Password"
          // onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <div class="button-container">
        <button id="loginBtn" onClick={handleLogin}>
          Login
        </button>
        <button id="signUpBtn" onClick={handleLogin}>
          Sign Up!
        </button>
      </div>
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
