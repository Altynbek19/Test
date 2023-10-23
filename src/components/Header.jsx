import React from "react";

import './Header.css'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <img className="header-logo" src={logo} alt="" />
                <div className="header-buttons">
                    <div className="header-button">
                        колледж
                    </div>
                    <div className="header-button">
                    ПРОФЕССИИ
                    </div>
                    <div className="header-button">
                    СТУДЕНЧЕСКИЕ КЛУБЫ
                    </div>
                    <div className="header-button">
                    СТУДЕНТ
                    </div>
                    <div className="header-button">
                    ПОСТУПАЮЩИМ
                    </div>
                    <div className="header-button">
                    КОНТАКТЫ
                    </div>
                </div>
            </div>
        </header>
    )
}