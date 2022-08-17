import React from 'react'
import { Button } from './Button';
import '../App.css';
import video from '../www.KeepVid.to--Abstract-Neon-Light-Background-Video-Yellow-Spinning-Motion-Background-Loop-Free-Stock-Footage-www-youtube-com-1080p-c59002a06a683519992b2c72f6a1c597-1080p.mp4'
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1 style={{color:'goldenrod'}}>DRIVE AND EXPLORE </h1>
             <p style={{color:'goldenrod'}}>WHAT ARE YOU WAITING FOR YOU?</p>
            <div className="hero-btns">
                <Button
                 className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                  START EXPLORING
                </Button>
                
            </div>
        </div>  
    );
}



export default HeroSection