import React from "react";

import dennisImg from "../../assets/placeholder.jpg";


import "./AboutUs.css";

export default function AboutUs() {
    return (
        <div className="about" >
            <div className="left">
                <h1>Dennis Oswalt</h1>
                <p>425-281-6785</p>
                <p>DOswalt@csyachting.com</p>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img className="img" src={dennisImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}