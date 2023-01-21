import './Blogsec.css';
import React from 'react'
//import axios from 'axios';
const BlogSec = (props) => {
    //const[note,setNote]=React.useState(null);
    function hClick(event){    
        props.click(props.image,props.head,props.body,props.author,(props.date).slice(0,10));
    }

  return (
    <div>
    
    <div className='blogSec-total'>
        <div className='blogSec-left'>
            <img className='blogsec-img' src={props.image} alt="nf" />
        </div>
        <div className='blogSec-right'>
            <div className='blogSec-date'>
                Date : {(props.date).slice(0,10)}
            </div>
            <div className='spaceBB'></div>
            <div className='spaceBB'></div>
            <div className='blogSec-head' value={props.head} onClick={hClick}>
            {/* <div className='blogSec-head' value={props.head}> */}
                {props.head}
            </div>
            <div className='spaceBB'></div>
            <div className='blogSec-body'>
                {(props.body).slice(0,500)}...
            </div>
            <div className='spaceBB'></div>
            <div className='spaceBB'></div>
            <div className='blogSec-author'>
                by {props.author}
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogSec;