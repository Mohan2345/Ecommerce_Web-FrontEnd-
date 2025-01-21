import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_mark from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="Hand Icon Image" />
                </div>
                <p>Collections</p>
                <p>For EveryOne</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_mark} alt="Arrow Icon Image" />
            </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} height={"100%"} width={"100%"} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero
