import React from "react";
import "./signupPage.css";

export default function SignupPage() {
  function handleSignup() {
    console.log("signup functionality");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(event) => setFirstName(event.target.value)} />
        <input onChange={(event) => setSurname(event.target.value)} />
        <input onChange={(event) => setEmail(event.target.value)} />
        <input onChange={(event) => confirmEmail(event.target.value)} />
        <input onChange={(event) => setPassword(event.target.value)} />
      </form>
     <button onClick={handleSignup}>Sign up!</button>
    </div>
  );
}

