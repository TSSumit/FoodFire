import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import UserAuthentication from "./AuthenticateUser";
import SortingComponent from "./SortingComponent";
import { Link } from "react-router-dom";
const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    
    return (
        <div className="header">
            <div className="logo-Container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <ul className="nav-items">
                
                <li className="nav-item home-btn" ><Link to="/">Home</Link></li>
                <li className="nav-item offer-btn"><Link to="/contact">Contact</Link></li>
                <li className="nav-item about-btn"><Link to="/about">About</Link></li>
                {isLoggedIn ? (
                    <li
                    className="nav-item signOut-btn"
                    onClick={() => setIsLoggedIn(false)} // Corrected onClick syntax
                    >
                        <Link to="/">Log out</Link>
                    </li>
                ) : (
                    <li
                    className="nav-item signIn-btn"
                    onClick={() => setIsLoggedIn(true)} // Corrected onClick syntax
                    >
                        <Link to="/logIn">LogIn</Link>
                    </li>
                )}
                <li className="nav-item card-btn">
                <Link to="/card">Card</Link></li>
            </ul>
        </div>
    )
}

export default Header;