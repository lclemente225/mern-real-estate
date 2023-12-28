
import data from '../../../utils/data.json'
import { sliderSettings } from "../../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import './carousel.css'
import 'swiper/css'

export default function Carousel() {
  return (
    <>
    <div className="carousel-wrapper flex-center">
        <div className="carousel-container flex-col-start">
            <div className="carousel-title-container flex-col-start">
                <span className="orange-text">
                    Best Choices
                </span>
                <span className="carousel-title primary-text">
                Popular Residencies  
                </span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                    {
                        data.map((value, index) => {
                            return ( 
                                <SwiperSlide
                                key={`${index}-property`} 
                                className="carousel-card flex-col-center"> 
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
    </div>
    </>
  );
}

function SliderButtons(){
    const swiper = useSwiper();

    return (
        <div className="flex-center carousel-button">
            <button onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    )
}