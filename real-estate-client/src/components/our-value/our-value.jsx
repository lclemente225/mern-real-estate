import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import{ MdOutlineArrowDropDown } from 'react-icons/md';
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../../utils/accordion';
import './value.css';


const Value = () => {

  const [AccordionClassName, setAccordionClassName] = useState({
    "accordion-item-1": "",
    "accordion-item-2": "",
    "accordion-item-0": ""
  })
 
  return (
    <section className='value-container section-margin'>
      <div className="value-image-container">
        <img src="apartment-outside-img.jpg" alt="Fancy apartment building" 
        className='value-image'/>
      </div>
      <div className="value-accordion-container">
        <div className="value-accordion-title flex-col-start">
          <span className='primary-text'>Our Value</span>
          <span className='orange-text'>What We Give to You</span>
          <span className="desc-text secondary-text">
            We are always here to help you with the best service.
            <br/>
            We provide the best housing solutions to suit your needs.
          </span>
        </div>
            <Accordion 
              className='accordion'
              allowZeroExpanded={true}
              allowMultipleExpanded={false}
              preExpanded={[0]}
            > 
                {
                data.map((item, index) => {
                return (
                  
                    <AccordionItem key={index} uuid={index}
                    className={`accordion-item`}>
                          <AccordionItemHeading>
                              <AccordionItemButton className='accordion-heading-button'>
                                  <div className="flex-center accordion-icon">
                                      {item.icon}
                                  </div>
                                  <span className="primary-text accordion-heading">
                                      {item.heading}
                                  </span>
                                  <div className="flex-center accordion-icon">
                                      <MdOutlineArrowDropDown />
                                  </div>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="accordion-item-detail" >
                              <p className="secondary-text">
                                {item.detail}
                              </p>
                          </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
                }
            </Accordion>
      </div>
    </section>
  )
}

export default Value
