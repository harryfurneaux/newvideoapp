import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";
import CheckFormBox from "../CheckBoxForm";
import no_pic from "../../images/no-pic.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import authConfig from '../../configs/auth'

const CheckForm = ({
  setShowScreen,
  showScreen,
  questionIds,
  questions,
  newJob
}: {
  setShowScreen: any;
  showScreen: number;
  questionIds: any;
  questions: any;
  newJob: any;
}) => {
  const [interviewer, setInterviewer] = useState<any>(null);
  
  useEffect(() => {
    if(newJob?._id) {
      getInterviewerDetails();
    }
  }, [newJob]);

  const getInterviewerDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getInterviewer(newJob._id)}`)
      .then(async response => {
        setInterviewer(response.data)
      })
      .catch(console.error)
  }
  
  return (
    <Fade>
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd white-form height-none">
        <div className="check-form">
          <div className="d-flex">
            <img src={no_pic} />
            <div className="kjdflkads-mdskf check-form-heading">
              <h3>{newJob?.job_title || 'Job Title'}</h3>
              <h5><Icons iconNumber={16} /> {interviewer?.job_recruiter || interviewer?.interviewer?.company_name || 'Company Name'}</h5>
              <h6><Icons iconNumber={17} /> {interviewer?.interviewer?.location || 'Location'}</h6>
            </div>
          </div>
          <div className="check-form-body">
            {questions?.length ? (
              questions.filter((q: any) => questionIds.find((qi: any) => qi === q._id)).map((q: any, idx: number) => {
                return (
                  <CheckFormBox key={idx} questions={q} forcedActive={true} />
                );
              })
            ) : null}
          </div>
          <div className="check-form-btn-div snasdj-sawdne-1">
            <button
              className="btn lkdafhkls0d"
              onClick={() => {
                setShowScreen(6);
              }}
            >
              PUBLISH & SHARE
              <div className="klajdfkls-ds pos-rel">
                <Icons iconNumber={42} />
              </div>
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62} />
        </div>
      </div>
    </Fade>
  );
};

export default CheckForm