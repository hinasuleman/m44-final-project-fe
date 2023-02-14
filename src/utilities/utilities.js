import {storeCookie, readCookie} from "../common/";

export const fetchBooks = async (searchTerm, searchType, setBooks, setFetchError, fetchError) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}&maxResults=39`
    );
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
  
};

// Login
export const login = async (email,password,setter,cookie) => {
  try {
    //**userName need to be changed to email */
      const response = await fetch("https://m44-final-project-be.onrender.com/login", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
              userName: email,
              password: password
          }
          )
      })
      const data = await response.json();
      console.log(data);//print all respons data
      console.log(data.user);//print user
      setter(data.user);//setUser to the logged in user
//store token in cookie
      storeCookie("jwt_token",data.token,7);
  } catch (error) {
      console.log(error)
  }
}
// signup or add new user to users DB
//also retuen a token and all user data including user_ID
//user_ID is not sent but auto created on insertion into the table by increament integer 
//the return TOKEN will have the ID encrypted inside it and can be obtained by readCookie(token)
export const addUser = async (firstName,surname, email,password,setter,cookie) => {
  try {
    //concat the names
    const newUserName= `${firstName} ${surname}`;
    //response shouls have user object and token
      const response = await fetch("https://m44-final-project-be.onrender.com/addUser", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
            
              userName : newUserName,
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

export const addBook = async (newBook,setter,cookie) => {
  try {
     const response = await fetch("https://bibliotech.onrender.com/addBook", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
            google_ID: newBook.id,
             ISBN:newBook.ISBN, 
             title:newBook.title, 
             author:newBook.author, 
             thumbnail:newBook.thumbnail, 
             description:newBook.description, 
             category:newBook.category, 
             selflink:newBook.selfLink, 
            publishDate:newBook.publishedDate
          }
          )
      })
      const data = await response.json();
      console.log(data);
      // console.log(data.user);
      // setter(data.user);

      // storeCookie("jwt_token",data.token,7);
  } catch (error) {
      console.log(error)
  }
}

export const deleteUser = async (username,email,password,setter,cookie) => {
  try {
      const response = await fetch("https://m44-final-project-be.onrender.com/deleteUser", {
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
      console.log(data.user);
     // setter(data.user);//after delete no need store

      //storeCookie("jwt_token",data.token,7);
      storeCookie ("");//reset TOKEN
  } catch (error) {
      console.log(error)
  }
}