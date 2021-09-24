import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="Header">
            
            <img className="logo" src={logo} alt="" />

            <div className="navDiv">
                <nav className="nav"><a href="/home">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/about">About</a>
                </nav>
            </div>
            
            <div className="search">
                <input className="input" type="text" placeholder="search by prpduct name" />
                <button className="btn">Search</button>
            </div>
        </div>
    );
};

export default Header;