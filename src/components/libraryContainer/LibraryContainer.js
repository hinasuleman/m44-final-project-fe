import React from "react";
// import { useEffect } from "react";
import './LibraryContainer.css';
import LibraryCard from '../libraryCard/LibraryCard';
import { listBooks } from "../../utilities/utilities";

const LibraryContainer = ({ setBookList, bookList }) => {
  //useEffect(() => {listBooks(setBookList)},[]);
  listBooks(setBookList, bookList);
  console.log("booklist: ",bookList);
    return (
      <div className="libraryCardContainer">
        {/* {bookList[0].books.map((bookList, index) => (
          <LibraryCard key={index} bookList={bookList} 
          />
        ))} */}
        <h1>this is a book!</h1>
      </div>
    );
};

export default LibraryContainer;
