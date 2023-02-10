import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import MainPage from "./pages/mainPage/mainPage";
import SignupPage from "./pages/signupPage/sigupPage";
//import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navigation/Navbar';

function App() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/mainpage" element={
                <MainPage 
                  setBooks={setBooks}
                  fetchError={fetchError}
                  setFetchError={setFetchError}
                  books={books}
                  user={user}
                  setUser={setUser}
                />
          }/>
          <Route exact path="/signuppage" element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
