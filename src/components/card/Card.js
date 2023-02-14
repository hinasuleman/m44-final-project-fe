import React from "react";
import { postToLibrary } from "../../utilities/utilities";
import './Card.css';

const Card = ({ book }) => {
  const submitHandler1 = () => {
    // e.preventDefault();
    const user = {user_ID:2};
    console.log("click")
    postToLibrary(book,user);
    console.log("book added to library");
  };

  return (
    <div className="bookCard">
      {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail}
        height="200vh" alt="" /> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt="" />}
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      <button onClick={() => (submitHandler1())}>Add to Library</button>
      <button >Add to Wishlist</button>
    </div>

  );
};

export default Card;
