
import './App.css';
import { useState } from "react";
import BookSearchModal from './components/modals/bookSearchModal/BookSearchModal';
import CardContainer from "./components/cardContainer/CardContainer";
//set books state at app level

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
    <BookSearchModal setBooks={setBooks} />
    <CardContainer books={books} />
  </div>
  );
}

export default App;
