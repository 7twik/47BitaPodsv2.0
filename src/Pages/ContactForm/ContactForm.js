import React, { useState } from "react";
import "./ContactForm.css";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { Multiselect } from "multiselect-react-dropdown";
import moment from "moment";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button,
} from "@chakra-ui/react";
import { setSeconds } from "date-fns";
import Carde from "../Carde/Carde";
import Cardee from "../Cardee/Cardee";
const ContactForm = (props) => {
  const [options, setOptions] = useState([
    "Cabins",
    "Meeting Room",
    "Conference Room",
    "Flexi Desk",
  ]);
  const [open1, setOpen1] = React.useState(false);
  const[isSubmit,setIsSubmit]=React.useState(false);

  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  const [loc, setLoc] = React.useState(false);
  const [input, setInput] = React.useState(true);
  const [form, setForm] = React.useState({
    State: "",
    City: "",
    Location: "",
    Livtype: "",
    Name: "",
    Email: "",
    Number: "",
    No: "",
    startDate: "",
    endDate: "",
    startTime: "11:00",
    endTime: "21:00",
    Roomtype: "",
    Rooms: [],
  });
  const [sinput,setsinput]=React.useState(true);
  function showw()
  {
    setsinput(false);
  }
  function noshow()
  {
    setsinput(true);
  }
  const [hide1, set1] = React.useState("invisible");
  const [hide2, set2] = React.useState("invisible");
  const [hide3, set3] = React.useState("invisible");
  const [hide4, set4] = React.useState("invisible");
  const [hide5, set5] = React.useState("invisible");
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);
  const [datesBlock, setBlock] = React.useState([]);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [startDate2, setStartDate2] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(
    setHours(setMinutes(new Date(), 0), 11)
  );  
  const [endTime, setEndTime] = React.useState(
    setHours(setMinutes(new Date(), 0), 21)
  );
  function isDateBetween(startDatee, endDatee, dateToChecke) {
    const d1 = setHours(setMinutes(setSeconds(new Date(startDatee), 0), 0), 12);
    const d2 = setHours(setMinutes(setSeconds(new Date(endDatee), 0), 0), 22);
    const d3 = setHours(
      setMinutes(setSeconds(new Date(dateToChecke), 0), 0),
      12
    );
    console.log(d1 + "," + d2 + "," + d3);
    console.log(d3 >= d1 && d3 <= d2);
    return d3 >= d1 && d3 <= d2;
  }
  const [avoid1, setAvoid1] = React.useState("22:00");
  const [avoid2, setAvoid2] = React.useState("22:00");

  function reload(){
    window.location.reload();
  }
  React.useEffect(() => {
    //console.log(value[0]+",,"+value[1]);
    setForm((prevNote) => {
      return {
        ...prevNote,
        startTime: startTime.toTimeString().slice(0, 5),
      };
    });
  }, [startTime]);
  React.useEffect(() => {
    console.log(endTime.toTimeString().slice(0, 5));
    //console.log(value[0]+",,"+value[1]);
    setForm((prevNote) => {
      return {
        ...prevNote,
        endTime: endTime.toTimeString().slice(0, 5),
      };
    });
  }, [endTime]);
  React.useEffect(() => {
    //console.log(value[0]+",,"+value[1]);
    setForm((prevNote) => {
      return {
        ...prevNote,
        startDate: startDate,
      };
    });
  }, [startDate]);

  // const [value, onChange] = React.useState(new Date());
  React.useEffect(() => {
    //console.log(value[0]+",,"+value[1]);
    setForm((prevNote) => {
      return {
        ...prevNote,
        startDate: startDate,
      };
    });
  }, [startDate]);
  //  const [value1, onChange1] = React.useState(new Date());
  React.useEffect(() => {
    setForm((prevNote) => {
      return {
        ...prevNote,
        endDate: endDate,
      };
    });

    var min = "21:00";
    var max = "11:00";
    console.log(datesBlock.length);
    for (var i = 0; i < datesBlock.length; i++) {
      console.log(
        "entered before1" +
          startDate +
          " , " +
          endDate +
          "," +
          datesBlock[0].date
      );
      if (isDateBetween(startDate, endDate, datesBlock[i].date)) {
        console.log("entered before");
        if (datesBlock[i].startTime < min) {
          console.log("entered");
          min = datesBlock[i].startTime;
          setAvoid1(datesBlock[i].startTime);
        }
        if (datesBlock[i].endTime > max) {
          console.log("entered 2");
          max = datesBlock[i].endTime;
          setAvoid2(datesBlock[i].endTime);
        }
      }
    }
  }, [endDate, startDate, datesBlock]);
  React.useEffect(() => {
    var min = "21:00";
    var max = "11:00";
    for (var i = 0; i < datesBlock.length; i++) {
      if (isDateBetween(startDate, endDate, datesBlock[i].date)) {
        console.log("entered before");
        if (datesBlock[i].startTime < min) {
          console.log("entered");
          min = datesBlock[i].startTime;
          setAvoid1(datesBlock[i].startTime);
        }
        if (datesBlock[i].endTime > max) {
          console.log("entered 2");
          max = datesBlock[i].endTime;
          setAvoid2(datesBlock[i].endTime);
        }
      }
    }
  }, [startDate, endDate, datesBlock]);
  const handleChangeForm1 = async (event) => {
    setShow(!show);
    handleChangeForm(event);
    if (event.target.value == null) {
      setLoc(false);
    } else {
      const options = {
        method: "GET",
        url: "https://bitapodsbackend.onrender.com/dateget",
        params: { Location: event.target.value },
      };

      await axios
        .request(options)
        .then((response) => {
          console.log(response.data[0].dates);
          setBlock(response.data[0].dates);
        })
        .catch((error) => {
          console.error(error);
        });
      setLoc(true);
    }
  };
  React.useEffect(() => {
    if (form.Location !== "" && form.City !== "" && form.Livtype !== "") {
      set1("form-total");
      set4("form-total2");
      // set5("form-total55");
    }
  }, [form]);
  React.useEffect(() => {
    if (
      form.Name !== "" &&
      form.No !== "" &&
      form.Number !== "" &&
      form.Email !== "" &&
      form.Rooms.length !== 0
    ) {
      console.log(form.Rooms);
      set2("form-total");
      set3("form-total55");
    }
  }, [form]);
  // React.useEffect(() => {
  //   if (form.startDate !== "" && form.endDate !== "" && hide2 !== "invisible"&&
  //   form.Rooms !== [])
  //     set3("form-total55");
  // }, [form]);

  const filterPassedTime = (time) => {
    const t1 = moment(avoid1, "HH:mm").toDate();
    const t2 = moment(avoid2, "HH:mm").toDate();
    const selectedDate = new Date(time);
    console.log("avoid1" + avoid1 + ", avoid2" + avoid2);
    return (
      t2.getTime() < selectedDate.getTime() ||
      t1.getTime() > selectedDate.getTime()
    );
  };
  function handleChangeForm(event) {
    const { name, value } = event.target;
    setInput(true);
    setForm((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  const onCheck = async (event) =>{
    if (
      form.State === "" ||
      form.City === "" ||
      form.Location === "" ||
      form.Livtype === "" ||
      form.Name === "" ||
      form.Email === "" ||
      form.Number === 0 ||
      form.No === 0 ||
      form.Rooms === [] ||
      form.startDate=== "" ||
      form.endDate=== "" ||
      form.startDate=== undefined ||
      form.endDate=== undefined ||
      form.startDate=== null ||
      form.endDate=== null
      
    ) {
      setInput(false);
    }
    else{
      console.log(form.startDate+",,"+form.endDate);
        onOpenModal1();
    }
  }
  const submitNoteForm = async (event) => {
    if (
      form.State === "" ||
      form.City === "" ||
      form.Location === "" ||
      form.Livtype === "" ||
      form.Name === "" ||
      form.Email === "" ||
      form.Number === 0 ||
      form.No === 0 ||
      form.Rooms === []
    ) {
      setInput(false);
    } else {
      console.log(form);
      axios.post("https://bitapodsbackend.onrender.com/form", form);
      setIsSubmit(true);
      setTimeout(reload,3000);    
    }
  };

  const ref = React.useRef(null);
  const { onClickOutside } = props;

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return (
    <div className="contact_section">
      <Modal className="mode" open={open1} onClose={onCloseModal1}>
        {isSubmit ?  <Cardee /> : <div className="mode">
          <Carde loc={form.Location}  />
          <Button
            className="form-buttonf"
            colorScheme="red"
            onClick={submitNoteForm}
          >
            <div className="form-subm">Submit</div>
          </Button>
        </div>}
      </Modal>
      
      <div className="form-container12" onMouseOver={noshow} onMouseOut={showw}>
        <FormControl className="form-stack12">
          <div className="spacebb"></div>
          <div className="spacebb"></div>
          {input === true ? (
            <></>
          ) : (
            <div className="errorr">* Fill all fields</div>
          )}
          {sinput === true ? (
            <div className="errorr"></div>
          ) : (
            <div className="errorr">* You need to fill all fields to proceed</div>
          )}

          {/* PART 1 */}
          <div className="form-total10 ">
            <div className="form-right10">
              <Select
                name="State"
                onChange={handleChangeForm1}
                ref={target}
                value={form.State}
                placeholder="Select State"
              >
                <option value="Sector 5">West Bengal</option>
              </Select>
            </div>
            <div className="form-right10">
              <Select
                name="City"
                onChange={handleChangeForm1}
                ref={target}
                value={form.City}
                placeholder="Select City"
              >
                <option value="Kolkata">Kolkata</option>
              </Select>
            </div>
            <div className="form-right10">
              <Select
                name="Location"
                onChange={handleChangeForm1}
                ref={target}
                value={form.Location}
                placeholder="Select location"
              >
                <option value="Sector 5">Sector 5</option>
                <option value="haldiram">Haldiram</option>
                <option value="Chinar Park">Chinar Park(I)</option>
                <option value="ganganagar">Ganganagar</option>
                <option value="cp">Chinar Park(II)</option>
              </Select>
            </div>
            <div className="form-right10">
              <Select
                name="Livtype"
                onChange={handleChangeForm1}
                ref={target}
                value={form.Livtype}
                placeholder="Select Living Type"
              >
                <option value="Well furnished">Well Furnished</option>
                <option value="Semi Furnished">Semi Furnished</option>
                <option value="Furnished">Furnished</option>
              </Select>
            </div>
          </div>

          <div className={hide1}>
            <div className="form-right">
              <Input
                type="name"
                placeholder="Enter your Name"
                name="Name"
                value={form.Name}
                onChange={handleChangeForm}
                required
              />
            </div>
            <div className="form-right">
              <Input
                type="email"
                placeholder="Enter your Email"
                name="Email"
                value={form.Email}
                onChange={handleChangeForm}
                required
              />
            </div>
            <div className="form-right">
              <NumberInput
                max={9999999999}
                placeholder="Enter your Number"
                min={1111111111}
                value={form.Number}
                required
              >
                <NumberInputField
                  placeholder="Enter your Number"
                  name="Number"
                  onChange={handleChangeForm}
                />
              </NumberInput>
            </div>
          </div>

          <div className={hide4}>
            <div className="form-right3">
              <Multiselect
                isObject={false}
                onRemove={(event) => {
                  console.log(event);
                  // set6(event);
                  setForm((prevNote) => {
                    return {
                      ...prevNote,
                      Rooms: event,
                    };
                  });
                }}
                onSelect={(event) => {
                  console.log(event);
                  // set6(event);
                  setForm((prevNote) => {
                    return {
                      ...prevNote,
                      Rooms: event,
                    };
                  });
                }}
                options={options}
                placeholder="Select Room Type"
                showCheckbox
              />
            </div>
            <div className="form-right">
              <NumberInput
                max={50}
                placeholder="Enter no. of seats"
                min={10}
                value={form.No}
                required
              >
                <NumberInputField
                  placeholder="Enter no. of seats"
                  name="No"
                  onChange={handleChangeForm}
                />
              </NumberInput>
            </div>
          </div>

          <div className={hide3}>
            <div className="form-left1 bordel">
              <FormLabel className="spacelabel">Starting Date</FormLabel>
              <Box
                display="flex"
                className="bordel"
                as="button"
                borderRadius="md"
                borderWidth="2px"
                px={4}
                h={10}
              >
                <DatePicker
                   placeholderText="MM/DD/YYYY"
                  className="form-timer"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  //excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  endDate={endDate}
                  minDate={startDate2}
                />
              </Box>
            </div>
            <div className="form-left1 bordel">
              <FormLabel className="spacelabel">Ending Date</FormLabel>
              <Box
                display="flex"
                className="bordel"
                as="button"
                borderRadius="md"
                borderWidth="2px"
                px={4}
                h={10}
              >
                <DatePicker
                   placeholderText="MM/DD/YYYY"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  className="form-timer"
                  //excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  minDate={startDate}
                />
              </Box>
            </div>
          </div>

          

          <div className={hide3}>
            <div className="form-right1 bordel">
              <FormLabel className="space">Time Slot</FormLabel>
              <Box
                display="flex"
                className="bordel"
                as="button"
                borderRadius="md"
                borderWidth="2px"
                px={4}
                h={10}
              >
                <DatePicker
                  className="form-timer"
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
            <div className="right2">to</div>
            <div className="form-right bordel">
              <Box
                display="flex"
                className="bordel"
                as="button"
                borderRadius="md"
                borderWidth="2px"
                px={4}
                h={10}
              >
                <DatePicker
                  className="form-timer"
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

          <div className="spacebb"></div>

          <div className={hide3}>
            <div className="form-submi">
              <Button
                className="form-buttonf"
                colorScheme="red"
                onClick={onCheck}
              >
                <div className="form-subm">Check</div>
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default ContactForm;
