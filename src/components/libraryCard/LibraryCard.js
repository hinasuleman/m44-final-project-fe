import React from "react";
import { readCookie} from "../../common/index";
import { deleteFromLibrary } from "../../utilities/utilities";
import './LibraryCard.css';

const LibraryCard = ({ book }) => {
  const submitHandler = () => {
    console.log("Clicked: remove from library")
    // e.preventDefault();
    const user = {user_ID:2};
    deleteFromLibrary(book,user);
    console.log("book removed from library");
  };

  const listBooks = async (setBookList) => {
      let cookie = readCookie("jwt_token")
      try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listUser`,{
            method: "GET",
            headers:{"Content-Type":"application/json",
                    "Authorization":`Bearer ${cookie}`}        
                    }
        )
          
        const data = await response.json();
        setBookList (data.book)
        console.log("listUsers",data.book)
    
      } catch (error) {
        console.log(error)    
      }
    
    }


    
    return (
      <div className="LibraryCard">
        {book.thumbnail ? <img src="book.thumbnail" height="200vh" alt=""/> : <img src={require("../../images/blankCover.jpg")} height="200vh" alt=""/>}
        <br></br>
        <p className="title">{book.volumeInfo.title}</p>
        <p className="author">{book.volumeInfo.authors}</p>
        <button onClick={() => (submitHandler())}>Remove from Library</button>
      </div>

    );
  };

  export default LibraryCard;
