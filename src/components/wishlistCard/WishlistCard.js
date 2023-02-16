import React from "react";
import { deleteFromWishlist, moveToLibrary } from "../../utilities/utilities";
import './WishlistCard.css';

const WishlistCard = ({ bookItem }) => {
  const submitHandler1 = () => {
    console.log("Clicked: remove from wishlist")
    deleteFromWishlist(bookItem);
    console.log("book removed from wishlist");
  };

  const submitHandler2 = () => {
    console.log("Clicked: move to library")
    moveToLibrary(bookItem);
    console.log("book moved to library");
  };

  
  return (
    <div className="wishlistCard">
      {bookItem.thumbnail ? <img src={bookItem.thumbnail} height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
      <br></br>
      <p className="title">{bookItem.title}</p>
      <p className="author">{bookItem.author}</p>
      <button onClick={() => (submitHandler1())}>Remove from Wishlist</button>
      <button onClick={() => (submitHandler2())}>Move to Library</button>
    </div>

  );
};

export default WishlistCard;