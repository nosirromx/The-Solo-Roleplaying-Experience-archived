import React from 'react';
import {Link} from "react-router-dom";
import logo from './assets/images/logo.png';
import './Header.css';
import Login from "./Login";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Solo Roleplaying Experience Logo" className="logo"/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='terminal'>Terminal</Link>
            </nav>
            <Login/>
        </header>
    );
}

export default Header;
