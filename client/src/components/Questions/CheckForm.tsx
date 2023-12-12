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
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd">
        <div className="kafms-kfsamfer">
          <div>
            <img src={no_pic} />
            {/* <button className="kajfldsf no-shadow">
              <Icons iconNumber={86} />
            </button> */}
            <div className="kjdflkads-mdskf">
              <h3 className="mb-1">Job Title</h3>
              <h5>
                <Icons iconNumber={16} /> Company Name
              </h5>
              <h6>
                <Icons iconNumber={17} /> Location
              </h6>
            </div>
          </div>
          <div className="njfk-amew">
            <CheckFormBox />
            <CheckFormBox />
            <CheckFormBox />
          </div>
          <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
            <div className="continueBtnDiv snasdj-sawdne-1">
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
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62} />
        </div>
      </div>
    </Fade>
  );
};

export default CheckForm