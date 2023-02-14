import React from "react";
import './LibraryContainer.css';
import LibraryCard from '../libraryCard/LibraryCard';

const LibraryContainer = ({ books, fetchError }) => {
  if (!fetchError) {
    return (
      <div className="cardContainer">
        {books.map((book, index) => (
          <LibraryCard key={index} book={book} />
        ))}
      </div>
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

export default LibraryContainer;
