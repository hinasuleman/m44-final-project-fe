import React from "react";
import './LibraryCard.css';

const LibraryCard = ({ book }) => {

    //code to grab book data from DB


  
  return (
    <div className="LibraryCard">
      {book.thumbnail ? <img src="book.thumbnail" height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      <button >Remove from Library</button>
    </div>

  );
};

export default LibraryCard;
