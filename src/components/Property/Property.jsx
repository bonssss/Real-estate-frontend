import React from 'react'
import './property.css'
import data from '../../../utils/slider.json';
import 'swiper/css';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import { color } from 'framer-motion';
import { SliderSetting } from '../../../utils/common';

export default function Property() {
  return (
    <section className="property-wrapper">
        <div className="paddings innerWidth property-container">
            <div className="property-header flexColStart">
                <span className='orangeText'>Best Choice</span>
                <span className='primaryText'>Our Popular Properties</span>
            </div>

            <Swiper {...SliderSetting}>

                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart property-card">
                                <img src={card.image} alt="home" />

                                <span className="secondaryText property-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>

                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

const SliderButtons =()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter property-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}