import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 //@ts-ignore
 import { Fade } from "react-awesome-reveal";
 import Icons from '../icons';
import VideoForm from '../Home/Video';
import { useMediaQuery } from 'react-responsive';
 
const RightButtons=({hideMenu}:{hideMenu:boolean})=>{
    const isTab= useMediaQuery({ query: '(max-width: 1180px)' });

    return   <div className={`kljadjfkl-jaem kjdlamkdl-asdj ${isTab?"adaslkhdfjksj-ajenw":""}`}>
    <button className='no-shadow circleButtons'>
      <Icons iconNumber={isTab?70:68} />
      Favourite
    </button>
    <button className='no-shadow circleButtons'>
      <Icons iconNumber={isTab?71:69} />
      Edit
    </button>
    
    <button className='no-shadow circleButtons'>
      <Icons iconNumber={isTab?72:48} />
      Messages
    </button>
    <button className='no-shadow circleButtons'>
      <Icons iconNumber={isTab?73:49} />
      Delete
    </button>
  </div>
  }

const TestiMonials = () => {
   
  
    return (
        <div className='wh-100 kjsdfl-asjdm'>
            <VideoForm  />
            <RightButtons hideMenu={false}/>

        </div>
    )
};

export default TestiMonials;