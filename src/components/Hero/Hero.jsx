import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./hero.css";
import CountUp from "react-countup";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className=" innerWidth paddings flexCenter hero-container">
        <div className=" flexColStart left-hero">
          <div className="hero-title">
            <div className="Orange-circle" />
            <h1>
              A Tradition <br />
              Of Trust
            </h1>
          </div>
          <div className=" flexColStart hero-description">
            <span  className="secondaryText">Hiya Real Estate: Modern. Personalized. Exceptional.</span>
            <span  className="secondaryText">
              Your trusted partner for seamless real estate experiences.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter status">
            <div className=" flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span  className="secondaryText">Pre mium Products</span>
            </div>

            <div className=" flexColCenter stat">
              <span>
                <CountUp start={9000} end={10000} duration={4} />
                <span>+</span>
              </span>
              <span  className="secondaryText">Number of Customers</span>
            </div>

            <div className=" flexColCenter stat">
              <span>
                <CountUp start={10} end={40} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Awards</span>
            </div>
          </div>
        </div>

        <div className="flexCenter right-hero">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
