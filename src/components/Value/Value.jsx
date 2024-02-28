import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";

export default function () {
  return (
    <section className="value-wrapper" id="value">
      <div className="innerWidth paddings flexCenter value-container">
        <div className="left-value">
          <div className="image-container">
            <img src="./hiya3.jpg" alt="" />
          </div>
        </div>
        <div className="flexColStart right-value">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Values We Give</span>
          <span className="secondaryText">
          At Hiya Real Estate, we embody Excellence, Integrity, and Innovation. We deliver unparalleled quality, conduct business with honesty and transparency, and embrace creativity to shape the future of real estate.
   
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                    const [className,setClassName]= useState(null)

              return (
                <AccordionItem className={`accordionItem &{className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionbutton">

                        <AccordionItemState>
                            {({expanded})=> expanded ? setClassName("expanded"):
                             setClassName("collapsed")}
                        </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
