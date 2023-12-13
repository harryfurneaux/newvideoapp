import { useMediaQuery } from "react-responsive";

//@ts-ignore
import { Flip } from "react-awesome-reveal";

import Icons from "../../components/icons";
import icon from "../../images/reset_password.svg";

const ForgotPwdForm = ({ setshowScreen }: { setshowScreen: any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Flip direction="vertical">
      <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"}`}>
        <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : "jhjij-sanwe4"}`}>
          <img src={icon} className="mb-4" />
          <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Forgot Password?</h3>
          <h4 className="mt-2 px-5 lh-base">Enter your Email address to retrieve a code to reset your password.</h4>

          <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
            <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
              <div className="jksd-kosaeknae">
                <Icons iconNumber={90} />
                <input placeholder="Email" />
              </div>
            </div>
            <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`}>
              <button onClick={() => {
                setshowScreen(6)
              }} className={`btn`}>
                SEND CODE
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

export default ForgotPwdForm;