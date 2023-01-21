import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Faq = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='total'>
        <div className='left'>

                <Accordion flush>
                    <Accordion.Item eventKey="1" variant="re">
                    <Accordion.Header data-aos="fade-right">Can I alter my workspace in any other location?</Accordion.Header>
                        <Accordion.Body>
                        You cannot alter or change any part of your workspace without permission from staff. Any physical signs of damage or alteration to our property may incur a fine, and if egregious enough may cause you to be barred from ZIOKS. However you may customise your workspace with some decor provided that you have prior consent from us.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2"  data-aos="fade-right">
                    <Accordion.Header>What are the no. of hours of availability?</Accordion.Header>
                    <Accordion.Body>
                    Our facility is accessible by 47BitaPods members 24 hours a day, 7 days a week. Services will be available from 8am to 8pm IST. If services are needed outside of regular hours (i.e. events), contact our sales team for special pricing.
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3"  data-aos="fade-right">
                    <Accordion.Header>Do you have any other locations in other countries?</Accordion.Header>
                    <Accordion.Body>
                    We do not have locations in other countries at this time, however, we are planning to expand in the near future.
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4"  data-aos="fade-right">
                    <Accordion.Header>How do i reserve a specific room at 47BitaPods?</Accordion.Header>
                    <Accordion.Body>
                    If you're at our physical location, visit our reception to book/reserve a specific space. Otherwise you can contact our sales team or use this form www.47BitaPods.com/workspaces if you're online.
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5"  data-aos="fade-right">
                    <Accordion.Header>Do you offer packages for specific workspaces?</Accordion.Header>
                    <Accordion.Body>
                    Yes we do! Contact our sales team for more information about packages and benefits for specific workspaces at 47BitaPods.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </div>
        <div className="right">   
            <Accordion flush>
            <Accordion.Item eventKey="6"  data-aos="fade-left">
             <Accordion.Header>How much do you charge for a workspace? </Accordion.Header>
                <Accordion.Body>
                For pricing information on our available workspaces, please contact our sales team at www.47BitaPods.com/contact or email us at sales@47BitaPods.com
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7"  data-aos="fade-left">
            <Accordion.Header>How long can i lease a space?</Accordion.Header>
            <Accordion.Body>
            We offer contracts with a minimum term of 3 months and a maximum of 11 months, with the option to renew.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8"  data-aos="fade-left">
            <Accordion.Header>Can i bring people from outside of my company in my work space?</Accordion.Header>
            <Accordion.Body>
            As long as they are your clients, or they are involved in your business in some way, we do allow people to visit your workspace provided that they do not disrupt the atmosphere or disturb other members or their workspaces.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9"  data-aos="fade-left">
            <Accordion.Header>When do i let 47BitaPods know im moving out?</Accordion.Header>
            <Accordion.Body>
            Please notify us 4 weeks in advance of when you're planning to not renew a lease. In order to receive your full security deposit, make sure the workspace is clean and there are no visible signs of neglect or damage to your workspace.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10"  data-aos="fade-left">
            <Accordion.Header>What does 47BitaPods offer that others dont?</Accordion.Header>
                <Accordion.Body>
                        ZIOKS is a shared co-working workspace that allows small businesses, individuals, and entrepreneurs so grow their business without worrying about space. Our space is strategically designed to let you and other people to connect, co-work and create new business opportunities. We also have modern amenities and services specifically designed to make your stay as comfortable as your home.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>



        </div>
    </div>
  )
}

export default Faq;