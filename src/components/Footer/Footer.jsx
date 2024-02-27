import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
          <img src="./logo2.png" alt="logo" width={120} />

          <span className="ssecondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          </span>
        </div>

        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">134,Addis Ababa, Ethiopia</span>

          <div className="flexCenter footer-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
