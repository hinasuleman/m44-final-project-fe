import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo_outline_colour.png";
import book from "../../../src/images/icons/book.png";
import heart from "../../../src/images/icons/heart.png";
import user from "../../../src/images/icons/user.png";
import peoplearrows from "../../../src/images/icons/people-arrows.png";
import group from "../../../src/images/icons/people-group.png";
import logout from "../../../src/images/icons/right-from-bracket.png";
import "./Navbar.css";

function Navbar () {

        return(
            <div className="navbarItems">
                <NavLink to="/mainpage"><img src={logo} alt="Logo" className="logoImg" /></NavLink>

                <div className="navMenu">
                    <NavLink to="/mainpage"><img src={book} alt="My Library Icon" />My Library</NavLink>

                    <NavLink to="/wishlistpage"><img src={heart} alt="Wishlist Icon" />Wish List</NavLink>
                    
                    <NavLink to="/"><img src={peoplearrows} alt="Share Icon" />Share</NavLink>
                    
                    <NavLink to="/"><img src={group} alt="Community Icon" />Community</NavLink>
                    
                    <NavLink to="/userprofilepage"><img src={user} alt="Userprofile Icon" />Profile</NavLink>

                    <NavLink to="/landingpage"><img src={logout} alt="Logout Icon" />Log Out</NavLink>
                </div>

                <div className="navbarItemsSmall">
                
                    <NavLink to="/mainpage"><img src={book} alt="My Library Icon" /></NavLink>

                    <NavLink to="/wishlistpage"><img src={heart} alt="Wishlist Icon" /></NavLink>
                                
                    <NavLink to="/"><img src={peoplearrows} alt="Share Icon" /></NavLink>
                                
                    <NavLink to="/"><img src={group} alt="Community Icon" /></NavLink>
                                
                    <NavLink to="/userprofilepage"><img src={user} alt="Userprofile Icon" /></NavLink>

                    <NavLink to="/landingpage"><img src={logout} alt="Logout Icon" /></NavLink>
                    </div>
                </div>
        );
    }

export default Navbar;
