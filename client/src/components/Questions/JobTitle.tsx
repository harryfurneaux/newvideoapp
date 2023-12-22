import React, { useState } from "react";
import Icons from "../icons";
import { useAuth } from "../../hooks/useAuth";

const JobTitle = ({ setMainScreen, setShowScreen, showMessage, jobData, setJobView }: { setMainScreen: any, setShowScreen: any, showMessage: boolean, jobData: any, setJobView: any }) => {
  const [selected, setselected] = useState(0);
  const { setJobViewContext } = useAuth()

  return (
    <div className="jobPositionDiv" onClick={() => {
      setJobViewContext(jobData)
      setJobView(jobData)
      setShowScreen(7)
    }}>
      <div className="kjsldk-jdansd">
        <Icons iconNumber={95} />
        <div className="kjnkodsa-jaddd">
          <div>
            <h5>{jobData.job_title}</h5>
          </div>
          <div className="kjdlfksd-sdmks">
            <div className="kjdlfksd-sdmks">
              <Icons iconNumber={33} />
              <h6>{jobData.interviewer.company_name}</h6>
            </div>
            <div className="kjdlfksd-sdmks location">
              <Icons iconNumber={34} />
              <h6>{jobData.interviewer.location}</h6>
              <h4>Posted 12 days ago</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selected > 0 ? (
          <button onMouseLeave={() => setselected(0)} className={`jklsjdnsa-jdw ${selected == 1 ? "a82" : selected == 2 ? "a83" : "a84"}`}>
            <Icons iconNumber={selected == 1 ? 82 : selected == 2 ? 83 : 84} />
            {selected == 1 ? "Messages" : selected == 2 ? "Answers" : "Questions"}
          </button>
        ) : (
          <div>
            {/* <button onMouseEnter={() => {
              setselected(3)
            }} className="njkajd-jendw no-shadow sjiadljsa-asdj">
              <Icons iconNumber={79} />

            </button>
            <button onMouseEnter={() => {
              setselected(2)
            }} className="njkajd-jendw no-shadow sjiadljsa-asdj">
              <Icons iconNumber={80} />

            </button>
            <button onMouseEnter={() => {
              setselected(1)
            }} className="njkajd-jendw no-shadow sjiadljsa-asdj">
              <Icons iconNumber={81} />

            </button> */}
            <button className="pill-12 rounded-pill d-flex justify-content-center align-items-center gap-1" onClick={() => {
              setMainScreen(2);
            }}>
              <Icons iconNumber={92} />12
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobTitle