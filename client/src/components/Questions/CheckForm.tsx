import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";
import CheckFormBox from "../CheckBoxForm";
import no_pic from "../../images/no-pic.svg";
import { useState } from "react";
import axios from "axios";
import authConfig from "../../configs/auth";
import { useAuth } from "../../hooks/useAuth";

const CheckForm = ({
  setShowScreen,
  showScreen,
  questionIds,
  questions,
  newJob,
  setJobView,
}: {
  setShowScreen: any;
  showScreen: number;
  questionIds: any;
  questions: any;
  newJob: any;
  setJobView: any;
}) => {
  const [interviewer, setInterviewer] = useState<any>(null);
  const { user, setShowLoading } = useAuth();
  // useEffect(() => {
  //   console.log("check form", newJob)
  //   if (newJob?.interviewer) {
  //     getInterviewerDetails();
  //   }
  // }, [newJob]);

  // const getInterviewerDetails = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getInterviewer(newJob?.interviewer)}`)
  //     .then(async response => {
  //       setInterviewer(response.data)
  //     })
  //     .catch(console.error)
  // }
  const addJob = (params: any) => {
    setShowLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}${authConfig.addJobEndPoint}`,
        params
      )
      .then(async (response) => {
        setShowLoading(false);
        setJobView(response.data);
        setShowScreen(6);
      })
      .catch((err) => {});
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd white-form height-none">
        <div className="check-form">
          <div className="d-flex">
            <img src={no_pic} />
            <div className="kjdflkads-mdskf check-form-heading">
              <h3>{newJob?.job_title || "Job Title"}</h3>
              {/* <h5><Icons iconNumber={16} /> {interviewer?.job_recruiter || interviewer?.interviewer?.company_name || 'Company Name'}</h5>
                <h6><Icons iconNumber={17} /> {interviewer?.interviewer?.location || 'Location'}</h6> */}
              <h5 className="d-flex align-items-center">
                <Icons iconNumber={16} /> {user?.company_name || "Company Name"}
              </h5>
              <h6 className="d-flex align-items-center">
                <Icons iconNumber={17} /> {user?.location || "Location"}
              </h6>
            </div>
          </div>
          <div className="check-form-body">
            {questions?.length
              ? questions
                  .filter((q: any) =>
                    questionIds.find((qi: any) => qi === q._id)
                  )
                  .map((q: any, idx: number) => {
                    return (
                      <CheckFormBox
                        key={idx}
                        questions={q}
                        forcedActive={false}
                      />
                    );
                  })
              : null}
          </div>
          <div className="check-form-btn-div snasdj-sawdne-1">
            <button
              className="btn lkdafhkls0d"
              onClick={() => {
                addJob(newJob);
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
    </div>
  );
};

export default CheckForm;
