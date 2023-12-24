import { useMediaQuery } from "react-responsive";
import RightButtons from "../RightButtons";
import Icons from "../icons";
//@ts-ignore
import { Flip } from "react-awesome-reveal"
import CheckFormBox from "../CheckBoxForm";

const ViewForm = ({ setMainScreen, setShowScreen, setPastScreen, jobView, setChatUser }: { setMainScreen: any, setShowScreen: any, setPastScreen: any, jobView: any, setChatUser: any }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1013px)' });

  return (
    <Flip direction="horizontal">
      <div className="jkljfkld-jdskfe">
        <div className="kjjfds-janwkea1 white-form">
          <div className="kafms-kfsamfer">
            <div className="skfalk-smdsefds">
              <div className="kdjnfakdsfm-jsamre">
                <img src={require("../../images/i5.png")} />
              </div>
              <div className="kjdflkads-mdskf">
                <h3>{jobView?.job_title || ''}</h3>
                <h5>
                  <Icons iconNumber={16} /> {jobView?.interviewer?.company_name || ''}
                </h5>
                <h6>
                  <Icons iconNumber={17} />{jobView?.interviewer?.location || ''}
                </h6>
              </div>
            </div>
            <div className="njfk-amew">
              {jobView?.questions?.map((data: any, index: any) => (
                <CheckFormBox questions={data} />
              ))}
              {/* <CheckFormBox /> */}
              {/* <CheckFormBox />
              <CheckFormBox /> */}
            </div>
            <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
              <div className="continueBtnDiv snasdj-sawdne">
                <button className="btn" onClick={() => setMainScreen(2)}>
                  WATCH ANSWERS
                  <div className="kdksa-ajwmd ">
                    <Icons iconNumber={93} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="ldkjfal0-fdsnfe">
            <Icons iconNumber={62} />
          </div>
        </div>
        <RightButtons setMainScreen={setMainScreen} setShowScreen={setShowScreen} setPastScreen={setPastScreen} jobView={jobView} setChatUser={setChatUser} hideMenu={isMobile ? true : false} />
      </div></Flip>
  );
};

export default ViewForm