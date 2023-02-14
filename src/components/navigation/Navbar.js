import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo_outline_colour.png";
import book from "../../../src/images/icons/book.png";
import heart from "../../../src/images/icons/heart.png";
import user from "../../../src/images/icons/user.png";
import peoplearrows from "../../../src/images/icons/people-arrows.png";
import group from "../../../src/images/icons/people-group.png";
import "./Navbar.css";



function Navbar () {

        return(
            <div className="NavbarItems">
                <NavLink to="/mainpage"><img src={logo} alt="Logo" className="logoImg" /></NavLink>            
                <div className="navMenu">
                    <NavLink to="/mainpage"><img src={book} alt="My Library Icon" />My Library</NavLink>
                    
                    <NavLink to="/wishlistpage"><img src={heart} alt="Wishlist Icon" />Wish List</NavLink>
                    
                    {/* <li><NavLink to="/"><img src={peoplearrows} alt="Share Icon" />Share</NavLink> */}
                    <li><img src={peoplearrows} alt="Share Books Icon" />Share</li>
                    
                    {/* <li><NavLink to="/"><img src={group} alt="Community Icon" />Community</NavLink> */}
                    <li><img src={group} alt="Community Icon" />Community</li>
                    
                    <NavLink to="/userprofilepage"><img src={user} alt="Userprofile Icon" />Profile</NavLink>
                </div>
            </div>
    );
}

export default Navbar;
