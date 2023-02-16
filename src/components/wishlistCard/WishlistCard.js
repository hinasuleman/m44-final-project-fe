import React from "react";
import { deleteFromWishlist, moveToLibrary } from "../../utilities/utilities";
import './WishlistCard.css';

const WishlistCard = ({ bookItem }) => {
  const submitHandler1 = () => {
    deleteFromWishlist(bookItem);
    console.log("book removed from wishlist");
  };

  const submitHandler2 = () => {
    moveToLibrary(bookItem);
    console.log("book moved to library");
  };

  return (
    <div className="wishlistCard">
        {bookItem.thumbnail ? <img src={bookItem.thumbnail} height="350vh" alt="" /> :
        <img src={require("../../images/blankCover.jpg")} height="350vh" alt="" />}
        <br></br>
          <div className="cardtexts">
            <p className="title">{bookItem.title}</p>
            <p className="author">{bookItem.author}</p>
          </div>
          <div className="rmvaddbtns">
            <button className="rmvbutons">Remove from Wishlist</button>
            <button className="addbutons">Move to Library</button>
          </div>
    </div>
  );
};

export default WishlistCard;
