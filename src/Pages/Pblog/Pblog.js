import React from 'react';
import "./Pblog.css";
const Pblog = (props) => {
  return (
    <div>
        {
            <div>
                <div className='outerBlog1'>
                    <div className='innerBlog1'>
                    <div className='blog-date1'>
                        {props.date}
                    </div>
                    <div className='blog-head1'>
                        Topic : {props.head}
                    </div>
                    <div className='blog-author1'>
                        by &nbsp; &nbsp; <div className='author'> {props.author}</div>
                    </div>
                    </div>
                    <div className='blog-imgo'>
                        <img className='blog-img1' src={props.image} alt="nf" />
                    </div>
                    <div className='blog-body1'>
                        {props.body}
                    </div>
                    
                </div>
            </div>
        }
    </div>
  )
}

export default Pblog