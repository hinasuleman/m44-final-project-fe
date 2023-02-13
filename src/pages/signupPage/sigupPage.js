import {useState} from "react";
import "./signupPage.css";

export default function SignupPage() {
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("false")

    function changehandler(event, setter, state) {
        setter(event.target.value)
        console.log(state)
        
    }

   
   

  async function submitHandler(event) {
    event.preventDefault()
    console.log("signup functionality");
    //check if email is wrtten correctly before submit
    if (email != confirmEmail){
        setConfirmEmail (false); 
    
       }else{
        //check not empty 
        if (email == "" && confirmEmail == "" || firstName == "" || surname == "" ||  password == ""){
        setConfirmEmail (true);
       }
       }
    if (confirmEmail === true ){
        await addUser(firstName,surname, email,password,setter);
    } else {
    //if wronge email and no field is blank return and reinput
    if (){
        setConfirmEmail (false)
    }
       
        
    }
    
    
  }
  return (
    <div>
        {confirmEmail && <H3> Email not matched or field empty please input again</H3>}
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

