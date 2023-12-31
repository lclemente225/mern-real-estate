
import { Header, Hero, Companies, Carousel, Value, Contact } from '../index'
import './landing-page.css'

const LandingPage = () => {
  return (
    <>
      <div className='landing-page'>
          <div className="white-gradient" />
          <Header />
          <Hero />
          <Companies />
          <Carousel />
          <Value />
          <Contact />
      </div>
    </>
  )
}

export default LandingPage

