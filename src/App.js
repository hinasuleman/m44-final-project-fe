import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import SignupPage from "./pages/signupPage/sigupPage";


function App() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signuppage" element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
