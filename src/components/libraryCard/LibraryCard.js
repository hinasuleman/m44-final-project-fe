import React from "react";
import { deleteFromLibrary } from "../../utilities/utilities";
import './LibraryCard.css';

const LibraryCard = ({ bookList }) => {
  const submitHandler = () => {
    console.log("Clicked: remove from library")
    // e.preventDefault();
    const user = {user_ID:2};
    deleteFromLibrary(bookList,user);
    console.log("book removed from library");
  };
    
    return (
      <div className="LibraryCard">
        <h1>this is a book in my library</h1>
        {bookList.thumbnail ? <img src="bookList.thumbnail" height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
        <br></br>
        <p className="title">{bookList.books.title}</p>
        <p className="author">{bookList.books.authors}</p>
        <button onClick={() => (submitHandler())}>Remove from Library</button>
      </div>

    );
  };

  export default LibraryCard;
