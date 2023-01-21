import React from 'react'
import './Work.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import Footer from '../Footer/Footer';
//import 'react-tabs/style/react-tabs.css';
const WorkPlaces = () => {
    const [tab1,setTab1]=React.useState(1);
    // const [tab2,setTab2]=React.useState(0);
    // const [tab3,setTab3]=React.useState(0);
    // const [tab4,setTab4]=React.useState(0);
    function hClick(event){
        const val=event.target.value;
        setTab1(val);
    }
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div className='work-tab1' data-aos="fade-up">
        <Tabs>
          <TabList className="work-list1">
            <Tab className={tab1===1?"work-titlee1":"work-title1"} value="1" onClick={hClick}>Flexible seats</Tab>
            <Tab className={tab1===2?"work-titlee1":"work-title1"} value="2" onClick={hClick}>Meeting Rooms</Tab>
            <Tab className={tab1===3?"work-titlee1":"work-title1"} value="3" onClick={hClick}>Fixed seats</Tab>
            <Tab className={tab1===4?"work-titlee1":"work-title1"} value="4" onClick={hClick}>Cabins</Tab>
          </TabList>

          <TabPanel className="work-content1">
            <div className='work-left1' data-aos="fade-up-left">
                        <img
                         data-aos="zoom-in-left"
                          className="d-block w-900 work-img1"
                            src="https://source.unsplash.com/1600x900/?architecture"
                            alt="Second slide"
                          />
            </div>
            <div className='work-right1' data-aos="fade-up-right">
                <div className="h21">Flexible seats</div>
                <div className='work-rightt1'>
                    <ul>
                        <li className="work-point1">
                            Let your ideas soar with Awfis’ flexible seats spread across a wide, open, common area.
                        </li>
                        <li className="work-point1">
                            Choose from a variety of ergonomically designed ‘hot desks’, set stations for the day and start working.
                        </li>
                        <li className="work-point1">
                            Work alongside new people every day and benefit from the diversity in the community. Collaborate & network.
                        </li>
                        <li className="work-point1">
                            Book on daily to yearly basis and get complimentary high speed Wi-Fi, hot beverages and printing credits.
                        </li>
                    </ul>
                </div>
            </div>
          </TabPanel>

          <TabPanel className="work-content1">
          <div className='work-left' data-aos="zoom-in-left">
                        <img
                          className="d-block w-900 work-img"
                            src="https://source.unsplash.com/1600x900/?architecture"
                            alt="Second slide"
                          />
          </div>
            <div className='work-right1' data-aos="zoom-in-right">
                <div className="h21">Meeting Rooms</div>
                <div className='work-rightt1'>
                    <ul>
                        <li className="work-point1">
                            Our meeting rooms can be the incubator for your next big idea.
                        </li>
                        <li className="work-point1">
                            Host your clients inside our aesthetically designed, plush, VC enabled meeting rooms Anytime, Anywhere.
                        </li>
                        <li className="work-point1">
                            Enjoy true hospitality with in-meeting service of tea or coffee from our pantry.
                        </li>
                        <li className="work-point1">
                            Book a productive meeting for your team starting at Rs.400/hour with complimentary high speed Wi-Fi, hot beverages and printing credits.
                        </li>
                    </ul>
                </div>
           </div> 
          </TabPanel>

          <TabPanel className="work-content1">
          <div className='work-left' data-aos="zoom-in-left">
                        <img
                          className="d-block w-900 work-img1"
                            src="https://source.unsplash.com/1600x900/?architecture"
                            alt="Second slide"
                          />
          </div>
            <div className='work-right' data-aos="zoom-in-right1">
                <div className="h21">Fixed seats</div>
                <div className='work-rightt'>
                    <ul>
                        <li className="work-point1">
                            For those who want their personal space untouched, this is your permanent spot in a shared area.
                        </li>
                        <li className="work-point1">
                            A fully furnished dedicated desk with a secure storage space, pin-up board and white board.
                        </li>
                        <li className="work-point1">
                            This space is ideal for individuals and teams. You also get to collaborate with co-workers around you.
                        </li>
                        <li className="work-point1">
                            Book on daily to yearly basis and get complimentary high speed Wi-Fi, hot beverages, printing & meeting room credits.
                        </li>
                    </ul>
                </div>
            </div>
          </TabPanel>
          
          <TabPanel className="work-content1">
          <div className='work-left1' data-aos="zoom-in-left">
                        <img
                          className="d-block w-900 work-img1"
                            src="https://source.unsplash.com/1600x900/?architecture"
                            alt="Second slide"
                          />
          </div>
            <div className='work-right1' data-aos="zoom-in-right">
                <div className="h21">Cabins</div>
                <div className='work-rightt1'>
                    <ul>
                        <li className="work-point1">
                            Plug & play cabins for a team of 2 - 9 to provide a focused work environment to nurture your ideas and grow your company.
                        </li>
                        <li className="work-point">
                            Private office with lockable cabins, drawers, storage space, pin-up boards and white boards.
                        </li>
                        <li className="work-point1">
                            Personalize with your company logo or customize the layout to suit your work needs.
                        </li>
                        <li className="work-point1">
                            Book on monthly to yearly basis and get complimentary high speed Wi-Fi, hot beverages, printing & meeting room credits.
                        </li>
                    </ul>
                </div>
            </div>
          </TabPanel>
        </Tabs>
        
    </div>

    <div className='Footer' data-aos="zoom-in-up">
                <Footer />
        </div>
    </div>
  )
}

export default WorkPlaces;