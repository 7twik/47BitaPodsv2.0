import './form.css';
import React from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
  import { DateRangePicker } from 'rsuite';
import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    Button
  } from '@chakra-ui/react';
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
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
    startTime: "",
    endTime: ""
	  });
    const [value, onChange] = React.useState([new Date(),new Date()]);
    React.useEffect(()=>{
      //console.log(value[0]+",,"+value[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startTime: value[0],
        endTime: value[1]
        };
      });
    },[value])
    const [value1, onChange1] = React.useState([new Date(), new Date()]);
    React.useEffect(()=>{
      console.log(value1[0]+",,"+value1[1]);
      setForm((prevNote) => {
        return {
        ...prevNote,
        startDate: value1[0],
        endDate: value1[1]
        };
      });
    },[value1])
    const [show, setShow] = React.useState(false);
  const target = React.useRef(null);
    const [datesBlock,setBlock]=React.useState([]);
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
          url: 'http://localhost:8080/dateget',
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
      const [array,setArray]=React.useState();

      function getDateRanges(dates, startDate, endDate) {
        // Sort the dates in ascending order
        dates.sort((a, b) => a - b);
    
        // Initialize an array to store the date ranges
        const dateRanges = [];
    
        // Initialize the start and end of the current date range
        let rangeStart = startDate;
        let rangeEnd;
    
        // Iterate through the dates
        for (let i = 0; i < dates.length; i++) {
            // If the current date is after the start date, add the date range to the dateRanges array
            if (dates[i] > startDate) {
                rangeEnd = new Date(dates[i])
                rangeEnd.setDate(rangeEnd.getDate()-1)
                dateRanges.push({start: rangeStart, end: rangeEnd});
            }
    
            // Update the start of the current date range to be the day after the current date
            rangeStart = new Date(dates[i]);
            rangeStart.setDate(rangeStart.getDate() + 1);
    
            // If it's the last date check endDate is after it 
            if(i === dates.length -1 && endDate > rangeStart) {
                dateRanges.push({start: rangeStart, end: endDate});
            }
        }
        // Return the date ranges
        return dateRanges;
    }
      // const disabledDate = (date) => {
      //   return datesBlock.filter(disabledDate => disabledDate.getTime() === date.getTime()).length > 0;
      // };
      const submitNoteForm =async (event)=> {
        if (form.Name === "" || form.Email === "" || form.Number === 0 || form.No === 0|| form.Location === "")
        {
          setInput(false);
        }
        else{
            console.log(form);
            axios.post("https://bitapodsbackend.onrender.com/form", form);
            window.location.reload();
        }
         };
         React.useEffect(()=>{
            if (loc===true)
            {
              const d2=datesBlock.sort();
              const d3=d2.length;
              console.log(d2+",,,"+new Date());
              setArray(getDateRanges(d2,new Date(),new Date('2023-12-31T16:09:20.590Z')));
              console.log(getDateRanges(d2,new Date(),new Date('2023-12-31T16:09:20.590Z')));
            }
         },[datesBlock,loc])
  const { allowedMaxDays, allowedDays, allowedRange, disabledRange, beforeToday, afterToday, combine } = DateRangePicker;
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
                      <FormLabel className='space'>Starting and Ending Date</FormLabel>
                    </div>
                    <div className='form-right'>
                    {/* <Popover>
                      <PopoverTrigger> */}

                      <DateRangePicker
                            onChange={onChange1}
                            value={value1}
                            placeholder="Default"
                            disabled={(loc)?false:true}
                            format="yyyy-MM-dd HH:mm:ss"
                            showOneCalendar
                            disabledDate={beforeToday()}
                            />
                            {/* </PopoverTrigger>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Available ranges for {form.Location}</PopoverHeader>
                                <PopoverBody className='date-avail'>
                                {(array!=null)?array.map((item, index) => 
                                      { return (
                                              <div key={index}>
                                                  {item.start} - {item.end}
                                              </div>
                                      )}):<></>}</PopoverBody>
                              </PopoverContent>
                              </Popover> */}
                            {/* disabledDate={combine(array.map((noteItem)=>{return(allowedRange((noteItem.start).slice(0,10),(noteItem.end).slice(0,10)))}))} */}
                      </div>
                </div>

                <div className='form-total'>
                  <div className='form-left'>            
                      <FormLabel className="space">Time Slot</FormLabel>
                  </div>
                  <div className='form-right'> 
                      <DateRangePicker
                            format="HH:mm"
                            onChange={onChange}
                            disabled={(loc)?false:true}
                            value={value}
                            ranges={[]}
                            />
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