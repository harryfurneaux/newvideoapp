import React, { useState } from "react";
import Icons from "../icons";

const Question = ({setselected,selected}:{setselected:any,selected:number}) => {
    const [isHoverOrActive, setisHoverOrActive] = React.useState(false);
    
    return (
      <div className="sdfsdfsdf">
        <div
          className={`jsfkms-akmdwa ${isHoverOrActive?"ksajdklsa":"hasdkjashd-d"}`}
          onClick={()=>{
            if(isHoverOrActive==true)
            {
              setselected(--selected)
            }
            else
            {
              setselected(++selected)
            }
            setisHoverOrActive(!isHoverOrActive)

          }}
        >
          <div className="d-flex align-items-center">
            <Icons iconNumber={isHoverOrActive ? 40 : 39} />
            <h5>What are your strengths and weaknesses?</h5>
          </div>
          <div>
            <div className=" ">
              <Icons iconNumber={26} />
              <h6>30s</h6>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Question
  