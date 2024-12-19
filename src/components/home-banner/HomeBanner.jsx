import React from 'react';
import HeroImg from "../../assets/bg-img.png";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="container bg-img" 
        style={{
         position: "relative",
         height: "200px"
        
         }}>
            <img 
                src={HeroImg} 
                alt="Hero" 
                className="hero-image" 
            />


            <h2 className="hero-text">
                Аксессуары для <br />
                Iphone 13 Pro Max
            </h2>
        </div>
    );
};

export default HomeBanner;
