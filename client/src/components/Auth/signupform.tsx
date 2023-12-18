import React, { useState } from "react";
import Icons from "../icons";

const SignUpForm = ({ setshowScreen, className = '' }: { setshowScreen: any, className?: string }) => {
  const [isAgree, setisAgree] = useState(false);
  const [birthClicked, setBirthClicked] = useState(false);

  return (
    <div className={`kjjfds-janwkea ${className}`}>
      <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
      <div className="jhjij-sanwe">
        <h3>Some final details...</h3>
        <h4 className="ksajdsd-sjad">
          If you don’t have a company, just leave it blank
        </h4>

        <div className="njskakd-kawmed">
          <div className="emailRowDiv sadhasdn-we">
            <div className="jksd-kosaeknae">
              <Icons iconNumber={58} />
              <input
                placeholder={birthClicked ? " DD   |    MM    |   YYYY" : " Birth Date"}
                onClick={() => setBirthClicked(true)}
                onBlur={() => setBirthClicked(false)}
              />
            </div>
            <div className="jksd-kosaeknae active-asdkjd">
              <Icons iconNumber={12} />
              <input placeholder="Location" />
              <div className="asjdssads">
                <Icons iconNumber={78} />
              </div>
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={13} />
              <input placeholder="Company" />
            </div>
          </div>
          <div className="jdaskfjnas-ajaied">
            <div onClick={() => {
              setisAgree(!isAgree)
            }} className={` sandka-jwe ansks-adn ${isAgree == true ? "asfajea0dwnmd" : ""}`}>
              <Icons iconNumber={isAgree ? 75 : 14} />
              <h5>Remember me</h5>
            </div>
            <div className="ansks-adn">
              <button onClick={() => {
                setshowScreen(0)
              }} className="no-shadow">Log in</button>
            </div>
          </div>
          <div className="continueBtnDiv snasdj-sawdne">
            <button
              onClick={() => {
                setshowScreen(4)
              }} className="btn kjlsjadm-kdmsd-2">
              COMPLETE SIGNUP
              <Icons iconNumber={94} />
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={64} />
      </div>
    </div>
  );
};

export default SignUpForm;