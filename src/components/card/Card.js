import React from "react";
import './Card.css';

const Card = ({ book }) => {

  const postToLibrary = (e) => {
    e.preventDefault();
    //below code needed to write to DB
    // const newBook = {
    //   id: book.id,
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
      {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail}
        height="350vh" alt="" /> : <img src={require("../../images/blankCover.jpg")} height="350vh" alt="" />}
      <br></br>
      <div className="cardtext">
        <p className="title">{book.volumeInfo.title}</p>
        <p className="author"><strong>{book.volumeInfo.authors}</strong></p>
      </div>
      <div className="plusbtns">
        <button className="librarybtn" onClick={postToLibrary}>+ my library</button>
        <button className="wishlistbtn" >+ wishlist</button>
      </div>
    </div>

  );
};

export default Card;

//{book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/> : <p>No Image</p>}

//<img src="../../images/blankCover.jpg" alt=""/>
