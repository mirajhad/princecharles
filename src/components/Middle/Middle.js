import React from 'react'
import "./Middle.css";
import MiddleBg from "../../assets/Middle.png";
function Middle() {
    return (
        <div>
            <div className="main">
            <div className="logoBg">
            <img className='MiddleBg' src={MiddleBg} alt="logo" />
            </div>
            </div>
        </div>
    )
}

export default Middle;