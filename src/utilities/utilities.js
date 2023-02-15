import { readCookie } from "../common";

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
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
};

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
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
};

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
};

//CS work in progress:
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
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
};
