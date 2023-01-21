import React from 'react'
import { Button } from '@chakra-ui/react'
import "./Bookings.css"
import {MdDelete} from "react-icons/md"
import {GiCheckMark} from "react-icons/gi"
import axios from "axios"
const Bookings = (props) => {
    const [form,setForm]=React.useState({
        Name: props.Name,
        Email:props.Email
    })
    
    function del(){
        const d={
            Name: props.Name,
            Email: props.Email
        }
        // axios.post("https://bitapodsbackend.onrender.com/formdel", form);
        axios.post("https://bitapodsbackend.onrender.com/formdel", d);
        //window.location.reload();
    }
    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        return new Date(parts[0], parts[1]-1, parts[2]); 
      }
      function getDates (startDate, endDate) {
        const dates = []
        let currentDate = startDate
        const addDays = function (days) {
          const date = new Date(this.valueOf())
          date.setDate(date.getDate() + days)
          return date
        }
        while (currentDate <= endDate) {
          dates.push(currentDate)
          currentDate = addDays.call(currentDate, 1)
        }
        return dates
      }
    function add(){
        const d={
            Name: props.Name,
            Email: props.Email
        }
        var d1=(props.start1).slice(0,10);
        var d2=(props.end1).slice(0,10);
        d1=parseDate(d1);
        d2=parseDate(d2);
        console.log(parseDate((props.start1).slice(0,10))+",,,"+(props.end1).slice(0,10));
        console.log(d1+",,"+d2);
        const dates=getDates(d1,d2)
        axios.post("https://bitapodsbackend.onrender.com/formdel", d);
        var b=[];
        for (var i=0;i<dates.length;i++)
        {
            b.push({
            startTime: props.start2,
            endTime: props.end2,
            date:dates[i]
            })
        }
        for (i=0;i<dates.length;i++)
        {
            console.log(b[i].p+",,"+b[i].q);
        }
        
        console.log(dates);
        console.log(b);
        const send={
            dates:b,
            Location:props.Location
        }
        axios.post("https://bitapodsbackend.onrender.com/date",send);
    }
  return (
    <div>

    <div className='Book-total'>
            <div className='blogSec-head' value={props.Name}>
                Name - &nbsp; {props.Name}
            </div>
            <div className='blogSec-body'>
                Email- &nbsp; {(props.Email)}
            </div>
            <div className='blogSec-body'>
                Number- &nbsp; {(props.Number)}
            </div>
            <div className='blogSec-body'>
                Location - &nbsp; {(props.Location)}
            </div>
            <div className='blogSec-body'>
                No. of seats- &nbsp; {(props.No)}
            </div>
            <div className='blogSec-date'>
                Date : {(props.start1).slice(0,10)} &nbsp; - &nbsp; {(props.end1).slice(0,10)}  
            </div>
            <div className='blogSec-date'>
                From : {(props.start2).slice(0,5)} &nbsp; - &nbsp; {(props.end2).slice(0,5)}  
            </div>
            <Button className='Book-button' colorScheme='red' onClick={del}> <MdDelete /></Button>
            <Button className='Book-button'  colorScheme='whatsapp' onClick={add}> <GiCheckMark /></Button>
        </div>
        </div>
        
  )
}

export default Bookings