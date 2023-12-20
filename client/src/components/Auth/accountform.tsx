import React, { useState } from "react";
import Icons from "../../components/icons";
import { useMediaQuery } from 'react-responsive'

const SignInForm = ({ setshowScreen, className = '', handleFormChange }: { setshowScreen: any, className?: string, handleFormChange: any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [isAgree, setisAgree] = useState(true);
  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} ${className}`}>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""}`}>
        <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Create Account</h3>
        <h4>Password must be at least 8 characters</h4>

        <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
          <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={10} />
              <input placeholder="Full Name" name="name" onChange={handleFormChange} />
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={10} />
              <input placeholder="Email" name="email" onChange={handleFormChange} />
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={9} />
              <input type="password" name="password" placeholder="Password" onChange={handleFormChange} />
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={9} />
              <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleFormChange} />
            </div>
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