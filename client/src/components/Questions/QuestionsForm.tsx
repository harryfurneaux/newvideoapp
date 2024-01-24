import { useEffect, useState } from "react";
import JobTitle from "./JobTitle";
import axios from "axios";
import authConfig from "../../configs/auth";
import { useAuth } from "../../hooks/useAuth";
import { useFullscreen } from "../../hooks/useFullscreen";
import Icons from "../icons";
import { useParams } from "react-router";

const QuestionForm = ({
  setMainScreen,
  setShowScreen,
  setJobView,
  myQuestions,
}: {
  setMainScreen: any;
  setShowScreen: any;
  setJobView: any;
  myQuestions: any;
}) => {
  const [jobs, setJobs] = useState<any>(null);

  const { user, setJobViewContext, setShowLoading } = useAuth();
  const { fullscreen } = useFullscreen();

  const params = useParams();

  useEffect(() => {
    getJobs();
  }, [myQuestions]);

  const redirectToSharedJob = (_jobs: any) => {
    const { job_id } = params;
    if (_jobs?.length && job_id?.length) {
      const job = _jobs.find((j: any) => j._id === job_id);
      if (job) {
        setJobViewContext(job);
        setJobView(job);
        setShowScreen(7);
        setTimeout(() => {
          setMainScreen(3);
        }, 1000);
      }
    }
    window.history.pushState(null, "", "/");
  };

  const getJobs = () => {
    setShowLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getJobsEndpPoint}`)
      .then(async (response) => {
        setShowLoading(false);
        if (myQuestions) {
          const filtered = response?.data?.filter(
            (obj: any) => obj.interviewer._id == user?.id
          );
          setJobs(filtered);
          // redirectToSharedJob(filtered);
        } else {
          response.data.reverse();

          setJobs(response.data);
          // redirectToSharedJob(response.data);
        }
      })
      .catch((err) => {});
  };

  return (
    <div
      className={`leftSideContent ${
        myQuestions ? (jobs?.length ? "" : "no-question-prompt-div") : ""
      }`}
      style={
        fullscreen
          ? { maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }
          : {}
      }
    >
      {myQuestions ? (
        <>
          {jobs?.length ? (
            <div className="h-auto" style={{ display: "grid", gap: "6px" }}>
              {jobs?.map((data: any, index: any) => (
                <JobTitle
                  key={index}
                  setMainScreen={setMainScreen}
                  setShowScreen={setShowScreen}
                  showMessage={false}
                  jobData={data}
                  setJobView={setJobView}
                />
              ))}
            </div>
          ) : (
            <div className=" d-flex p-10 align-items-center  justify-content-around text-white small no-question-prompt">
              <Icons iconNumber={109} />
              <p>You haven't created any interviews yet!</p>
              {/* <Icons iconNumber={110} /> */}
              <span>&nbsp;</span>
            </div>
          )}
        </>
      ) : (
        <div className="h-auto" style={{ display: "grid", gap: "6px" }}>
          {jobs?.map((data: any, index: any) => (
            <JobTitle
              key={index}
              setMainScreen={setMainScreen}
              setShowScreen={setShowScreen}
              showMessage={false}
              jobData={data}
              setJobView={setJobView}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default QuestionForm;
