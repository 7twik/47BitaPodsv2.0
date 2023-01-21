import React from 'react';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
const Contact = () => {
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className='nav-sticky'>
            <Navbar />
        </div>
        <div className='part2'>
            <div className='Contact' data-aos="fade-up">Contact &nbsp; Us</div>
            <div className='sec2'>
                <div className="sec2-left" data-aos="zoom-in-right">
                    <img className="imgbf" src="https://media.licdn.com/dms/image/C4D22AQETnjqUWKXOJw/feedshare-shrink_800/0/1669935389766?e=1674691200&v=beta&t=hN-MAbrWTQZrb5fHM-1vc3ptyHcqSl1tyEvEx-j1IPY" alt="not loaded" />
                </div>
                <div className='sec2-right' data-aos="zoom-in-left">
                    <Form />
                </div>
            </div>
        </div>
        <div className="Contact-gap"></div>
        <div className='Footer' data-aos="zoom-in-up">
            <Footer />
        </div>
    </div>
  )
}

export default Contact;