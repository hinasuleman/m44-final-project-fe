import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ books, fetchError, user }) => {
  if (!fetchError) {
    return (
      <div className="cardContainer">
        <div className="bccontainer">
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
