import React from "react";

import "./PagesInfo.css";


export default function PagesInfo( {heading, text} ){
    return(
        <div className="page-img">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    ); 
}