import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../../src/utilities/userfunctions";

import logo from "../../images/logo/logo_outline_colour.png";
import book from "../../../src/images/icons/book.png";
import heart from "../../../src/images/icons/heart.png";
import user from "../../../src/images/icons/user.png";
import peoplearrows from "../../../src/images/icons/people-arrows.png";
import group from "../../../src/images/icons/people-group.png";
import logoutImg from "../../../src/images/icons/right-from-bracket.png";
import "./Navbar.css";

function Navbar ({setUser}) {

const handleClick = () => {
    logout(setUser)
}

        return(
            <div className="navbarItems">
                <NavLink to="/mainpage"><img src={logo} alt="" className="logoImg" /></NavLink>

                <div className="navMenu">
                    <NavLink to="/mainpage"><img src={book} alt=""/>My Library</NavLink>

                    <NavLink to="/wishlistpage"><img src={heart} alt="" />Wish List</NavLink>
                    
                    <NavLink to="/"><img src={peoplearrows} alt="" />Share</NavLink>
                    
                    <NavLink to="/"><img src={group} alt="" />Community</NavLink>
                    
                    <NavLink to="/userprofilepage"><img src={user} alt="" />Profile</NavLink>

                    <button type="button" onClick= {handleClick} ><img src={logoutImg} alt="" />Log Out</button>
                </div>

                <div className="navbarItemsSmall">
                
                    <NavLink to="/mainpage"><img src={book} alt="" /></NavLink>

                    <NavLink to="/wishlistpage"><img src={heart} alt="" /></NavLink>
                                
                    <NavLink to="/"><img src={peoplearrows} alt="" /></NavLink>
                                
                    <NavLink to="/"><img src={group} alt="" /></NavLink>
                                
                    <NavLink to="/userprofilepage"><img src={user} alt="" /></NavLink>

                    <button type="button" onClick= {handleClick} ><img src={logoutImg} alt="" /></button>
                </div>

                </div>
        );
    }

export default Navbar;
