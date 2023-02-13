import React from "react";
import "./Work.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  const [tab1, setTab1] = React.useState(1);
  function hClick(event) {
    const val = event.target.value;
    setTab1(val);
  }
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="work-tab" data-aos="fade-up">
      <Tabs>
        <TabList className="work-list">
          <Tab
            className={tab1 === 1 ? "work-titlee" : "work-title"}
            value="1"
            onClick={hClick}
          >
            Flexible seats
          </Tab>
          <Tab
            className={tab1 === 2 ? "work-titlee" : "work-title"}
            value="2"
            onClick={hClick}
          >
            Meeting Rooms
          </Tab>
          <Tab
            className={tab1 === 3 ? "work-titlee" : "work-title"}
            value="3"
            onClick={hClick}
          >
            Fixed seats
          </Tab>
          <Tab
            className={tab1 === 4 ? "work-titlee" : "work-title"}
            value="4"
            onClick={hClick}
          >
            Cabins
          </Tab>
        </TabList>

        <TabPanel className="work-content">
          <div className="work-left" data-aos="fade-up-left">
            <img
              data-aos="zoom-in-left"
              className="d-block w-900 work-img"
              src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799194/IMG-0086_inbmzl.jpg"
              alt="Second slide"
            />
          </div>
          <div className="work-right" data-aos="fade-up-right">
            <div className="h2">Flexible seats</div>
            <div className="work-rightt">
              <ul>
                <li className="work-point">
                  High-speed Internet and conference A/V tools.
                </li>
                <li className="work-point">
                  Choose from a variety of ergonomically designed ‘hot desks’,
                  set stations for the day and start working.
                </li>
                <li className="work-point">
                  Work alongside new people every day and benefit from the
                  diversity in the community. 
                </li>
                <li className="work-point pad-below">
                  Book and get complementary beverages and printing credits.
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="work-content">
          <div className="work-left" data-aos="zoom-in-left">
            <img
              className="d-block w-900 work-img"
              src="https://source.unsplash.com/1600x900/?meeting+room"
              alt="Second slide"
            />
          </div>
          <div className="work-right" data-aos="zoom-in-right">
            <div className="h2">Meeting Rooms</div>
            <div className="work-rightt">
              <ul>
                <li className="work-point">
                  Our meeting rooms can be the incubator for your next big idea.
                </li>
                <li className="work-point">
                  Host your clients inside our aesthetically designed, plush, VC
                  enabled meeting rooms Anytime, Anywhere.
                </li>
                <li className="work-point">
                  Enjoy true hospitality with in-meeting service of tea or
                  coffee from our pantry.
                </li>
                <li className="work-point">
                For all meeting types: private, business and executive.
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="work-content">
          <div className="work-left" data-aos="zoom-in-left">
            <img
              className="d-block w-900 work-img"
              src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799191/IMG-0073_w49n5b.jpg"
              alt="Second slide"
            />
          </div>
          <div className="work-right" data-aos="zoom-in-right">
            <div className="h2">Fixed seats</div>
            <div className="work-rightt">
              <ul>
                <li className="work-point">
                  For those who want their personal space untouched, this is
                  your permanent spot in a shared area.
                </li>
                <li className="work-point">
                  Includes discounts on meeting rooms and office space bookings.
                </li>
                <li className="work-point">
                  This space is ideal for individuals and teams. You also get to
                  collaborate with co-workers around you.
                </li>
                <li className="work-point">
                  Book on daily to yearly basis and get complimentary high speed
                  Wi-Fi, hot beverages, printing & meeting room credits.
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="work-content">
          <div className="work-left" data-aos="zoom-in-left">
            <img
              className="d-block w-900 work-img"
              src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673799190/IMG-0076_t7hojo.jpg"
              alt="Second slide"
            />
          </div>
          <div className="work-right" data-aos="zoom-in-right">
            <div className="h2">Cabins</div>
            <div className="work-rightt">
              <ul>
                <li className="work-point">
                  Plug & play cabins for a team of 2 - 9 to provide a focused
                  work environment to nurture your ideas and grow your company.
                </li>
                <li className="work-point">
                  Private office with lockable cabins, drawers, storage space,
                  pin-up boards and white boards.
                </li>
                <li className="work-point">
                  Personalize with your company logo or customize the layout to
                  suit your work needs.
                </li>
                <li className="work-point">
                  Book on monthly to yearly basis and get complimentary high
                  speed Wi-Fi, hot beverages, printing & meeting room credits.
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Work;
