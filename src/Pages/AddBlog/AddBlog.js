import React, { useState } from "react";
//import axios from "../api/axios";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './AddB.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    FormLabel,
    Button
  } from '@chakra-ui/react';


function AddBlog() {
    React.useEffect(() => {
        AOS.init();
      }, []);
  const [File, setFile]=useState(null);
  const [url,setUrl]=useState("");
  const [done,setDone]=useState(false);
  const [user,setUser]=useState(false);
  const [note, setNote] = useState({
    head: "",
    body: "",
    date: new Date(),
    author: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  const submitNote =async (event)=> {
    
    const data = new FormData()
    data.append("file",File)
    data.append("upload_preset","notepad")
    data.append("cloud_name","dcyfkgtgv")
    const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
        method:"post",
        body:data
    })
    const fil=await res.json();
    console.log(fil);
    setUrl(fil);
    setDone(true);
    event.preventDefault();
}
React.useEffect(() => {
  if(File!=="")
  {
    setUser(true);
  }
},[File]);

React.useEffect((event) => {
  if(done===true)
  {
    const newNote = {
      head: note.head,
      author: note.author,
      date: new Date(),
      body: note.body,
      image: url.secure_url
    };
    setNote({
        head: "",
        author: "",
        date: "",
        body: "",
    });
    console.log(newNote);
    axios.post("https://bitapodsbackend.onrender.com/AddBlog", newNote); 
    window.location.reload();
    setDone(false);
  }
  },[done,note,url.secure_url]);


  return (
    <div>
        <Navbar />
    <div>
      <form className="create-note" >
        {/* date head body author */}
          <input
            name="head"
            onChange={handleChange}
            value={note.head}
            placeholder="Title"
          />
            <div className="spaceb"></div>

        <textarea
          name="body"
          onChange={handleChange}
          value={note.body}
          placeholder="Write the body..."
          rows="3"
        />
            <div className="spaceb"></div>
        <input
            name="author"
            onChange={handleChange}
            value={note.author}
            placeholder="Author"
          />
            <div className="spaceb"></div>
        <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
            <FormLabel className="space">Upload Image</FormLabel>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
            </div>
            <p id="uidnote" className={!user? "instructions" : "offscreen"}>
                Must Insert Image. in jpg format preferably.
            </p>
        </div>
        <div className="spaceb"></div>
        <div className="spaceb"></div>
        <div className="spaceb"></div>
        <div className="Submito">
            <Button colorScheme='teal' onClick={submitNote}>Submit</Button>
        </div>
      </form>
    </div>
    <div className='Footer' data-aos="zoom-in-up">
                <Footer />
    </div>
    </div>
  );
}

export default AddBlog;
