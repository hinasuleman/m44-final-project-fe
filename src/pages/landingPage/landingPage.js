import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  function handleLogin() {
    console.log("login functionality");
  }
  return (
    <div>
      {/* <form onSubmit={submitHandler}> */}
      <form>
        {/* <label for="Input"></label> */}
        <input
          type="text"
          id="Email"
          placeholder="Input: Email"
          // onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        {/* <label for="Input"></label> */}
        <input
          type="text"
          id="Password"
          placeholder="Input: Password"
          // onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogin}>Sign up!</button>
      <div class="box outerBox">outerBox</div>
      <br></br>
      <div class="box outerBox">innerBox</div>
    </div>
  );
}
