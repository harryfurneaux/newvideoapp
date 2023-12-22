import React, { useState } from "react";
import Icons from "../../components/icons";
import { useMediaQuery } from 'react-responsive'
import { errorByKey } from "../../helper";

const SignInForm = ({ setshowScreen, className = '', handleFormChange, signUpFormErrors }: { setshowScreen: any, className?: string, handleFormChange: any, signUpFormErrors: any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [isAgree, setisAgree] = useState(true);
  
  const hasAnyError = () => {
    return errorByKey(signUpFormErrors, 'name') || errorByKey(signUpFormErrors, 'email') || errorByKey(signUpFormErrors, 'password') || 
    errorByKey(signUpFormErrors, 'confirm_password')
  };
  
  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} ${className}`}>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""}`} style={{ marginTop: hasAnyError() ? 10 : 50 }}>
        <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Create Account</h3>
        <h4>Password must be at least 8 characters</h4>

        <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
          <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'name') ? 'error-border' : ''}`}>
              <Icons iconNumber={10} />
              <input placeholder="Full Name" name="name" onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'name') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'name')}</p>
            ) : ''}
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'email') ? 'error-border' : ''}`}>
              <Icons iconNumber={10} />
              <input placeholder="Email" name="email" onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'email') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'email')}</p>
            ) : ''}
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'password') ? 'error-border' : ''}`}>
              <Icons iconNumber={9} />
              <input type="password" name="password" placeholder="Password" onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'password') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'password')}</p>
            ) : ''}
            <div className={`jksd-kosaeknae ${errorByKey(signUpFormErrors, 'confirm_password') ? 'error-border' : ''}`}>
              <Icons iconNumber={9} />
              <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleFormChange} />
            </div>
            {errorByKey(signUpFormErrors, 'confirm_password') ? (
              <p className="error-message">{errorByKey(signUpFormErrors, 'confirm_password')}</p>
            ) : ''}
          </div>
          <div className="jdaskfjnas-ajaied">
            <div onClick={() => {
              setisAgree(!isAgree)
            }} className="sandka-jwe">
              <Icons iconNumber={isTabletOrMobile ? 57 : isAgree ? 11 : 74} />
              <h5 className={`${isTabletOrMobile ? "jjlkajsd-awje" : ""}`}>I agree to the terms & conditions</h5>
            </div>
            <div className={`${isTabletOrMobile ? "jdsfknla-wnejnw" : ""}`}>
              <button onClick={() => {
                setshowScreen(0)
              }} className="no-shadow no-background">Log in</button>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`}>
            <button onClick={() => {
              setshowScreen(2)
            }} className={`btn`}>
              CONTINUE
              <div className="kdksa-ajwmd">
                <Icons iconNumber={7} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={isTabletOrMobile ? 64 : 62} />
      </div>
    </div>
  );
};

export default SignInForm;