import React, { useState } from "react";
import Icons from "../../components/icons";

const SignInForm = ({ setshowScreen, className = '' }: { setshowScreen: any, className?: string }) => {
  const [isHoverOrActive, setisHoverOrActive] = React.useState(false);

  return (
    <div className={`kjjfds-janwkea ${className}`}>
      <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
      <div className="jhjij-sanwe">
        <h3>Sign in</h3>
        <div className="socialButtonsDiv">
          <button className="btn">
            <Icons iconNumber={3} />
            Log in with Facebook
          </button>
          <button className="btn">
            <Icons iconNumber={4} />
            Log in with Google
          </button>
          <button className="btn">
            <Icons iconNumber={5} />
            Log in with LinkedIn
          </button>
        </div>
        <div className="jkdslafj-asdemk mt-1">
          <div className="jkdsfs-dajem"></div>
          <h5 className="fw-light mt-1 mx-2">or</h5>
          <div className="jkdsfs-dajem"></div>
        </div>

        <div className="socialButtonsDiv mt-2">
          <button className="btn" onClick={() => {
            setshowScreen(4)
          }}>
            <Icons iconNumber={90} />
            Login in with Email
          </button>
        </div>
        <div className="jdaskfjnas-ajaied njskakd-kawmed px-1">
          <div className="ansks-adn">
            <button
              onClick={() => {
                setshowScreen(1);
              }} className="no-shadow fw-bold">Create Account</button>
          </div>
          <div className="ansks-adn">
            <button
              onClick={() => {
                setshowScreen(5);
              }} className="no-shadow fw-light">Forgot Password?</button>
          </div>
        </div>
        <div className="continueBtnDiv">
          <button
            onClick={() => {
              setshowScreen(1);
            }} className="btn kjlsjadm-kdmsd">
            CONTINUE
            <Icons iconNumber={77} />
          </button>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={64} />
      </div>
    </div >
  );
};

export default SignInForm;