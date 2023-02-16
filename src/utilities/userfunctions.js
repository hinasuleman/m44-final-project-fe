import { storeCookie } from "../common";

export const deleteUser = async (username,email,password,setter,cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}deleteUser`, {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                userName: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
  };

// signup or add new user to users DB
//also retuen a token and all user data including user_ID
//user_ID is not sent but auto created on insertion into the table by increament integer 
//the return TOKEN will have the ID encrypted inside it and can be obtained by readCookie(token)
export const addUser = async (firstName,surname, email,userName,password,setter,cookie) => {
    try {
      //optional userName to test mySQL DB which have it as a coloumn
      //const newUserName= "abcd";
      //response shouls have user object and token
      console.log("post functionality",firstName,surname,userName, email,password);
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addUser`, {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
              firstName: firstName,
              surname: surname,
                userName : userName,
                email: email,
                password: password
            }
            )
        })
        //clean the return user info and 
        const data = await response.json();
        // console.log(data);
        // console.log(data.user);
      //store user data we can use email as user ID too
        setter(data.user);
  //set the token for the new user
        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
  }

export const login = () => {
  console.log("Entering logon function")
}