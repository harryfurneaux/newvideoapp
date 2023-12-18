import React, { useState } from "react";
import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";
import CheckFormBox from "../CheckBoxForm";
import no_pic from "../../images/no-pic.svg";

const CheckForm = ({
  setShowScreen,
  showScreen,
}: {
  setShowScreen: any;
  showScreen: number;
}) => {
  return (
    <Fade>
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd white-form height-none">
        <div className="check-form">
          <div className="d-flex">
            <img src={no_pic} />
            <div className="kjdflkads-mdskf check-form-heading">
              <h3>Job Title</h3>
              <h5><Icons iconNumber={16} /> Company Name</h5>
              <h6><Icons iconNumber={17} /> Location</h6>
            </div>
          </div>
          <div className="check-form-body">
            <CheckFormBox />
            <CheckFormBox />
            <CheckFormBox />
          </div>
          <div className="check-form-btn-div snasdj-sawdne-1">
            <button
              className="btn lkdafhkls0d"
              onClick={() => {
                setShowScreen(6);
              }}
            >
              PUBLISH & SHARE
              <div className="klajdfkls-ds pos-rel">
                <Icons iconNumber={42} />
              </div>
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62} />
        </div>
      </div>
    </Fade>
  );
};

export default CheckForm