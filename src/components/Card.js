import React from "react";

const Card = ({ book }) => {
  const postToDb = (e) => {
    e.preventDefault();
    const newBook = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      isbn: book.volumeInfo.industryIdentifiers[0].identifier,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      description: book.volumeInfo.description,
      category: book.volumeInfo.categories[0],
      selfLink: book.selfLink,
      publishedDate: book.volumeInfo.publishedDate,
    };
    // console.log in lieu of POST fetch request
    console.log("!!!!!!!: ", book);
  };
  return (
    <>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      {/* <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/> */}
      <button onClick={postToDb}>Add to Library</button>
      <button onClick={postToDb}>Add to Wishlist</button>
    </>
  );
};

export default Card;
