import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landingPage/landingPage";
import MainPage from "./pages/mainPage/mainPage";

import SignupPage from "./pages/signupPage/signupPage";
import UserprofilePage from "./pages/userprofilePage/userprofilePage";
import Navbar from './components/navigation/Navbar';

function App() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [user] = useState([]); //need to sort setUser

  return (
    <BrowserRouter>
      <Navbar/>
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
                  />
               }/>
            <Route exact path= "/userprofilepage" element={<UserprofilePage/>} />
            <Route exact path="/signuppage" element={<SignupPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
