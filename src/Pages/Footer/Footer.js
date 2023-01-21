import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
const Footer = () => {
  return (
    <div className='totalf'>
      <div className='footT'>
        <div className="leftf">
            <div className='logof'>
            <img className='logF' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673081748/bita-final-removebg-preview_hrfoev.png" alt="nf" />
            </div>
            <div className='leftf-b'>
              <div className='ico'>
              <BsLinkedin />
              </div><div className='ico'>
              <BsTwitter />
              </div><div className='ico'>
              <BsFacebook />
              </div>
            </div>
        </div>
        <div className='middle'>
          <ul>
            <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li><span>Company</span></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Global">Global Locations</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Mission">Mission</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Inclusion">Inclusion & Diversity</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Investors">Investors</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Newroom">Newsroom</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Purpose">Purpose</a></li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
        <div className='rightf'>
        <ul>
        <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li><span>Partnerships</span></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Brokers">Brokers</a></li></ListGroup.Item>
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
            <li><span>Support</span></li>
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="#/Help">Help center</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><NavLink to="/Admin">Admin login</NavLink></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li>
              <NavLink to="/contact">Contact</NavLink></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="#/Covid">Covid Response</a></li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
      </div>
      <div className="footB">
        <NavLink to="/projects"> Privacy Policy </NavLink>&nbsp; | 
      &nbsp;<NavLink to="/projects"> Terms & Conditions </NavLink> &nbsp; | &nbsp; 
      <NavLink to="/projects"> Sitemap</NavLink>
      </div>
    </div>
  )
}

export default Footer;