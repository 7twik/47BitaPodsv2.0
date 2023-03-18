import "./home.css";
import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css';
import "../Contacte/Contacte.css"
import { BsFillHddStackFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import Faq from "../FAQ/Faq";
import Navbar from "../Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
//import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Work from "../Work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from "react";
import Amenities from "../Amenities/Amenities";
import CarouselD from "../Carousel/CarouselD";
import emailjs from "emailjs-com";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "@chakra-ui/react";
import {
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Search from "../Searchbar/Search";
import ContactForm from "../ContactForm/ContactForm";
import Contacte from "../Contacte/Contacte";
//import { useDisclosure } from '@chakra-ui/react'
function HomePage() { 
  const [co,setCo]=useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  const [input, setInput] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
  }, []);
  //const [fdone,setFdone]=React.useState(false);
  const [form, setForm] = React.useState({
    Name: "",
    Email: "",
    Number: "",
  });

  function handleChangeForm(event) {
    const { name, value } = event.target;
    setInput(true);
    setForm((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }


  function myGreeting() {
    onOpenModal();
    // setApp("toaste");
  }
  React.useEffect(() => {
    setTimeout(myGreeting, 5000);
  }, []);
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // function close()
  // {
  //   setApp("toastee")
  // }
  function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  function submitNoteForm(event) {
    console.log(form.Name + ",,," + form.Email);
    event.preventDefault();
    if (
      form.Name === "" ||
      !(form.Email.includes("@", 0) && form.Email.includes(".com", 0)) ||
      !containsOnlyNumbers(form.Number)
    ) {
      setInput(false);
    } else {
      console.log(event.target);
      emailjs
        .sendForm(
          "service_adr03va",
          "template_2r0es66",
          event.target,
          "PvTh2g-GgAfPvNvK_"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      onCloseModal();
    }
  }
 
  
  return (
    <div className="App">
      <span className="sp"></span>

      <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
      >
        <div className="moddd">
          <div className="mod-top">
            Contact us to get yourself a workplace today{" "}
          </div>
          <form onSubmit={submitNoteForm}>
            {input === true ? (
              <></>
            ) : (
              <div className="modal-bg">
                * Fill Name and Email fields so that we can reach you
              </div>
            )}
            <FormLabel className="home-pad" name="Name">
              Name
            </FormLabel>
            <Input
              placeholder="Name"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Name"
              onChange={handleChangeForm}
            />
            <div className="gap"></div>
            <FormLabel className="home-pad" name="Email">
              Email
            </FormLabel>
            <Input
              placeholder="Email"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Email"
              onChange={handleChangeForm}
            />
            <FormLabel className="home-pad" name="Number">
              Whatsapp Number
            </FormLabel>
            <Input
              placeholder="Enter your number"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Number"
              onChange={handleChangeForm}
            />
            <div className="home-pad"></div>
            <Button colorScheme="blackAlpha" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>

      <div className="nav-sticky">
      <div className='nav-sticky'>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <NavLink to="/">
        <img className='logN' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673081748/bita-final-removebg-preview_hrfoev.png" alt="nf" />
        </NavLink>
          {/* <img className='logN' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1672838305/Dark_Beige_Modern_Real_Estate_Building_Logo-removebg-preview_xx8tar.jpg" alt="nf" /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <BsFillHddStackFill />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li className='hov'>
              <NavLink to="/">
                Home
                </NavLink>
            </li>
            <li className='hov'>
              <NavLink to="/WorkPlaces">WorkPlaces</NavLink>
            </li>
            <li className='hov'>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            
            <li className='hov'>
              <NavLink to="/about">About</NavLink>
            </li>

            <li className='hov'>
              <a href="#contactcon">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
      </div>

      <header className="App-header" onClick={()=>setCo(true)}>
        <div className="body">
          <section className="contain">
            <div className="top-card banner-msg-box form_container msg">
              <div className="top-Header">Find your perfect workspace</div>
              <div className="top-middle">
                Whether you’re a team of one or a growing startup, we have flexible solutions for all the ways you
                work and living.
              </div>
            </div>
            <div className="slide">
              <Carousel
                className="slide"
                controls={true}
                keyboard={true}
                touch={true}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673807049/IMG-0026_oohdyp.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799191/IMG-0075_jw3h9e.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673807058/IMG-0025_lsgmxt.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </header>
      <div id="contid">
        {/* <Contacte /> */}
        <div className='part2' id="contactcon">
            <div className='Contact' data-aos="fade-up">Contact &nbsp; Us</div>
            <div className='sec2'>
                <div className='sec2w' data-aos="zoom-in-left">
                    <ContactForm co={co} onClickOutside={()=>{console.log("alert!")}} />
                </div>
            </div>
        </div>
        <div className="Contact-gap"></div>
      </div>
      <div className="Carou-f1" data-aos="fade-up" onClick={()=>setCo(true)}>
        <div className="carou-f2">
          Amazing office spaces, all at premium locales
        </div>
        <div className="Carou-f3">
        47BITA PODS is a tech-savvy and flexible co-working space that endures four major aspects like productivity, creativity, and networking with innovation as its backbone through a set of seven unique amenities in Kolkata, India. We have all sorts of amenities like co-working, private cabins, meeting rooms, event rooms, interview rooms, sweet rooms and cafe
        </div>
      </div>

      <div className="Carou" data-aos="fade-up">
        <CarouselD />
      </div>
      <div className="work">
        <div className="Faqq-q" data-aos="fade-up">
          Stylish workspaces
        </div>
        <Work />
      </div>
      <div className="Amenities">
        <div className="Faqq" data-aos="fade-up">
          Amenities we Offer
        </div>
        <Amenities />
      </div>
      <div className="Faq">
        <div className="Faqq" data-aos="fade-up">
          F.A.Q.
        </div>
        <Faq />
      </div>
      <div className="Footer" data-aos="zoom-in-up">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
