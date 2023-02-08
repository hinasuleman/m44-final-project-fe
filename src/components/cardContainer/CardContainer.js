import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ books }) => {
  console.log(`CardContainer ${books}`);
  return (
    <div className="cardContainer">
      {books.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
};

export default CardContainer;
