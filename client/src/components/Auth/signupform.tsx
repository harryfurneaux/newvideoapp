import React, { useState } from "react";
import Icons from "../icons";
import { useAuth } from "../../hooks/useAuth";
import { errorByKey } from "../../helper";

const SignUpForm = ({ setshowScreen, className = '', signUpFormData, handleFormChange, signUpFormErrors, setSignUpFormErrors, setErrorMessage }: { setshowScreen: any, className?: string, signUpFormData: any, handleFormChange: any, signUpFormErrors: any, setSignUpFormErrors: any, setErrorMessage: any }) => {
  const [isAgree, setisAgree] = useState(false);
  const [birthClicked, setBirthClicked] = useState(false);
  const { signup } = useAuth()

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
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'birth_date') ? 'error-border' : ''}`}>
              <Icons iconNumber={58} />
              <input
                placeholder={birthClicked ? " DD   |    MM    |   YYYY" : " Birth Date"}
                name='birth_date'
                onClick={() => setBirthClicked(true)}
                onBlur={() => setBirthClicked(false)}
                onChange={handleFormChange}
              />
            </div>
            {errorByKey(signUpFormErrors, 'birth_date') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'birth_date')}</p>
            ) : ''}
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'location') ? 'error-border' : ''}`}>
              <Icons iconNumber={12} />
              <input placeholder="Location" name='location' onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'location') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'location')}</p>
            ) : ''}
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'company_name') ? 'error-border' : ''}`}>
              <Icons iconNumber={13} />
              <input placeholder="Company" name='company_name' onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'company_name') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'company_name')}</p>
            ) : ''}
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
                signup(signUpFormData)
                .then((res) => {
                  setshowScreen(4)
                })
                .catch((err) => {
                  if(err?.response?.data?.message?.length) {
                    if(Array.isArray(err.response.data.message)) {
                      setSignUpFormErrors(err.response.data.message);
                    } else {
                      setErrorMessage(err.response.data.message);
                    }
                    setshowScreen(1)
                  }
                })

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