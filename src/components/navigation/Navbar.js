import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainPage from "../../pages/mainPage/mainPage";
import WishlistPage from "../../pages/wishlistPage/wishlistPage";
import UserprofilePage from"../../pages/userprofilePage/userprofilePage";
import "./Navbar.css";

function Navbar () {

        return(
            <>
            <BrowserRouter>
            <nav className="NavbarItems">
                <h1 className="logo">BiblioTech</h1>                
                <ul className="navMenu">
                    <li><NavLink to="/mainPage" activeClassName="active">My Library</NavLink></li>
                    
                    <li><NavLink to="/wishlistPage" activeClassName="active">Wish List</NavLink></li>
                    
                    <li><p>Share</p></li>
                    
                    <li><p>Community</p></li>
                    
                    <li><NavLink to="/userprofilePage" activeClassName="active">Profile</NavLink></li>
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
