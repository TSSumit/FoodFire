import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import UserAuthentication from "./AuthenticateUser";
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
            <div className="nav-items">
                <ul>
                    <button className="nav-item home-btn">Home</button>
                    <button className="nav-item offer-btn">Offers</button>
                    <button className="nav-item help-btn">Help</button>
                    {isLoggedIn ? (
                        <button
                        className="nav-item signOut-btn"
                        onClick={() => setIsLoggedIn(false)} // Corrected onClick syntax
                        >
                        Sign out
                        </button>
                    ) : (
                        <button
                        className="nav-item signIn-btn"
                        onClick={() => setIsLoggedIn(true)} // Corrected onClick syntax
                        >
                        Sign in
                        </button>
                    )}
                    <button className="nav-item card-btn">Card</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
