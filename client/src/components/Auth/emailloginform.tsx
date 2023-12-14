import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icons from "../../components/icons";
//@ts-ignore
import Flip from "react-reveal/Flip";

const EmailLoginForm = ({ setshowScreen }: { setshowScreen: any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [isAgree, setisAgree] = useState(true);

  return (
    <Flip bottom>
      <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} white-form`}>
        <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : "jhjij-sanwe3"}`}>
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
                <button className={`${isTabletOrMobile ? "jjlkajsd-awje" : ""}`}>Create Account</button>
              </div>
              <div className={`${isTabletOrMobile ? "jdsfknla-wnejnw" : ""}`}>
                <button className="no-shadow">Forgot Password?</button>
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
    </Flip>
  );
};

export default EmailLoginForm;