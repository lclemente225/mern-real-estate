import React from 'react';
import { HiShieldCheck } from "react-icons/hi";
import { default as data } from "../../../utils/contact"

import './contact.css';


const Contact = () => {
  return (
    <section className='contact-wrapper section-margin'>
      <div className="contact-info-container">
        <div className="contact-info-title flex-col-start">
            <span className='orange-text'>Get in Touch!</span>
            <span className='primary-text'>It&apos;s Easy to Contact Us</span>
            <span className="desc-text secondary-text">
                We&apos;ll be in contact throughout the whole process. If you need 
                any help please don&apos;t hesitate to ask.
            </span>
        </div>
        <div className="contact-info-section">
            {
                data.map((data,index) => {

                    return (
                        <div key={index} className="contact-info flex-col-center">
                            <div className="contact-info-top">
                                <div className="contact-icon">
                                    <HiShieldCheck />
                                </div>
                                <div className="contact-number">
                                    <p>{data.method}</p>
                                    <p>121 133 3332</p>    
                                </div>
                            </div>
                            <button className='contact-button'>
                                {data.CTA}
                            </button>
                        </div>
                        )
                })
            }

        </div>
      </div>
      <div className="contact-image-container">
        <img src="apartment-outside-img.jpg" alt="Fancy apartment building" 
            className='contact-image'/>
      </div>
    </section>
  )
}

export default Contact
