import React from 'react';
import './NavOne.css';
import profile from "../assets/ttb.jpg";

const NavOne = () => {
    return (
        <header>
            <a href="#" className="logo"><i className="fab fa-trello" style={{marginRight: 5 + 'px'}}></i>Trello</a>
            <div className="nav-bar">
                <nav>
                    <a href="#" className="nav"><i className="fas fa-bars"></i></a>
                    <a href="#" className="nav"><i className="fas fa-home"></i></a>
                    <a href="#" className="nav boards"><i className="fab fa-trello"></i><p>Boards</p></a>
                    <a href="#" className="search">
                        <input type="search" className="searchbox" />
                        <i id="search-icon" className="fas fa-search"></i>    
                    </a>
                </nav>
            </div>
            <div className="option-bar">
                <a href="#" className="nav"><i className="fas fa-plus"></i></a>
                <a href="#" className="nav"><i className="fas fa-info-circle"></i></a>
                <a href="#" className="nav"><i className="far fa-bell"></i></a>
                <img src={profile} alt="Profile" id="profile" />
            </div>
        </header>
    )
}

export default NavOne;