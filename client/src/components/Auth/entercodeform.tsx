import { useState } from "react";
import Icons from "../icons";
//@ts-ignore
import Flip from "react-reveal/Flip";
import icon from "../../images/mail_circle.svg";

const EnterCodeForm = ({ setshowScreen }: { setshowScreen: any }) => {
  const [isAgree, setisAgree] = useState(false);

  return (
    <Flip right>
      <div className="kjjfds-janwkea">
        <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
        <div className="jhjij-sanwe jhjij-sanwe6">
          <img src={icon} className="mb-4" />
          <h3>Enter Code</h3>
          <h4 className="ksajdsd-sjad mt-2 px-5 lh-base">
            Please check the email address associated with your account for your Verfication code.
          </h4>

          <div className="njskakd-kawmed">
            <div className="emailRowDiv sadhasdn-we d-inline-flex flex-row">
              <div className="jknu-kosaember"><input /></div>
              <div className="jknu-kosaember"><input /></div>
              <div className="jknu-kosaember"><input /></div>
              <div className="jknu-kosaember"><input /></div>
              <div className="jknu-kosaember"><input /></div>
            </div>
            <div className="jdaskfjnas-ajaied mt-2 px-4">
              <div onClick={() => {
                setisAgree(!isAgree)
              }} className={` sandka-jwe ansks-adn ${isAgree == true ? "asfajea0dwnmd" : ""}`}>
                <h5>Didn't Receive a code?</h5>
              </div>
              <div className="ansks-adn">
                <button className="no-shadow">Resend Email</button>
              </div>
            </div>
            <div className="continueBtnDiv snasdj-sawdne">
              <button
                onClick={() => {
                  setshowScreen(7)
                }} className="btn kjlsjadm-kdmsd-2">
                RESET PASSWORD
                <Icons iconNumber={77} />
              </button>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64} />
        </div>
      </div>
    </Flip>
  );
};

export default EnterCodeForm;