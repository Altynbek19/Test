import React from "react";

import './welcome.css' 
import welcomeLeft from '../assets/welcome-left.png'
import welcomeImg1 from '../assets/welcome-right1.png'
import welcomeImg2 from '../assets/welcome-right2.png'

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-left">
                <img src={welcomeLeft} alt="" />
                <div className="welcome-left-button">
                    Узнать подробнее
                </div>
            </div>
            <div className="welcome-right">
                <div className="welcome-content">IT & Business College - это <br/> место, где вы можете <br/>начать свой путь к успеху!</div>
                <div className="welcome-images">
                    <img src={welcomeImg1} alt="" className="welcome-img" />
                    <img src={welcomeImg2} alt="" className="welcome-img" />
                </div>
            </div>
        </div>
    )
}