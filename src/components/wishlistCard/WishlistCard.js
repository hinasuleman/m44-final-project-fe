import React from "react";
import './WishlistCard.css';

const WishlistCard = ({ bookItem }) => {

  //code to grab book data from DB



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
        <button className="rmvbutons">remove from wishlist</button>
        <button className="addbutons">+ my library</button>
      </div>
    </div>

  );
};

export default WishlistCard;