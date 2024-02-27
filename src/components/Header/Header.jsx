import React, { useState } from "react";
import './header.css'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {

  const [menuOpened, setMenuOpened]= useState(false); 

  const getMenuStyle=(menuOpened)=>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="header-wrapper">
      <div className=" flexCenter paddings innerWidth header-container">
        {/* <img src="./log.png" alt="logo" width={100} /> */}
        <h3>HIYA</h3>
<OutsideClickHandler 
onOutsideClick={()=>{
  setMenuOpened(false)
}}>
        <div className="flexCenter header-menu"
        style={getMenuStyle(menuOpened)}>
                  <a href="#home">Home</a>

        <a href="#property">Properties</a>
        <a href="#value">Our value</a>
        <a href="#contact">Contact us</a>
        <button className=" button"><a href=""> Contact</a></button>
        
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
     
    </section>
  );
}
