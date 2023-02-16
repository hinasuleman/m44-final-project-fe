import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ books, fetchError, user, setShowCardContainer, setShowLibraryContainer, setWishList }) => {
  const toggleSearchBtn = () => {
    console.log('!!!!!!!!!!!!')
    setShowCardContainer(false);
    setShowLibraryContainer(true);
  };
  // console.log(toggleSearchBtn)

  if (!fetchError) {
    return (
      <div className="cardContainer">
        <div className="bccontainer">
          <div className="srtbdiv">
            <h1 className="srh1">Search Results</h1>
            <button className="returnbtn" onClick={toggleSearchBtn}>Return to my library</button>
          </div>
          {books.map((book, index) => (
            <Card key={index} book={book} />
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
