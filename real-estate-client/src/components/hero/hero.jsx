import React from 'react'
import './hero.css'
import { HiLocationMarker } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flex-center padding innerWidth hero-container">

          <div className="flex-col-start hero-left">
              <div className="hero-title">
                  <div className="orange-circle"/>
                  <h1>
                    Discover <br/>
                    Most Suitable<br/>
                    Property
                  </h1>
              </div>

              <div className="flex-col-start hero-des">
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
