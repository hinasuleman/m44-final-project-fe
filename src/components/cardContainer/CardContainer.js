import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ page, books, fetchError, user, setShowCardContainer, setShowLibraryContainer, setShowWishlistContainer, setWishList }) => {
  const toggleSearchBtn = () => {
    setShowCardContainer(false);
    if (page === "library") {
      setShowLibraryContainer(true);
    } else if (page === "wishlist") {
      setShowWishlistContainer(true);
    }
  };

  if (!fetchError) {
    return (
      <div className="cardContainer">
        <div className="bccontainer">
          <div className="srtbdiv">
            <h1 className="srh1">Search Results</h1>
            <div className="scrollbtn">
              {page === "library" ?
                <button className="returnbtn" onClick={toggleSearchBtn}>Return to my library</button>
                :
                <button className="returnbtn" onClick={toggleSearchBtn}>Return to wishlist</button>
              }
              {/* <button className="returnbtn" onClick={toggleSearchBtn}>Return to my library</button> */}
            </div>
          </div>
          {books.map((book, index) => (
            <Card key={index} book={book} user={user} />
          ))}
        </div>
      </div >
    );
  } else if (fetchError) {
    return <ErrorInFetchBooks />
  }
};


const ErrorInFetchBooks = () => {
  return (
    <div>
      <h1>Error in Fetch Request</h1>
    </div>
  );
}

export default CardContainer;