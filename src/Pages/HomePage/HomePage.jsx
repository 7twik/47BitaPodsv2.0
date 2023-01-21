import './home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Faq from '../FAQ/Faq';
import Navbar from "../Navbar/Navbar";
import Carousel from 'react-bootstrap/Carousel';
//import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Work from '../Work/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import Amenities from '../Amenities/Amenities';
import CarouselD from '../Carousel/CarouselD';
import emailjs from "emailjs-com"
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
function HomePage() {

  const [input,setInput]=React.useState(true);
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [fdone,setFdone]=React.useState(false);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
    Number: ""
	  });
    React.useEffect(()=>{
      if ((form.Name!=="")&&(form.Email!==""))
      {
        setFdone(true);
      }
      else
      {
        setFdone(false);
      }
    })
    
    function handleChangeForm(event) {
      const { name, value } = event.target;
      setInput(true);
      setForm((prevNote) => {
        return {
        ...prevNote,
        [name]: value
        };
      });
      };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [app,setApp]=React.useState("toastee")
  //const myTimeout = setTimeout(myGreeting, 5000);
  React.useEffect(()=>{
    setTimeout(myGreeting, 5000);
  },[]);
  function myGreeting()
  {
    onOpen();
    setApp("toaste");
  }
  function close()
  {
    setApp("toastee")
  }
  function submitNoteForm(event)
  {   
      console.log(form.Name+",,,"+form.Email);
      event.preventDefault();
      if (form.Name==="" || form.Email==="")
      {
        setInput(false);
      }
      else{
        console.log(event.target);
        emailjs.sendForm("service_adr03va","template_2r0es66",event.target,"PvTh2g-GgAfPvNvK_").then(res=>{console.log(res);}).catch(err=> console.log(err));   
        onClose();
      }
  }

  return (
    <div className="App">
      <span className='sp'></span>
      {/* <div className={app}>
      <div className='popp'>
            <div className='pop-in'>
              <Button className='pop-but' colorScheme='red' onClick={close}>Close</Button>
              <div className='pop-heading'>
                Contact us to get yourself a workplace today 
              </div>
              <div className='pop-2'>
                <Form />
              </div>
          </div>
        </div>
      </div> */}
      {/* <div className={app}>
        <div className='popp'>
        <div className='cross-button' onClick={close}><RxCross1 /></div>
              <div className='pop-in'>
                
                <div className='pop-body'>
                  <div className='pop-heading'>
                    Want to book a workplace today?
                  </div>
                  <div className='pop-heading'>
                    Contact us right now !
                  </div>
                    <Forme />
                 </div> 
              </div>
          </div>
        </div> */}
        <Modal closeOnOverlayClick={false} size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader className="modal-bg mod-top">Contact us to get yourself a workplace today </ModalHeader>       
          <ModalBody className="modal-bg">
          <form onSubmit={submitNoteForm}>
              {(input===true)?<></> : <div className='modal-bg'>* Fill Name and Email fields so that we can reach you</div>}
              <FormLabel className="home-pad" name="Name">Name</FormLabel>
              <Input placeholder='First name'  name="Name"  onChange={handleChangeForm} />
              <div className="gap"></div>
              <FormLabel className="home-pad" name="Email">Email</FormLabel>
              <Input placeholder='Last name' name="Email"  onChange={handleChangeForm} />
              <FormLabel className="home-pad" name="Number">Whatsapp Number</FormLabel>
              <Input placeholder='Last name' name="Number" onChange={handleChangeForm} />
              <div className="home-pad"></div>
              <Button colorScheme="red" type="submit">Submit</Button>
         
              </form>
          </ModalBody>
          <ModalFooter className="modal-bg">
             </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <div className={app}>
              <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>popup</h1>
                                <h1 onClick={close}>X</h1>
                            </div>
                            <div>
                            <p>This is simple popup in React js</p>
                            </div>
                        </div>
                    </div>
                    </div> */}

      <div className='nav-sticky'>
        <Navbar />
      </div>

                <header className="App-header">
                  
                <div className='body'>
                <section className='contain'>
                  <div className='top-card banner-msg-box form_container msg'>
                    <div className='top-Header'>
                       Find your perfect workspace
                    </div>
                    <div className='top-middle'>
                      Whether you’re a team of one, a growing startup, or a Fortune 500 company—we have flexible solutions for all the ways you work.
                    </div>
                    <Dropdown className='top-loca' >
                      <Dropdown.Toggle id="dropdown-basic" className='top-local' variant='dark' size="lg">
                        Location
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Sector 5</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Baguihati</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Chinar Park</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dum Dum</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={3000}>
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
              
              <div className='Carou-f1' data-aos="fade-up">
                  <div className='carou-f2'>
                  Amazing office spaces, all at premium locales
                 </div>
                 <div className="Carou-f3">
                  Our elegant and fully tech-enabled office spaces are designed keeping your needs in mind. Be it a single desk, a private cabin, a meeting room or a larger space for your entire team – Awfis is your one-stop solution.
 
                 </div>
                 
                </div>
                  
              <div className='Carou'  data-aos="fade-up">
                
                <CarouselD />
              </div>
              <div className="work">
                <div className='Faqq-q'  data-aos="fade-up">Stylish workspaces</div>
                <Work />
              </div>
              <div className='Amenities'>
                <div className='Faqq'  data-aos="fade-up">Amenities we Offer</div>
                  <Amenities />
              </div>
              {/* <div className='part2'>
                <div className='Contact' data-aos="fade-up">Contact &nbsp; Us</div>
                <div className='sec2' ref={ref}>
                  <div className="sec2-left" data-aos="zoom-in-right">
                    <img className="imgbf" src="https://media.licdn.com/dms/image/C4D22AQETnjqUWKXOJw/feedshare-shrink_800/0/1669935389766?e=1674691200&v=beta&t=hN-MAbrWTQZrb5fHM-1vc3ptyHcqSl1tyEvEx-j1IPY" alt="not loaded" />
                  </div>
                  <div className='sec2-right' data-aos="zoom-in-left">
                    <Form />
                  </div>
                </div>
              </div> */}
              <div className='Faq'>
                <div className='Faqq' data-aos="fade-up">F.A.Q.</div>
                <Faq />
              </div>
              <div className='Footer' data-aos="zoom-in-up">
                <Footer />
              </div>
    </div>
  );
}

export default HomePage;
