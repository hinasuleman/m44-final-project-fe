import React from "react";
import Card from "../card/Card";
import './CardContainer.css';

const CardContainer = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </>
  );
};

export default CardContainer;
