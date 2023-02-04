import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div>
        <Navbar />
            <div className="privcon">
            <h1 className="privh1">Company Values</h1>
            <div className='gap'></div>
            
            <div className='gap'></div>
            
            <div className='gap'></div>
                <p>
                    The core values behind 47BitaPods is Quality, Flexibility and Transparency.
                    Quality of services, infrastructure, in-house amenities and support maintenance are provided to ensure that our customers get the best and most vibrant workspaces, to grow their ideas into enterprising businesses.  
                </p>
                    
                <p>
                    Flexibility and ease of customised options of plans to enable every work enthusiast to find a space where he or she can do what they love with the best community support.  
                    </p>
                    
                  <p>
                    Transparency in everything – Price, Services, Terms and Conditions – to start and build a strong relationship based on trust and goodwill.
                </p>
            </div>
            <div className='gapz'></div>
        <Footer />
    </div>
  )
}

export default About