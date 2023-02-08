import React from "react";
import './Card.css';

const Card = ({ book }) => {
  const postToDb = (e) => {
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
    console.log("!!!!!!!: ", book);
  };
  return (
    <div className="bookCard">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      {/* <button onClick={postToDb}>Add to Library</button>
      <button onClick={postToDb}>Add to Wishlist</button> */}
    </div>

  );
};

export default Card;
