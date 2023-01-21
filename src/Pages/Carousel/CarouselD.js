import './Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselD = () => {
  return (
    <div>
        <div className="slide carou-total" >
                  <Carousel className="slide" variant='dark' controls={true} keyboard={true} touch={true} interval={3000}>
                        <Carousel.Item className='Carou-tot'>
                        <div className='Carou-tot'>
                          <div className='carou-left'>
                          <div className='carou-f22'>
                              Baguihati
                              </div>
                            <img className='carou-img'
                              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                              alt="First slide"
                            />
                            </div>
                            <div className='carou-right'>
                            <div className='carou-f22'>
                            Dum Dum
                            </div>
                            <img className='carou-img'
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="fourt slide"
                          />
                            </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='Carou-tot'>
                          <div className='Carou-tot'>
                            <div className='carou-left'>
                            <div className='carou-f22'>
                                Chinar Park
                              </div>
                              <img className='carou-img'
                                src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799196/IMG-0070_w5gt4x.jpg"
                                alt="Second slide"
                              />
                            </div>
                            <div className='carou-right'>
                            <div className='carou-f22'>
                            Sector 5
                            </div>
                            <img className='carou-img'
                            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Third slide"
                          />
                            </div>
                          </div>
                        </Carousel.Item>
                  </Carousel>
                  </div>
    </div>
  )
}

export default CarouselD;