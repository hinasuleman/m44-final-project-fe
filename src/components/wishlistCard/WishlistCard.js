import React from "react";
import './WishlistCard.css';

const WishlistCard = ({ bookItem }) => {

    //code to grab book data from DB


  
  return (
    <div className="wishlistCard">
      {bookItem.thumbnail ? <img src={bookItem.thumbnail} height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
      <br></br>
      <p className="title">{bookItem.title}</p>
      <p className="author">{bookItem.author}</p>
      <button >Remove from Wishlist</button>
      <button >Add to Library</button>
    </div>

  );
};

export default WishlistCard;