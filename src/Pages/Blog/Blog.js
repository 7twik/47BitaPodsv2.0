import './Blog.css';
import React from 'react'
import Navbar from '../Navbar/Navbar';
import BlogSec from '../BlogSec/BlogSec';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Pblog from '../Pblog/Pblog';
const Blog = () => {
  
  const [notes,setNotes]=React.useState(null);
    React.useEffect(() => {
        AOS.init();
      }, []);
    React.useEffect(()=>{
        // fetch("http://localhost:8080/blog").then(res => res.json())
        //    .then(jsonRes =>{ 
        //     jsonRes.reverse();
        //     setNotes(jsonRes);});

        const options = {
          method: 'GET',
          url: 'https://bitapodsbackend.onrender.com/blog'
      }
      axios.request(options).then((response) => {
        console.log(response.data.orders)
       setNotes(response.data.orders)

    }).catch((error) => {
        console.error(error)
    })
      }); 
  const [state,setState]=React.useState(1);
  const [bloge,setBloge]=React.useState({
    image: "",
    author: "",
    head: "",
    body: "",
    date: new Date()
  });
  function stateChange(image1,head1,body1,author1,date1)
  {
    setState(0);
    setBloge((prevNote) => {
      return {
        ...prevNote,
        image:image1,
        author: author1,
        head: head1,
        body:body1,
        date:date1
      };
      }
    )
  }

  return (
    <div>
        <Navbar />

{(state===1)?
        <div>
        <div className='body'>
                <section className='containn'>
        <div className='top-card banner-msg-box blog-form_container msg blog-align'>
                    <div className='top-Header'>
                    Blog

                    </div>
                    <div className='top-middle'>
                    Be inspired. Get motivated. Start learning.
                    </div>
        </div>
        <div className="slide" >
                         <img
                          className="d-block w-900 blog-img"
                            src="https://source.unsplash.com/1600x900/?inspiration"
                            alt="First slide"
                          />
        </div>
        </section></div>
        <div className='blog-sec2o'>
        
        <div className='Faqq'  data-aos="fade-up">Discover</div>
        <div className='blog-sec2'>
        {(notes==null)?<></>:notes.map((noteItem, index) => {
            return (
              <div data-aos={(index%2===0)?"fade-up-left":"fade-up-right"} >
                <BlogSec className="blogsec-each" data-aos="fade-left" id={index} click={stateChange} date={noteItem.date} head={noteItem.head} body={noteItem.body} image={noteItem.image} author={noteItem.author} />
              </div>
              );
              })}
          </div>
          </div></div>:<Pblog date={bloge.date} author={bloge.author} body={bloge.body} head={bloge.head} image={bloge.image} />}
        
        
        <div className='spaceBB'></div>
        <div className='Footer' data-aos="zoom-in-up">
                <Footer />
        </div>
    </div>
  )
}

export default Blog;