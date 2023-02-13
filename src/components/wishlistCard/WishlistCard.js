import React from "react";
import './WishlistCard.css';

const WishlistCard = ({ book }) => {

    //code to grab book data from DB


  
  return (
    <div className="WishlistCard">
      {book.thumbnail ? <img src="book.thumbnail" height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
      <br></br>
      <p className="title">{book.volumeInfo.title}</p>
      <p className="author">{book.volumeInfo.authors}</p>
      <button >Remove from Wishlist</button>
      <button >Add to Library</button>
    </div>

  );
};

export default WishlistCard;