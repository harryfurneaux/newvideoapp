import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icons from "../../components/icons";

const EmailLoginForm = ({ setshowScreen, className = '' }: { setshowScreen: any, className?: string }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [isAgree, setisAgree] = useState(true);

  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} white-form ${className}`}>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""} email-login-form`}>
        <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Enter Login Details</h3>
        <h4>Enter your email and password for this account.</h4>

        <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
          <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={90} />
              <input placeholder="Email" />
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={9} />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="jdaskfjnas-ajaied">
            <div onClick={() => {
              setisAgree(!isAgree)
            }} className="sandka-jwe">
              <button onClick={() => {
                setshowScreen(1)
              }} className={`${isTabletOrMobile ? "jjlkajsd-awje" : ""}`}>Create Account</button>
            </div>
            <div className={`${isTabletOrMobile ? "jdsfknla-wnejnw" : ""}`}>
              <button onClick={() => {
                setshowScreen(5)
              }} className="no-shadow">Forgot Password?</button>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`}>
            <button onClick={() => {
              setshowScreen(5)
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

export default EmailLoginForm;