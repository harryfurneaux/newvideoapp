import { useMediaQuery } from "react-responsive";
import RightButtons from "../RightButtons";
import Icons from "../icons";
//@ts-ignore
import Flip from 'react-reveal/Flip'
import CheckFormBox from "../CheckBoxForm";

const ViewForm = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1013px)' });

  return (
    <Flip right>
      <div className="jkljfkld-jdskfe">
        <div className="kjjfds-janwkea1">
          <div className="kafms-kfsamfer">
            <div className="skfalk-smdsefds">
              <div className="kdjnfakdsfm-jsamre">
                <img src={require("../../images/i5.png")} />
              </div>
              <div className="kjdflkads-mdskf">
                <h3>Job Title</h3>
                <h5>
                  <Icons iconNumber={16} /> Company Name
                </h5>
                <h6>
                  <Icons iconNumber={17} /> Location
                </h6>
              </div>
            </div>
            <div className="njfk-amew">
              <CheckFormBox />
              <CheckFormBox />
              <CheckFormBox />
            </div>
            <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
              <div className="continueBtnDiv snasdj-sawdne">
                <button className="btn">
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
        <RightButtons hideMenu={isMobile ? true : false} />
      </div></Flip>
  );
};

export default ViewForm