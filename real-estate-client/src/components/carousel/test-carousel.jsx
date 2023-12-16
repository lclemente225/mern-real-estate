import React, { useRef, useState } from "react";
import { motion } from "framer-motion"
import data from '../../../utils/data.json'
import './test.css'

export default function App() {
  return (
    <>
      <motion.div className="carousel">
          <motion.div 
          drag="x"
          className="innerCarousel">
          {
            data.map((value, index) => {
                return (
                    <motion.div key={`${index}-property`} className="item flex-center"> 
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
                    </motion.div>
                    )
              })
            }
          </motion.div>
      </motion.div>
    </>
  );
}
