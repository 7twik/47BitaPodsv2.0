import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contacte.css';
import ContactForm from '../ContactForm/ContactForm';
const Contacte = (props) => {
    React.useEffect(() => {
        AOS.init();
      }, []);


      


  return (
    <div>
        <div className='part2'>
            <div className='Contact' data-aos="fade-up">Contact &nbsp; Us</div>
            <div className='sec2'>
                <div className='sec2w' data-aos="zoom-in-left">
                    <ContactForm />
                </div>
            </div>
        </div>
        <div className="Contact-gap"></div>
    </div>
  )
}

export default Contacte;