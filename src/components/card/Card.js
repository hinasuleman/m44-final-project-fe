import React from "react";
import { postToLibrary, postToWishlist } from "../../utilities/utilities";
import './Card.css';

const Card = ({ book }) => {
  const submitHandler1 = () => {
    // e.preventDefault();
    const user = {user_ID:2};
    postToLibrary(book,user);
    console.log("book added to library");
  };

  const submitHandler2 = () => {
    // e.preventDefault();
    const user = {user_ID:2};
    postToWishlist(book,user);
    console.log("book added to Wishlist");
  };

  return (
    <div className="bookCard">
      {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail}
        height="200vh" alt="" /> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt="" />}
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      <button onClick={() => (submitHandler1())}>Add to Library</button>
      <button onClick={() => (submitHandler2())}>Add to Wishlist</button>
    </div>

  );
};

export default Card;
