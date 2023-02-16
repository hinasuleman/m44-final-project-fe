import React from "react";
import { deleteFromLibrary } from "../../utilities/utilities";
import './LibraryCard.css';

const LibraryCard = ({ bookItem }) => {
  const submitHandler = () => {
    console.log("Clicked: remove from library")
    deleteFromLibrary(bookItem);
    console.log("book removed from library");
  };
    
  return (
    <div className="LibraryCard">
      {bookItem.thumbnail ? <img src={bookItem.thumbnail} height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
      <br></br>
      <p className="title">{bookItem.title}</p>
      <p className="author">{bookItem.author}</p>
      <button onClick={() => (submitHandler())}>Remove from Library</button>
    </div>
  );
};

export default LibraryCard;

