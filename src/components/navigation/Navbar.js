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
                <NavLink to="/mainpage"><img src={logo} className="logoImg" /></NavLink>

                <div className="navMenu">
                    <NavLink to="/mainpage"><img src={book} />My Library</NavLink>

                    <NavLink to="/wishlistpage"><img src={heart} />Wish List</NavLink>
                    
                    <NavLink to="/"><img src={peoplearrows} />Share</NavLink>
                    
                    <NavLink to="/"><img src={group} />Community</NavLink>
                    
                    <NavLink to="/userprofilepage"><img src={user} />Profile</NavLink>

                    <button type="button" onClick= {handleClick} ><img src={logoutImg} />Log Out</button>
                </div>

                <div className="navbarItemsSmall">
                
                    <NavLink to="/mainpage"><img src={book}  /></NavLink>

                    <NavLink to="/wishlistpage"><img src={heart}  /></NavLink>
                                
                    <NavLink to="/"><img src={peoplearrows} /></NavLink>
                                
                    <NavLink to="/"><img src={group} /></NavLink>
                                
                    <NavLink to="/userprofilepage"><img src={user} /></NavLink>

                    <button type="button" onClick= {handleClick} ><img src={logoutImg} /></button>
                </div>

                </div>
        );
    }

export default Navbar;
