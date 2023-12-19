import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion"
import data from '../../../utils/data.json'
import { sliderSettings } from "../../../utils/common";
import { Swiper, SwiperSlide } from 'swiper/react'
import './carousel.css'
import 'swiper/css'

export default function Carousel() {
  return (
    <>
    <div className="carousel-title-container flex-col-start">
        <span className="orange-text">
            Best Choices
        </span>
        <span className="carousel-title primary-text">
        Popular Residencies  
        </span>
    </div>
    <div className="carousel-container">
        <Swiper 
            {...sliderSettings}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} 
            >
                {
                    data.map((value, index) => {
                        return ( 
                            <SwiperSlide
                            key={`${index}-property`} 
                            className="item flex-col-center"> 
                                    <div className="carousel-image">
                                        <img src={value.image} alt={`This is a ${value.image}`} />
                                    </div>
                                    <span className="secondary-text">
                                        <span style={{color: "orange"}}>$</span>{value.price}
                                    </span>
                                    <span className="primary-text" style={{fontSize: "1.4rem"}}>
                                        {value.name}
                                    </span>
                                    <span className="secondary-text">
                                        {value.address}
                                    </span>
                            </SwiperSlide>
                            )
                    })
                }
        </Swiper>
    </div>
    </>
  );
}

