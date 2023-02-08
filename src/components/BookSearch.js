import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { fetchBooks } from "../utilities/utilities";

function BookSearch() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <div className="App">
      <CardContainer books={books} />
    </div>
  );
}

export default BookSearch;
