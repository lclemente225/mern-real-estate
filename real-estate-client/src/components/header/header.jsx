import React from 'react'
import './header.css';

const Header = () => {
  return (
    <section className='flex-center h-wrapper'>
      <div className='flex-center padding innerWidth h-container'>
        <div>Logo here</div>

        <div className='flex-center h-menu'>
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

export default Header
 