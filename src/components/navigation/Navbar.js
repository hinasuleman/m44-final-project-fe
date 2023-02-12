import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar () {

        return(
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
    );
}

export default Navbar;
