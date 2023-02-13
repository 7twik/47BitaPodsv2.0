import './Amenities.css';
import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWifi } from "react-icons/bs";
import {AiFillCar , AiFillPrinter} from "react-icons/ai";
import {MdOutlineFastfood ,MdComputer} from "react-icons/md";
import {RiPinDistanceFill} from "react-icons/ri";
import {FaPencilRuler ,FaHandsHelping } from "react-icons/fa";
import {GiCoffeeCup,GiModernCity} from "react-icons/gi";
import {TbPlant} from "react-icons/tb";
import {BiRupee} from "react-icons/bi"
const Amenities = () => {
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='Ame-total'>
        <div className='Ame-left' data-aos="fade-up-right">
            <div className='Ame-int' data-aos="fade-up-right">
                <GiModernCity />
                <div className='Ame-text'>Modern Space Designs</div>
            </div>
            <div className='Ame-int' data-aos="fade-up">
                <BiRupee />
                <div className='Ame-text'>Transparent Costing</div>
            </div>
            <div className='Ame-int' data-aos="fade-up-left">
                <TbPlant />
                <div className='Ame-text'>Eco-friendly Environment</div>
            </div>
            <div className='Ame-int' data-aos="fade-up-right">
                <FaHandsHelping />
                <div className='Ame-text'>Premium Hospitality</div>
            </div>
            <div className='Ame-int' data-aos="fade-up">
                <RiPinDistanceFill />
                <div className='Ame-text'>
                    Great Connectivity
                </div>
            </div>
            <div className='Ame-int' data-aos="fade-up-left">
                <BsWifi/>
                <div className='Ame-text'>
                    High Speed Internet
                </div>
            </div>
            <div className='Ame-int' data-aos="fade-up-right">
                <GiCoffeeCup />
                <div className='Ame-text'>
                    Fully Equipped Cafe
                </div>
            </div>
            <div className='Ame-int' data-aos="fade-up">
                <AiFillCar />
                <div className='Ame-text'>
                    Free Parking
                </div>
            </div>
            <div className='Ame-int' data-aos="fade-up-left">
                <MdOutlineFastfood />
                <div className='Ame-text'>Great Snacks</div>
            </div>
            <div className='Ame-int' data-aos="fade-up-right">
                <MdComputer />
                <div className='Ame-text'>Professional IT Support</div>
            </div>
            <div className='Ame-int' data-aos="fade-up">
                <AiFillPrinter />
                <div className='Ame-text'>Efficient Printing and Scanning Devices</div>
            </div>
            <div className='Ame-int' data-aos="fade-up-left">
                <FaPencilRuler />
                <div className='Ame-text'>
                    Office Supplies
                </div>
            </div>
        </div>
        <div className='Ame-right' data-aos="fade-up-left">
            <img className='Ame-img' src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" alt="nf" />
        </div>
    </div>
  )
}

export default Amenities;




