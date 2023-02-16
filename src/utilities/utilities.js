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
    let cookie = readCookie("jwt_token");
    const blankImage = require("../images/blankCover.jpg");
    let category  = "No Category Information";
    if (!book.volumeInfo.description == null) {book.volumeInfo.description = "No Description Information"};  
    if (!book.volumeInfo.publishedDate == null) {book.volumeInfo.publishedDate = "No Publication Date Information"};
    if (!book.volumeInfo.imageLinks.thumbnail == null) {book.volumeInfo.imageLinks.thumbnail = blankImage};  
    //if (book.volumeInfo.imageLinks.thumbnail === null || book.volumeInfo.imageLinks.thumbnail === "undefined") {book.volumeInfo.imageLinks.thumbnail = "https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png"};  
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addBook`, {
          method:"POST",
          headers: {"Content-Type" : "application/json", "Authorization": `Bearer ${cookie}`},
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              category: category,
              selfLink: book.selfLink,
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
    let cookie = readCookie("jwt_token");
    const blankImage = require("../images/blankCover.jpg");
    let category  = "No Category Information";
    if (!book.volumeInfo.description == null) {book.volumeInfo.description = "No Description Information"};  
    if (!book.volumeInfo.publishedDate == null) {book.volumeInfo.publishedDate = "No Publication Date Information"};  
    //if (book.volumeInfo.imageLinks.thumbnail === null || book.volumeInfo.imageLinks.thumbnail === "undefined") {book.volumeInfo.imageLinks.thumbnail = "https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png"};
    if (!book.volumeInfo.imageLinks.thumbnail == null) {book.volumeInfo.imageLinks.thumbnail = blankImage}; 
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addWishBook`, {
          method:"POST",
          headers: {"Content-Type" : "application/json", "Authorization": `Bearer ${cookie}`},
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              ISBN: book.volumeInfo.industryIdentifiers[0].identifier,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              category: category,
              selfLink: book.selfLink,
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
  let cookie = readCookie("jwt_token");
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listBooks`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie}`
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const wishListBooks = async () => {
  let cookie = readCookie("jwt_token");
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

export const deleteFromLibrary = async (bookItem) => {
  let cookie = readCookie("jwt_token")
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}deleteBook`, {
          method:"DELETE",
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${cookie}`},
          body: JSON.stringify({
              google_ID: bookItem.google_ID
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
};

export const deleteFromWishlist = async (bookItem) => {
  let cookie = readCookie("jwt_token")
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}deleteWishBook`, {
          method:"DELETE",
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${cookie}`},
          body: JSON.stringify({
              google_ID: bookItem.google_ID
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
};

export const moveToLibrary = () => {
  console.log("move to library from wishlist fn")
};