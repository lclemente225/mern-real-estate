import React from 'react'
import { Header, Hero, Companies, Carousel } from '../index'
import './landing-page.css'
import TestCarousel from '../carousel/test-carousel'

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
        <TestCarousel />
      </div>
    </>
  )
}

export default LandingPage

