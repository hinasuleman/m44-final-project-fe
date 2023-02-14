import {useState} from "react";
import logo from "../../../src/images/logo/full_logo_transparent.png"
import "./signupPage.css";

export default function SignupPage() {
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")

    function changehandler(event, setter, state) {
        setter(event.target.value)
        console.log(state)        
    }

  function submitHandler(event) {
    event.preventDefault()
    console.log("signup functionality");
  }

  return (
    <div className="signupContainer">

      <div className="logo"><img src={logo} alt="Logo" /></div>

      <form onSubmit={(event) => submitHandler(event)}>
        <input placeholder="First name" onChange={(event) => changehandler(event,setFirstName,firstName)} />
        <input placeholder= "Surname" onChange={(event) => changehandler(event,setSurname,surname)} />
        <input placeholder="Email" onChange={(event) => changehandler(event,setEmail,email)} />
        <input placeholder= "Confirm Email" onChange={(event) => changehandler(event,setConfirmEmail,confirmEmail)} />
        <input placeholder= "Password" onChange={(event) => changehandler(event,setPassword, password)} />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}

