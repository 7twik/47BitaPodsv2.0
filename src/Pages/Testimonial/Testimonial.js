import React from 'react'
import "./rev.css"
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Testimonial = () => {
  return (
    <>
    <Navbar />
    <div className='rev-overall'>
            <h1 className="privh1">Customer Reviews</h1>
            <div className='gapz'></div>
      <div className='rev-tot'>
            <Carousel className='rev-total' variant="dark">
      <Carousel.Item className='rev-item'>
        {/* <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          alt="First slide"
        /> */}
        <div className='rev-body'>
          <h3 className='rev-rev'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
          <div className='gapz'></div>
          <p className='rev-author'>Somebody</p>
        </div>
      </Carousel.Item>
      <Carousel.Item className='rev-item'>
        {/* <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          alt="Second slide"
        /> */}

        <div className='rev-body'>
          <h3 className='rev-rev'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
          <div className='gapz'></div>
          <p className='rev-author'>Somebody</p>
        </div>
      </Carousel.Item>
      <Carousel.Item className='rev-item'>
        {/* <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          alt="Third slide"
        /> */}

        <div className='rev-body'>
          <h3 className='rev-rev'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
          <div className='gapz'></div>
          <p className='rev-author'>
            Somebody
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='gapz'></div>
    </div>
    <Footer />
    </>
  )
}

export default Testimonial;