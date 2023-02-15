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

export const addUser = async (firstName,surname, email,userName,password,setter,cookie) => {
    try {
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
        const data = await response.json();
        setter(data.user);
        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
  }

  export const login = async (email,password,setter) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
              method:"POST",
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify({
              oldEmail: email,
              email: email,
              password: password
            }
          )
        })
      const data = await response.json();
      setter(data.user);
      storeCookie("jwt_token", data.token, 7);
    } catch (error) {
        console.log(error)
    }
  };

 export const logout = (setUser) => {
    document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
    setUser("");
  };