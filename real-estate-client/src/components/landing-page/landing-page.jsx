import React from 'react'
import { Header, Hero, Companies, Carousel } from '../index'
import './landing-page.css'

const LandingPage = () => {
  return (
    <>
      <div className='landing-page'>
        <div>
          <div className="white-gradient" />
            <Header />
            <Hero />
        </div>
        <Companies />
        <Carousel />
      </div>
    </>
  )
}

export default LandingPage

