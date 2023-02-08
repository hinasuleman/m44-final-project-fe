
import './App.css';
import { useState } from "react";
import BookSearch from './components/modals/bookSearchModal/BookSearchModal';

//set books state at app level

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <BookSearch/>
    </div>
  );
}

export default App;
