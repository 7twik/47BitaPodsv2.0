import './Forme.css';
import React from 'react';
import axios from "axios";
import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Button
  } from '@chakra-ui/react';
  

const Forme = () => {


  const [input,setInput]=React.useState(true);
  const [form, setForm] = React.useState({
		Name: "",
		Email: "",
	  Number: "",
	  });
  
  
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
        if (form.Name === "" || form.Email === "" || form.Number === 0 )
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
    
    <div className='form-container12'>
        <FormControl className='form-stack12'>
            <div className='spacebb'></div>
            <div className='spacebb'></div>
                {(input===true)?<></> : <div className='errorr'>* Fill all fields</div>}
                
                <div className='form-total12'>
                    <div className='form-right12'>
                      <Input placeholder='Enter your name' name="Name" value={form.Name} onChange={handleChangeForm} required />
                    </div>
                </div>

                <div className='form-total12'>
                    <div className='form-right12'>
                      <Input type='email' placeholder="Enter your email" name="Email" value={form.Email} onChange={handleChangeForm} required />
                    </div>
                </div>


                <div className='form-total12'>
                    <div className='form-right12'>
                        <NumberInput className="form-number" max={9999999999} placeholder='Enter your Number' min={1111111111} value={form.Number} required>
                              <NumberInputField placeholder='Enter your Number' name="Number"  onChange={handleChangeForm} />
                        </NumberInput>
                    </div>
                </div>

                <div className='spacebb'></div>
                <div className='form-total12'>
                  <div className='form-submi12'>
                    <Button className='form-buttonf1' colorScheme='red' onClick={submitNoteForm}><div className='form-subm'>Submit</div></Button>
                  </div>
                </div>
        
          </FormControl> 
        </div>
  )
}





export default Forme;