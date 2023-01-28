import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/Logo.JPG";

import "./HeroSection.css"

export default function HeroSection( ) {
    return (
        <div className="hero">
            <div className="hero-container">
                <img className="background-img" src={CompanyLogo} alt="BackGroundImg" />
            </div>
            <div className="content">
            <h1>Luxury Yachts</h1>
            <p>Leasing, Financing, Cash</p>
            <div className="hero-link">
                <Link to="Contact" className="btn">Contact</Link>
                <Link to="Yacht" className="btn">Yachts</Link>
            </div>
            </div>
        </div>
    );
}