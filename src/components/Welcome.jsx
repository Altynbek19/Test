import React from "react";

import './welcome.css' 
import welcomeLeft from '../assets/welcome-left.png'
import welcomeImg1 from '../assets/welcome-right1.png'
import welcomeImg2 from '../assets/welcome-right2.png'
import Specialists from '../components/Specialists'
import PhotoCarousel from '../components/carousel';
import Footer from './Footer/Footer'
import "./footer.css"
import phone_icon from '../assets/icon_phone.png'
import email_icon from '../assets/icon_mail.png'
import instagram_icon from '../assets/icon_instagram.png'
import facebook_icon from '../assets/facebook_icon.png'
import youtube_icon from '../assets/icon_YouTube.png'
import icon_twitter from '../assets/icon_twitter.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import inf from './../assets/inf.png'
import inf2 from './../assets/inf2.png'
import inf3 from './../assets/inf3.png'
import inf4 from './../assets/inf4.png'
import inf5 from './../assets/inf5.png'
import "./carousel.css"

export default function Welcome() {
    return (
            <div className="full_welcome">
                <div className="welcome">
                    <div className="welcome-left">
                        <img src={welcomeLeft} alt="" />
                        <div className="left-button">
                            <div className="welcome-left-button">
                                Узнать подробнее
                            </div>
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
                <Specialists />
                <PhotoCarousel/>
                {/* <Footer/> */}
                <div className="footer">
                <div className="f_content_container">
                    <div className="f_contact_container">
                        <div className="f_contact">
                            <div>
                                <img src={phone_icon} alt="" />
                            </div>
                            <div className="f_number">
                                <div>+996 (312) 63 14 25</div>
                                <div>+996 (555) 25 07 03</div>
                                <div>+996 (505) 25 07 03</div>
                            </div>
                        </div>
                        <div className="f_email">
                            <div><img src={email_icon} alt="" /></div>
                            <div>college@alatoo.edu.kg</div>
                        </div>
                    </div>
                    <div className="f_info">
                        <div className="f_college">
                            <div>КОЛЛЕДЖ</div>
                            <div>ПРОФЕССИИ</div>
                            <div>СТУДЕНЧЕСКИЕ КЛУБЫ</div>
                        </div>
                        <div className="f_students">
                            <div>СТУДЕНТ</div>
                            <div>ПОСТУПАЮЩИМ</div>
                            <div>КОНТАКТЫ</div>
                        </div>
                    </div>
                </div>
                    <div className="f_image">
                        <img src={instagram_icon} alt="" />
                        <img src={facebook_icon} alt="" />
                        <img src={youtube_icon} alt="" />
                        <img src={icon_twitter} alt="" />
                    </div>
                </div>
            </div>
    )
}