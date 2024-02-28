import React from "react";
import './footer.css'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';


export default function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
          {/* <img src="./logo2.png" alt="logo" width={120} /> */}
          <h3>HIYA</h3>

          <span className="ssecondaryText">
            A Tradition of Trust!
          </span>
        </div>

        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Ruwanda Road,Addis Ababa, Ethiopia</span>

          <div className="flexCenter footer-menu">
            <span><FaFacebook/></span>
            <span><FaInstagram/></span>
            <span><FaTelegram/></span>
          </div>
        </div>
      </div>
    </section>
  );
}
