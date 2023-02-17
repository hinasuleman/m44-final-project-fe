import {useState} from "react";
import logo from "../../../src/images/logo/full_logo_transparent.png"
import "./signupPage.css";
import { addUser } from "../../utilities/userfunctions";
import { useNavigate  } from 'react-router-dom';

export default function SignupPage(setter) {
  const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("false")
    
    function changehandler(event, setter, state) {
        setter(event.target.value)
    }

    async function submitHandler(event) {
    event.preventDefault()
    await addUser(firstName, surname, email, userName, password, setter);
      navigate ("/");
    }
  
  return (
    <div className="signupContainer">
      <div className="logo"><img src={logo} alt="Logo" /></div>
        <form onSubmit={(event) => submitHandler(event)}>
          <input placeholder="First name" onChange={(event) => changehandler(event,setFirstName,firstName)} />
          <input placeholder= "Surname" onChange={(event) => changehandler(event,setSurname,surname)} />
          <input placeholder= "Username" onChange={(event) => changehandler(event,setUserName,userName)} />
          <input placeholder="Email" onChange={(event) => changehandler(event,setEmail,email)} />
          <input placeholder= "Confirm Email" onChange={(event) => changehandler(event,setConfirmEmail,confirmEmail)} />
          <input placeholder= "Password" type="password" onChange={(event) => changehandler(event,setPassword, password)} />
          <button type="submit">Sign Up!</button>
        </form>
      </div>
  );
}
