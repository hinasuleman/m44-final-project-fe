import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainPage from "../../pages/mainPage/mainPage";
import WishlistPage from "../../pages/wishlistPage/wishlistPage";
import UserprofilePage from"../../pages/userprofilePage/userprofilePage";
import "./Navbar.css";

const Navbar = () => {

        return(
            <>
            <BrowserRouter>
            <nav className="NavbarItems">
                <h1 className="logo">BiblioTech</h1>                
                <ul className="navMenu">
                    <li>
                        <NavLink to="/mainPage">My Library</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlistPage">Wish List</NavLink>
                    </li>
                    <li>
                        <p>Share</p>
                    </li>
                    <li>
                        <p>Community</p>
                    </li>
                    <li>
                        <NavLink to="/userprofilePage">Profile</NavLink>
                    </li>
                </ul>
            </nav>
                <Routes>
                    <Route exact path="/mainPage" element={<MainPage />} />
                    <Route exact path="/wishlistPage" element={<WishlistPage />} />
                    <Route exact path="/userprofilePage" element={<UserprofilePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Navbar;
