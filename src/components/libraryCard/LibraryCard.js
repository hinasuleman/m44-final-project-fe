import React from "react";
import { deleteFromLibrary } from "../../utilities/utilities";
import './LibraryCard.css';

const LibraryCard = ({ bookItem }) => {
  const submitHandler = () => {
    deleteFromLibrary(bookItem);
    console.log("book removed from library");
  };

  return (
    <div className="LibraryCard">
      {bookItem.thumbnail ? <img src={bookItem.thumbnail} height="350vh" alt="" /> :
        <img src={require("../../images/blankCover.jpg")} height="350vh" alt="" />}
      <br></br>
      <div className="textcard">
        <p className="title">{bookItem.title}</p>
        <p className="author">{bookItem.author}</p>
      </div>
      <div className="rmvbtns">
        <button className="buttonrmv" onClick={() => (submitHandler())}>Remove from Library</button>
      </div>
    </div>
  );
};

export default LibraryCard;

