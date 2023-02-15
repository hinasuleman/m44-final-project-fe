import {useState} from "react";
import "./signupPage.css";
import { addUser } from "../../utilities/utilities";
import { useNavigate  } from 'react-router-dom';

export default function SignupPage(setter) {
  const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("false")
    
    function changehandler(event, setter, state) {
        setter(event.target.value)
        console.log(state)
 
    }

    async function submitHandler(event) {
    event.preventDefault()
    console.log("signup functionality",firstName,surname, email,password);
    const userInfo= await addUser(firstName,surname, email,userName,password, setter);
    ///if (userInfo != null){
      navigate ("/mainpage");
    //}
      //check if email is wrtten correctly before submit
      //test add user addUser(firstName,surname, email,password,setter);
      if (email !== confirmEmail){
        //if emails not same ask to reinput showing error message
          setConfirmEmail (true); 
      
         }else if (email === "" || confirmEmail === "" || firstName === "" || surname === "" ||  password === ""){
          //check fields are not empty if empty the ask to reenter
          
          setConfirmEmail (true);
         }
         
      if (!confirmEmail ){
          //const newUser= await addUser(firstName,surname, email,password,setter);
          // console.log (newUser);
          // const data =newUser.json();
          // console.log (data.user);
          // setter (data.user);
      } 
         
          
      
      
      
    }
  
  return (
    <div className="signupContainer">
      <form onSubmit={(event) => submitHandler(event)}>
        <input placeholder="First name" onChange={(event) => changehandler(event,setFirstName,firstName)} />
        <input placeholder= "Surname" onChange={(event) => changehandler(event,setSurname,surname)} />
        <input placeholder="Email" onChange={(event) => changehandler(event,setEmail,email)} />
        <input placeholder= "Confirm Email" onChange={(event) => changehandler(event,setConfirmEmail,confirmEmail)} />
        <input placeholder= "userName" onChange={(event) => changehandler(event,setUserName,userName)} />
        <input placeholder= "Password" onChange={(event) => changehandler(event,setPassword, password)} />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}
