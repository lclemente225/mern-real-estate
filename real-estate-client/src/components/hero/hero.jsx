import React from 'react'
import './hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import  CountUp  from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flex-center padding innerWidth hero-container">

          <div className="flex-col-start hero-left">
              <div className="hero-title">
                  <div className="orange-circle"/>
                  <h1>
                    Discover <br/>
                    Suitable<br/>
                    Properties
                  </h1>
              </div>

              <div className="flex-col-start secondary-text hero-des">
                <span>
                    Find a variety of properties that suit you 
                </span>
                <span>
                    Forget all difficulties in finding a residence for you!
                </span>
              </div>
              <div className="flex-center search-bar">
                  <HiLocationMarker color="rgb(70, 70, 255)" size={30}/>
                  <input type="text" />
                  <button className='button'>
                    Search
                  </button>
              </div>

              <div className="flex-center stats">
                  <div className="flex-col-center stat">
                      <span>
                          <CountUp start={8000} end={9000} duration={4}/>
                          <span>+</span>
                      </span>
                      <span className="secondary-text">
                        Premium Products
                      </span>
                  </div>
                  <div className="flex-col-center stat">
                      <span>
                          <CountUp start={800} end={2000} duration={4}/>
                          <span>+</span>
                      </span>
                      <span className="secondary-text">
                        Happy Customers
                      </span>
                  </div>
                  <div className="flex-col-center stat">
                      <span>
                          <CountUp start={5} end={28} duration={4}/>
                          <span>+</span>
                      </span>
                      <span className="secondary-text">
                        Premium Products
                      </span>
                  </div>
                  
              </div>
          </div>

          <div className="flex-center hero-right">
                <div className="image-container">
                  <img src="apartment-exterior.jpg" alt="image of a house" />
                </div>
          </div>

      </div>
    </section>
  )
}

export default Hero
