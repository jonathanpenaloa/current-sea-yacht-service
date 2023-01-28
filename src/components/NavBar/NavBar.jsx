import { useState } from "react";

import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import "./NavBar.css";

export default function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.screenY >= 100) {
            setColor(true)
        } else {
            setClick(false)
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? "header header-bg" : "header" }>
            <Link to="/" >
                <h1>Yacht Services</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Yacht">Yachts</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}> {
                click ? (
                    <FaTimes size={20} style={{ color: "#fff" }}  />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }}  />
                )}
            </div>
        </div>
    );
}

