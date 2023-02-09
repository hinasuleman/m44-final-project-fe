import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  function handleLogin() {
    console.log("login functionality");
  }
  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <input onChange={(event) => setEmail(event.target.value)} />
        <input onChange={(event) => setPassword(event.target.value)} />
      </form> */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogin}>Sign up!</button>
    </div>
  );
}
