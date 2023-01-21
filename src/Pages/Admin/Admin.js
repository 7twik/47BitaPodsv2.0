import "./Admin.css"
import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import axios from "axios"
import Bookings from "../Bookings/Bookings"
import ListGroup from 'react-bootstrap/ListGroup';
const Admin = () => {
    
  const [notes,setNotes]=React.useState(null);
    React.useEffect(()=>{
        // fetch("http://localhost:8080/blog").then(res => res.json())
        //    .then(jsonRes =>{ 
        //     jsonRes.reverse();
        //     setNotes(jsonRes);});

        const options = {
          method: 'GET',
          url: 'https://bitapodsbackend.onrender.com/formGet'
      }
      axios.request(options).then((response) => {
        console.log(response.data.orders)
       setNotes(response.data.orders)

    }).catch((error) => {
        console.error(error)
    })
      }); 
  return (
    <div>
        <div className='nav-sticky'>
            <Navbar />
        </div>

        <div className="Faqq"> Bookings made: </div>
        <div>
        {(notes==null)?<></>:notes.map((noteItem, index) => {
            return (
              <div>
                <Bookings className="blogsec-each" id={index} Name={noteItem.Name} No={noteItem.No} Location={noteItem.Location} start1={noteItem.startDate} end1={noteItem.endDate} end2={noteItem.endTime} start2={noteItem.startTime}  Email={noteItem.Email} Number={noteItem.Number} />
              </div>
              );
              })}
        </div>
        <div className='Footer'>
        <ListGroup variant="flush">
        <ListGroup.Item action variant="dark">
            <li><a href="#/Help">Add Blog</a></li></ListGroup.Item></ListGroup>

            <Footer />
        </div>
    </div>
  )
}

export default Admin