import React from "react";
import "./BookSearchModal.css";
import { useState } from "react";
import { fetchBooks } from "../../../utilities/utilities";

function BookSearchModal({setBooks, fetchError, setFetchError }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("intitle");

  const handleSearch = (e) => {
    console.log('Submitting form');
    e.preventDefault();
    fetchBooks(searchTerm, searchType, setBooks, setFetchError, fetchError);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        placeholder="enter book title, author or ISBN number..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br></br>
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="intitle">Title</option>
        <option value="inauthor">Author</option>
        <option value="isbn">ISBN</option>
      </select>
      <br></br>
      <button type="submit">Search</button>
    </form>
  );
}

export default BookSearchModal;