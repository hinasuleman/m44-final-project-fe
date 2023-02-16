import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ books, fetchError }) => {
  if (!fetchError) {
    return (
      <div className="cardContainer">
        <div className="bccontainer">
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
