import React from 'react'

import "./YachtCard.css";

import { NavLink } from 'react-router-dom';

export default function YachtCard( { imgsrc, title, text } ) {

  return (
    <div className="yacht-card">
        <h1 className='yacht-heading'>Yacht</h1>
        <img src={imgsrc} alt="something" />
        <h2 className="yacht-title">{title}</h2>
        <div className="yacht-detials">
            <p>{text}</p>
            <div className="pro-btns">
                <NavLink to='/Contact' className="btn">Conatct Us</NavLink>
            </div>
        </div>
    </div>
  )
}
