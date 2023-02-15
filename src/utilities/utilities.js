<<<<<<< HEAD
import { readCookie } from "../common";
=======
import {storeCookie, readCookie} from "../common/";
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a

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

<<<<<<< HEAD
export const postToLibrary = async (book,user) => {
  try {
    console.log(book.volumeInfo)
    const blankImage = require("../images/blankCover.jpg");
    let category  = "No Category Information";
    console.log(category);
    if (!book.volumeInfo.description == null) {book.volumeInfo.description = "No Description Information"};  
    if (!book.volumeInfo.publishedDate == null) {book.volumeInfo.publishedDate = "No Publication Date Information"};  
    if (!book.volumeInfo.imageLinks.thumbnail == null) {book.volumeInfo.imageLinks.thumbnail = blankImage};  
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addBook`, {
          method:"POST",
          headers: {"Content-Type" : "application/json"}, //token not need at the moment
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              category: category,
              selflink: book.selfLink,
              publishDate: book.volumeInfo.publishedDate 
=======
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
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a
          }
          )
      })
      const data = await response.json();
<<<<<<< HEAD
      console.log(data);
  } catch (error) {
      console.log(error)
  };
}
export const postToWishlist = async (book,user) => {
  try {
    console.log(book.volumeInfo)
    const blankImage = require("../images/blankCover.jpg");
    let category  = "No Category Information";
    console.log(category);
    if (!book.volumeInfo.description == null) {book.volumeInfo.description = "No Description Information"};  
    if (!book.volumeInfo.publishedDate == null) {book.volumeInfo.publishedDate = "No Publication Date Information"};  
    if (!book.volumeInfo.imageLinks.thumbnail == null) {book.volumeInfo.imageLinks.thumbnail = blankImage};  
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addWishBook`, {
          method:"POST",
          headers: {"Content-Type" : "application/json"}, //token not need at the moment
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              category: category,
              selflink: book.selfLink,
              publishDate: book.volumeInfo.publishedDate 
=======
      console.log(data);//print all respons data
      console.log(data.user);//print user info
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
export const addUser = async (firstName,surname, email,userName,password,setter,cookie) => {
  try {
    //optional userName to test mySQL DB which have it as a coloumn
    //const newUserName= "abcd";
    //response shouls have user object and token
    console.log("post functionality",firstName,surname,userName, email,password);
      const response = await fetch("https://m44-final-project-be.onrender.com/addUser", {
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

export const addBook = async (newBook,setter,cookie) => {
  try {
     const response = await fetch("https://m44-final-project-be.onrender.com/addBook", {
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
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a
          }
          )
      })
      const data = await response.json();
      console.log(data);
<<<<<<< HEAD
  } catch (error) {
      console.log(error)
  };
}

export const deleteFromLibrary = async (book,user) => {
  let cookie = readCookie("jwt_token")
  try {
    console.log(book.volumeInfo) 
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addWishBook`, {
          method:"DELETE",
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${cookie}`},
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              // title: book.volumeInfo.title,
              // author: book.volumeInfo.authors[0],
              // ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
              // thumbnail: book.volumeInfo.imageLinks.thumbnail,
              // description: book.volumeInfo.description,
              // category: category,
              // selflink: book.selfLink,
              // publishDate: book.volumeInfo.publishedDate 
=======
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
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a
          }
          )
      })
      const data = await response.json();
      console.log(data);
<<<<<<< HEAD
  } catch (error) {
      console.log(error)
  };
}

export const listBooks = async () => {
  let cookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX0lEIjoyLCJpYXQiOjE2NzYzODc5Mjh9.MujBAdpbOJpGCQjr_-VSwVnBuFV5R0otwHW8oFYbx1U";
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listBooks`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie}`
      }
    });
    const data = await response.json();
    console.log("listBooks fn data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const wishListBooks = async () => {
  let cookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX0lEIjoyLCJpYXQiOjE2NzYzODc5Mjh9.MujBAdpbOJpGCQjr_-VSwVnBuFV5R0otwHW8oFYbx1U";
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listWishBooks`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie}`
      }
    });
    const data = await response.json();
    console.log("wishListBooks fn data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (userName,email,password) => {
  try {
    console.log("deleteuser")
    console.log(userName,email,password)
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}deleteUser`,{
        method:"DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password
        })
      })
    const data = await response.json()
    console.log(data)
    
  } catch (error) {
    console.log(error);
  }
  
};
=======
      console.log(data.user);
     // setter(data.user);//after delete no need store

      //storeCookie("jwt_token",data.token,7);
      storeCookie ("");//reset TOKEN
  } catch (error) {
      console.log(error)
  }
}
>>>>>>> b363e197cbe42cfa20941738e22464b68e320f2a
