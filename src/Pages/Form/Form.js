import './form.css';
import React from 'react';
import { Box } from '@chakra-ui/react'
import axios from "axios";
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    Button
  } from '@chakra-ui/react';
import { setSeconds } from 'date-fns';
  

const Form = () => {


  const [loc,setLoc]=React.useState(false);
  const [input,setInput]=React.useState(true);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
	  Number: "",
		No: "",
    Location: "",
    startDate: "",
    endDate: "",
    startTime: "11:00",
    endTime: "21:00"
	  });
    
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
    const [datesBlock,setBlock]=React.useState([]);
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [startTime,setStartTime]=React.useState(setHours(setMinutes(new Date(), 0), 11));
    const [endTime,setEndTime]=React.useState(setHours(setMinutes(new Date(), 0), 21));
    const [chec,setChec]=React.useState(false);
    function isDateBetween(startDatee, endDatee, dateToChecke) {
      const d1=setHours(setMinutes(setSeconds(new Date(startDatee), 0), 0), 12);
      const d2=setHours(setMinutes(setSeconds(new Date(endDatee), 0), 0), 22);
      const d3=setHours(setMinutes(setSeconds(new Date(dateToChecke), 0), 0), 12);
      console.log(d1+","+d2+","+d3);
      console.log(d3 >= d1 && d3 <= d2);
      return d3 >= d1 && d3 <= d2;
    }
    const [avoid1,setAvoid1]=React.useState("22:00");
    const [avoid2,setAvoid2]=React.useState("22:00")

    React.useEffect(()=>{
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startTime: (startTime.toTimeString()).slice(0,5)
        };
      });
    },[startTime])
    React.useEffect(()=>{
      console.log((endTime.toTimeString()).slice(0,5));
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        endTime: (endTime.toTimeString()).slice(0,5)
        };
      });
    },[endTime])
    React.useEffect(()=>{
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startDate: startDate
        };
      });
    },[startDate])

   // const [value, onChange] = React.useState(new Date());
    React.useEffect(()=>{
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startDate: startDate
        };
      });
    },[startDate])
  //  const [value1, onChange1] = React.useState(new Date());
    React.useEffect(()=>{
      setForm((prevNote) => {
        return {
        ...prevNote,
        endDate: endDate
        };
      });
      
      setChec(true);
      var min="21:00";
      var max="11:00";
      console.log(datesBlock.length);
      for (var i=0;i<datesBlock.length;i++)
      {
        console.log("entered before1"+startDate+" , "+endDate+","+datesBlock[0].date);
        if (isDateBetween(startDate,endDate,datesBlock[i].date))
        { 
            console.log("entered before");
            if (datesBlock[i].startTime<min)
            {
                  console.log("entered");
                  min=datesBlock[i].startTime;
                  setAvoid1(datesBlock[i].startTime);
            }
            if (datesBlock[i].endTime>max)
            {
                  console.log("entered 2");
                  max=datesBlock[i].endTime;
                  setAvoid2(datesBlock[i].endTime);
            }
        }
      }
    },[endDate,startDate,datesBlock])
    React.useEffect(()=>{
      
      setChec(true);
      var min="21:00";
      var max="11:00";
      for (var i=0;i<datesBlock.length;i++)
      {
        if (isDateBetween(startDate,endDate,datesBlock[i].date))
        { 
            console.log("entered before");
            if (datesBlock[i].startTime<min)
            {
                  console.log("entered");
                  min=datesBlock[i].startTime;
                  setAvoid1(datesBlock[i].startTime);
            }
            if (datesBlock[i].endTime>max)
            {
                  console.log("entered 2");
                  max=datesBlock[i].endTime;
                  setAvoid2(datesBlock[i].endTime);
            }
        }
      }
    },[startDate,endDate,datesBlock])
    const handleChangeForm1 = async (event)=> 
    {
      setShow(!show);
      handleChangeForm(event);
      if(event.target.value==null)
      {
        setLoc(false);
      }
      else
      { 
        const options = {
          method: 'GET',
          url: 'https://bitapodsbackend.onrender.com/dateget',
          params: {Location: event.target.value},
        };
    
        await axios.request(options).then((response) => {
          console.log(response.data[0].dates);
          setBlock(response.data[0].dates);
    
        }).catch((error) => {
          console.error(error)
        });
        setLoc(true);
        
      }
    }

    const filterPassedTime = (time) => {
      const t1=moment(avoid1, "HH:mm").toDate();
      const t2=moment(avoid2, "HH:mm").toDate();
      const selectedDate = new Date(time);
      console.log("avoid1"+avoid1+", avoid2"+avoid2);
      return (t2.getTime() < selectedDate.getTime())||(t1.getTime()>selectedDate.getTime());
    };
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
      const submitNoteForm =async (event)=> {
        if (form.Name === "" || form.Email === "" || form.Number === 0 || form.No === 0|| form.Location === "")
        {
          setInput(false);
        }
        else{
            console.log(form);
            axios.post("https://bitapodsbackend.onrender.com/form", form);
            //window.location.reload();
        }
         };
         
  return (
    
    <div className='form-container1'>
        <FormControl className='form-stack'>
            <div className='spacebb'></div>
            <div className='spacebb'></div>
                {(input===true)?<></> : <div className='errorr'>* Fill all fields</div>}
                
                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Name</FormLabel>
                    </div>
                    <div className='form-right'>
                      <Input placeholder='Enter your name' name="Name" value={form.Name} onChange={handleChangeForm} required />
                    </div>
                </div>

                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Email address</FormLabel>
                    </div>
                    <div className='form-right'>
                      <Input type='email' placeholder="Enter your email" name="Email" value={form.Email} onChange={handleChangeForm} required />
                    </div>
                </div>


                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className="space">Whatsapp Number</FormLabel>
                    </div>
                    <div className='form-right'>
                        <NumberInput max={9999999999} placeholder='Enter your Number' min={1111111111} value={form.Number} required>
                              <NumberInputField placeholder='Enter your Number' name="Number"  onChange={handleChangeForm} />
                        </NumberInput>
                    </div>
                </div>

                <div className='form-total'>
                  <div className='form-left'>
                    <FormLabel className="space">No. of seats</FormLabel>
                  </div>
                  <div className='form-right'>
                    <NumberInput max={50} placeholder='Enter the no. of seats' min={10} value={form.No} required>
                          <NumberInputField  placeholder='Enter the no. of seats'  name="No" onChange={handleChangeForm} />
                    </NumberInput>
                  </div>
                </div>

                <div className='form-total'>
                    <div className='form-left'>
                        <FormLabel className="space">Enter Location</FormLabel>
                    </div>
                    <div className='form-right'>
                        <Select name="Location" onChange={handleChangeForm1} ref={target} value={form.Location} placeholder='Select location'>
                            <option value="Sector 5">Sector 5</option>
                            <option value="Baguihati">Baguihati</option>
                            <option value="Chinar Park">Chinar Park</option>
                            <option value="Dum Dum">Dum Dum</option>
                          </Select> 
                    </div>
                </div>
                
                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className='space'>Starting Date</FormLabel>
                    </div>
                    <div className='form-right bordel'>
                    <Box display='flex' className='bordel' as='button' borderRadius='md' borderWidth='2px' px={4} h={10}>
                    <DatePicker
                      disabled={(loc)?false:true}
                      className='form-timer'
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      //excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                      endDate={endDate}
                    />
                    </Box>
                    </div>
                </div>
                <div className='form-total'>
                    <div className='form-left'>
                      <FormLabel className='space'>Ending Date</FormLabel>
                    </div>
                    <div className='form-right bordel'>
                    {/* <div className='borde'> */}
                    <Box display='flex' className='bordel' as='button' borderRadius='md' borderWidth='2px' px={4} h={10}>
                    <DatePicker
                      disabled={(loc)?false:true}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      
                      className='form-timer'
                      //excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                      minDate={startDate}
                    /></Box>
                    </div>
                </div>

                <div className='form-total'>
                  <div className='form-left'>            
                      <FormLabel className="space">Time Slot</FormLabel>
                  </div>
                  <div className='form-right bordel'>
                      <Box display='flex' className='bordel' as='button' borderRadius='md' borderWidth='2px' px={4} h={10}>
                          <DatePicker
                            disabled={(chec)?false:true}
                            className='form-timer'
                            selected={startTime}
                            onChange={(date) => setStartTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            filterTime={filterPassedTime}
                            minTime={setHours(setMinutes(new Date(), 0), 11)}
                            maxTime={setHours(setMinutes(new Date(), 0), 21)}
                          />
                          </Box>
                        
                    </div>
                </div>
                <div className='form-total'>
                <div className='form-left'>            
                      
                  </div>
                  <div className='form-right bordel'>
                  <Box display='flex' className='bordel' as='button' borderRadius='md' borderWidth='2px' px={4} h={10}> 
                          <DatePicker
                            disabled={(chec)?false:true}
                            className='form-timer'
                            selected={endTime}
                            onChange={(date) => setEndTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            filterTime={filterPassedTime}
                            minTime={startTime}
                            maxTime={setHours(setMinutes(new Date(), 0), 21)}
                          />
                          
                        </Box>
                    </div>
                </div>
                <div className='spacebb'></div>
                <div className='form-total'>
                  <div className='form-submi'>
                    <Button className='form-buttonf' colorScheme='red' onClick={submitNoteForm}><div className='form-subm'>Submit</div></Button>
                  </div>
                </div>
        
          </FormControl> 
        </div>
  )
}





export default Form;