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
  return (
    <section className='value-container section-margin'>
      <div className="value-image-container">
        <img src="apartment-outside-img.jpg" alt="Fancy apartment building" 
        className='value-image'/>
      </div>
      <div className="value-accordion-container">
        <div className="value-title flex-col-start">
          <span className='primary-text'>Our Value</span>
          <span className='orange-text'>What We Give to You</span>
        </div>
        <div className="value-accordion">

        </div>
      </div>
    </section>
  )
}

export default Value
