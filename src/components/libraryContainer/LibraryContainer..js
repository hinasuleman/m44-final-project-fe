import React from "react";
import LibraryCard from "";
import './LibraryContainer.css';

const LibraryContainer = ({ books, fetchError }) => {
  if(!fetchError){
    return (
      <div className="LibraryContainer">
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
  return(
    <div>
      <h1>Error in Fetch Request</h1>
    </div>
  );
}

export default LibraryContainer;