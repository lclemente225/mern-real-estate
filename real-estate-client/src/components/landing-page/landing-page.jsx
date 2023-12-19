
import { Header, Hero, Companies, Carousel, Value } from '../index'
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
      </div>
    </>
  )
}

export default LandingPage

