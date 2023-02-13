import {useState} from "react";
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
      <form onSubmit={(event) => submitHandler(event)}>
        <input placeholder="first name" onChange={(event) => changehandler(event,setFirstName,firstName)} />
        <input placeholder= "surname" onChange={(event) => changehandler(event,setSurname,surname)} />
        <input placeholder="email" onChange={(event) => changehandler(event,setEmail,email)} />
        <input placeholder= "confirm email" onChange={(event) => changehandler(event,setConfirmEmail,confirmEmail)} />
        <input placeholder= "password" onChange={(event) => changehandler(event,setPassword, password)} />
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}

