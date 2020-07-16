import React from "react";
import "./heroimage.scss";
import LeftImage from "./../../images/mk_watch.jpg";
import MainImage from "./../../images/header_hero.jpg";
const HeroImage = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img src={LeftImage} alt="Michael Kors watch" />
      </div>
      <div className="hero-right">
        <div>
          <img src={MainImage} alt="NEW MEN WATCH" />
        </div>
        <div className="hero-down">
          <div>
            <p className="hero-maintext">Free Worldwide Shipping</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
