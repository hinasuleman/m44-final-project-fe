
import './App.css';
import { useState } from "react";
import BookSearchModal from './components/modals/bookSearchModal/BookSearchModal';
import CardContainer from "./components/cardContainer/CardContainer";
//set books state at app level

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState([]);

//need to set user at app level to pass down to the card component so the user ID can be passed to the DB


  return (
    <div className="App">
    <BookSearchModal setBooks={setBooks} />
    <CardContainer books={books} user={user}/>
  </div>
  );
}

export default App;
