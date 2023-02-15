import React, { useState, useEffect } from "react";
import './LibraryContainer.css';
import LibraryCard from '../libraryCard/LibraryCard';
import { listBooks } from "../../utilities/utilities";

const LibraryContainer = () => {
  const [bookList, setBookList] = useState({books: []});

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
    <div className="libraryCardContainer">
      {bookList.books.map((book, index) => (
        <LibraryCard key={index} bookItem={book} />
      ))}
    </div>
  );
};

export default LibraryContainer;
