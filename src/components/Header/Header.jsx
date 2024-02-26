import React from "react";
import './header.css'

export default function Header() {
  return (
    <section className="header-wrapper">
      <div className=" flexCenter paddings innerWidth header-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter header-menu">
        <a href="">Residencies</a>
        <a href="">Our value</a>
        <a href="">Contact us</a>
        <a href="">Get Started</a>
        <button className=" button"><a href=""> Contact</a></button>
        
        </div>
      </div>
    </section>
  );
}
