import React from "react";
import Card from "./Card";

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
