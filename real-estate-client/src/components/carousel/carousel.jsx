import React from 'react'
import './carousel.css'
import data from '../../../utils/data.json'


const Carousel = () => {

  return (
    <div className='carousel-wrapper'>
        <div className="carousel-container">
            
        
            {
                /* data.map((value, index) => {
                return (
                    <SwiperSlide key={`${index}-property`}> 
                        <div className='property-listing flex-col-start'>
                            <span>
                                {value.price}
                            </span>
                            <span>
                                {value.name}
                            </span>
                            <span>
                                {value.address}
                            </span>
                        </div>
                    </SwiperSlide>
                    )
                }) */
            }
        </div>
    </div>
  )
}

export default Carousel
