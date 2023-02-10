import React from "react";
import WishlistCard from "../wishlistCard/WishlistCard";
import './WishlistContainer.css';

const WishlistContainer = ({ books, fetchError }) => {
  if(!fetchError){
    return (
      <div className="WishlistContainer">
        {books.map((book, index) => (
          <WishlistCard key={index} book={book} />
        ))}
      </div>
    );
  } else if (fetchError) {
    return <ErrorInFetchBooks />
  }
};


const ErrorInFetchBooks = () => {
  return(
    <div>
      <h1>Error in Fetch Request</h1>
    </div>
  );
}

export default WishlistContainer;