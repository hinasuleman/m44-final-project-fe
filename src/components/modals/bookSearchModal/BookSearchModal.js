import React from "react";
import "./BookSearchModal.css";
import { useState } from "react";
import { fetchBooks } from "../../../utilities/utilities";

function BookSearchModal({ setBooks, fetchError, setFetchError, onSearch, user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("intitle");

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchBooks(searchTerm, searchType, setBooks, setFetchError, fetchError);
    await setBooks(data.items);
    console.log(handleSearch)
    console.log('Search button clicked');
    onSearch();
  };




  return (
    <>
      <div className="searchbox">
        <form className="searchform" onSubmit={handleSearch}>
          <h1 className="searchh1">Search</h1>
          <input
            className="searchinput"
            type="text"
            value={searchTerm}
            placeholder="Enter book title, author or ISBN no."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="intitle">Title</option>
            <option value="inauthor">Author</option>
            <option value="isbn">ISBN</option>
          </select>

          <button className="submitbtn" type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default BookSearchModal;