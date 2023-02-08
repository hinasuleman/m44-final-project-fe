import { useEffect, useState } from "react";
import CardContainer from "../../cardContainer/CardContainer";
import { fetchBooks } from "../../../utilities/utilities";

//set state for books - declare at high level - change through this modal

function BookSearchModal() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(setBooks);
    console.log(books);
  }, []);

  return (
    <div className="App">
      <CardContainer books={books} />
    </div>
  );
}

export default BookSearchModal;
