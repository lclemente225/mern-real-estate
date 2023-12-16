import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"
import data from '../../../utils/data.json'
import './carousel.css'

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <>
    <div className="carousel-title-container"></div>
    <h4>
        Best Choices
    </h4>
    <h3 className="carousel-title">
      Popular Residencies  
    </h3>
    <div className="carousel-container">
        <motion.div className="carousel">
            <motion.div  
            ref={carousel} 
            drag="x" 
            dragConstraints={{right: 0, left: -width}}
            className="innerCarousel">
            {
                data.map((value, index) => {
                    return (
                        <motion.div 
                        whileFocus={{scale: 1.2}} 
                        key={`${index}-property`} 
                        className="item flex-center"> 
                            <div className='property-listing flex-col-center'>
                                <span>
                                    ${value.price}
                                </span>
                                <span>
                                    {value.name}
                                </span>
                                <span>
                                    {value.address}
                                </span>
                            </div>
                        </motion.div>
                        )
                })
                }
            </motion.div>
        </motion.div>
    </div>
    </>
  );
}

