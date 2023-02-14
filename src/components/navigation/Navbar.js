import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo_1.png";
import "./Navbar.css";



function Navbar () {

        return(
            <nav className="NavbarItems">
                <NavLink to="/mainpage"><img src={logo} alt="Logo" className="logoImg" /></NavLink>            
                <ul className="navMenu">
                    <li><NavLink to="/mainpage" activeClassName="active">My Library</NavLink></li>
                    
                    <li><NavLink to="/wishlistpage" activeClassName="active">Wish List</NavLink></li>
                    
                    {/* <li><NavLink to="/" activeClassName="active">Share</NavLink></li> */}
                    <li><p>Share</p></li>
                    
                    {/* <li><NavLink to="/" activeClassName="active">Community</NavLink></li> */}
                    <li><p>Community</p></li>
                    
                    <li><NavLink to="/userprofilepage" activeClassName="active">Profile</NavLink></li>
                </ul>
            </nav>
    );
}

export default Navbar;
