import CheckFormBox from "../CheckBoxForm";
import Icons from "../icons";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const BeginForm = ({ setScreen, jobViewContext }: { setScreen: any, jobViewContext: any }) => {






  return (
    <div className="kjjfds-janwkea1 kjjfds-janwkea2 white-form height-none">
      <div className="kafms-kfsamfer">
        <div className="skfalk-smdsefds">
          <div className="kdjnfakdsfm-jsamre">
            <img src={require("../../images/i5.png")} />
          </div>
          <div className="kjdflkads-mdskf">
            <h3>{jobViewContext?.job_title}</h3>
            <h5>
              <Icons iconNumber={16} /> {jobViewContext?.interviewer.company_name}
            </h5>
            <h6>
              <Icons iconNumber={17} /> {jobViewContext?.interviewer.location}
            </h6>
          </div>
        </div>
        <div className="njfk-amew">
          {jobViewContext?.questions?.map((data: any, index: any) => (
            <CheckFormBox questions={data} />
          ))}
          {/* <CheckFormBox questions={''} />
          <CheckFormBox questions={''} />
          <CheckFormBox questions={''} /> */}
        </div>
        <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
          <div className="continueBtnDiv snasdj-sawdne">
            <button className="btn" onClick={() => {
              setScreen(1)
            }}>
              Begin
              <div className="kdksa-ajwmd ">
                <Icons iconNumber={7} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={62} />
      </div>
    </div>
  );
};

export default BeginForm;