import React, { useState, useEffect } from "react";
import './LibraryContainer.css';
import LibraryCard from '../libraryCard/LibraryCard';
import { listBooks } from "../../utilities/utilities";

const LibraryContainer = () => {
  const [bookList, setBookList] = useState({ books: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await listBooks();
      console.log("data from listBooks:", data);
      setBookList(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("bookList: ", bookList);
  }, [bookList]);

  return (
    <div className="bgcontainer">
      <div className="libraryCardContainer">
        <div className="mylibtitle">
          <h1>My Library</h1>
        </div>
        <div className="lcContainer">
          {bookList.books.map((book, index) => (
            <LibraryCard key={index} bookItem={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryContainer;
