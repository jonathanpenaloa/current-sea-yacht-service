import React from 'react'

import YachtCard from '../YachtCard/YachtCard';

import YachtData from "../YachtData";

export default function YachtDetail() {
  return (
    <div className="work-container">
        <div className="project-container">
            {YachtData.map((val, idx) => {
                return(
                 <YachtCard 
                    key={idx}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                />
            );
        })}
        </div>
    </div>
  )
}
