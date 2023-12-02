import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <section className='flex-center nav-wrapper'>
      <div className='flex-center nav-container'>
        <div>Logo here</div>

        <div className='flex-center nav-menu'>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar
 