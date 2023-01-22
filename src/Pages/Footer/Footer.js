import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='totalf'>
   
   <Modal className="mode" open={open} onClose={onCloseModal}>
          <div  className="mode">
            <h2>Simple centered modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
          </div>
        </Modal>
      <div className='footT'>
        <div className="leftf">
            <div className='logof'>
            <img className='logF' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673081748/bita-final-removebg-preview_hrfoev.png" alt="nf" />
            </div>
            <div className='leftf-b'>
              <div className='ico'>
              <a href="https://www.linkedin.com/company/47bita-pods/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
              </div><div className='ico'>
              <a href="https://twitter.com/47BitaPods" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
              </div><div className='ico'>
              <a href="https://www.facebook.com/people/47Bita-Pods/100089485335116/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
              </div>
              <div className='ico'>
              <a href="https://www.instagram.com/47bitapods/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
              </div>
            </div>
        </div>
        <div className='middle'>
          <ul>
            <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li><span>Company</span></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><div onClick={onOpenModal}>Our Locations</div></li></ListGroup.Item>
                {/* <ListGroup.Item action variant="dark">
                <li><a href="#/Mission">Mission</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Inclusion">Inclusion & Diversity</a></li></ListGroup.Item> */}
                <ListGroup.Item action variant="dark">
                <li><a href="#/Investors">Other Tech amenities</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Newroom">Pricing</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Purpose">Testimonial</a></li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
        <div className='rightf'>
        <ul>
        <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li><span>Partnerships</span></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Brokers">Individuals</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Landlords">Landlords</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Refer">Refer a friend</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Event">Event Planners</a></li></ListGroup.Item>
                </ListGroup>
          </ul>
        </div>
        <div className='rightr'>
        <ul>
        <ListGroup variant="flush">
        <ListGroup.Item variant="dark">
            <li><span>Contact</span></li>
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="https://mail.google.com/mail/u/0/?fs=1&to=info.47bitapods@gmail.com&tf=cm">info.47bitapods@gmail.com</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="tel:+918777765809">+91 8777765809</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li>Godrej Genesis, Block EP & GP Opp to Syndicate Bank, Sector V, Salt Lake City, Kolkata, West Bengal 700091, India</li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
      </div>
      <div className="footB">
        <NavLink to="/t&c"> Privacy Policy </NavLink>&nbsp; | 
      &nbsp;<NavLink to='/'>
    <p style={{cursor:"pointer"}}>2023 47BitaPods Pvt. Ltd.  |  All rights reserved</p>
    </NavLink>
      {/* &nbsp; | &nbsp; 
      <NavLink to="/projects"> Sitemap</NavLink> */}
      </div>
    </div>
  )
}

export default Footer;