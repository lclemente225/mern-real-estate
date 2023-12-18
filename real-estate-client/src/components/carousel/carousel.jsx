import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion"
import data from '../../../utils/data.json'
import './carousel.css'

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 10);
  }, [])

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


  const dragControls = useDragControls();
  const otherDrag = useDragControls();

  function startDrag(event) {
  dragControls.start(event, { snapToCursor: false })
  }
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
        <motion.div onPointerDown={startDrag} className="carousel">
            <motion.div  
            ref={carousel} 
            drag="x"
            dragControls={dragControls}
            whileTap={{cursor: "grabbing"}} 
            dragConstraints={{right: 0, left: -(width+10)}}
            className="innerCarousel">
            {
                data.map((value, index) => {
                    return ( 
                        <motion.div 
                        whileHover={{scale:1.05}} 
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

