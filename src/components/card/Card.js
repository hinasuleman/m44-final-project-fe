import React from "react";
import './Card.css';

const Card = ({ book }) => {
  const postToLibrary = (e) => {
    e.preventDefault();
    //below code needed to write to DB
    // const newBook = {
    //   title: book.volumeInfo.title,
    //   author: book.volumeInfo.authors[0],
    //   isbn: book.volumeInfo.industryIdentifiers[0].identifier,
    //   thumbnail: book.volumeInfo.imageLinks.thumbnail,
    //   description: book.volumeInfo.description,
    //   category: book.volumeInfo.categories[0],
    //   selfLink: book.selfLink,
    //   publishedDate: book.volumeInfo.publishedDate,
    // };
    // console.log in lieu of POST fetch request
    
  };
  
  return (
    <div className="bookCard">
      {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/> : <p>No Image</p>}
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      <button onClick={postToLibrary}>Add to Library</button>
      <button onClick={console.log("add to wishlist")}>Add to Wishlist</button>
    </div>

  );
};

export default Card;

//{book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/> : <p>No Image</p>}

{/* <img src="../../images/blankCover.jpg" alt=""/> */}