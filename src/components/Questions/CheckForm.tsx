import React, { useState } from "react";
import Icons from "../icons";
//@ts-ignore
import Fade from 'react-reveal/Fade';
import CheckFormBox from "../CheckBoxForm";
 
const CheckForm = ({
    setShowScreen,
    showScreen,
  }: {
    setShowScreen: any;
    showScreen: number;
  }) => {
    return (
      <Fade left>
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd">
        <div className="kafms-kfsamfer">
          <div className="skfalk-smdsefds">
            <div className="kdjnfakdsfm-jsamre">
              <div className="kjdsos0jnawd">
                <div className="ksdnskn-wje">
                  <img
                    className="hjksajnk0-ajs"
                    src={require("../../images/i9.png")}
                  />
                </div>
                <button className="kajfldsf no-shadow">
                  <Icons iconNumber={86}/>
                </button>
              </div>
            </div>
            <div className="kjdflkads-mdskf">
              <h3>Job Title</h3>
              <h5>
                <Icons iconNumber={16} /> Company Name
              </h5>
              <h6>
                <Icons iconNumber={17} /> Location
              </h6>
            </div>
          </div>
          <div className="njfk-amew">
          <CheckFormBox/>
          <CheckFormBox/>
          <CheckFormBox/>
             
          
          </div>
          <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
            <div className="continueBtnDiv snasdj-sawdne-1">
              <button
                className="btn lkdafhkls0d"
                onClick={() => {
                  setShowScreen(4);
                }}
              >
                PUBLISH & SHARE
                <div className="klajdfkls-ds pos-rel">
                  <Icons iconNumber={42} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62}/>
        </div>
      </div>
      </Fade>
    );
  };
export default CheckForm