import React from "react";
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../assets/logo.png'
import burger from '../../assets/burger-menu.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to='/'>
                    
                    <img className="header-logo" src={logo} alt="" />
    
                </Link>
                <div className="header-buttons">
                    <div className="header-button">
                        КОЛЛЕДЖ
                    </div>
                    <Link to="/computer"><div className="header-button">
                    ПРОФЕССИИ
                    </div></Link>
                    
                    <Link to='/povtas'>
                        <div className="header-button">
                        СТУДЕНЧЕСКИЕ КЛУБЫ
                        </div>
                    </Link>
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
                    <div className="burger">
                        <img src={burger} alt="" />
                    </div>
            </div>
        </header>
    )
}