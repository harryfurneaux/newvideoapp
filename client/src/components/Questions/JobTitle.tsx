import React, { useState } from "react";
import Icons from "../icons";
import { useAuth } from "../../hooks/useAuth";

const JobTitle = ({ setMainScreen, setShowScreen, showMessage, jobData, setJobView }: { setMainScreen: any, setShowScreen: any, showMessage: boolean, jobData: any, setJobView: any }) => {
  const [selected, setselected] = useState(0);
  const { setJobViewContext } = useAuth()

  const getTimeDifference = (created_at: any) => {
    const currentDate: any = new Date();
    const postedDate: any = new Date(created_at);
    const timeDifference = currentDate - postedDate

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) {
      const remainingDays = days % 30;
      return `posted ${months} ${months === 1 ? 'month' : 'months'} & ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'} ago`;
    } else if (days > 0) {
      const remainingHours = hours % 24;
      return `posted ${days} ${days === 1 ? 'day' : 'days'} & ${remainingHours} ${remainingHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (hours > 0) {
      const remainingMinutes = minutes % 60;
      return `posted ${hours} ${hours === 1 ? 'hour' : 'hours'} & ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return "posted less than an hour ago";
    }
    // if (months > 0) {
    //   return `posted ${months} ${months === 1 ? 'month' : 'months'} & ${days} ago`;
    // }

    // else if (days < 1) {
    //   return "posted today"
    // } else {
    //   return `posted ${days} ${days === 1 ? 'day' : 'days'} & ${hours} ago`;
    // }
  };

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
            <h5>{jobData?.job_title || ''}</h5>
          </div>
          <div className="kjdlfksd-sdmks">
            <div className="kjdlfksd-sdmks">
              <Icons iconNumber={33} />
              <h6>{jobData?.job_recruiter || jobData?.interviewer?.company_name || ''}</h6>
            </div>
            <div className="kjdlfksd-sdmks location">
              <Icons iconNumber={34} />
              <h6>{jobData?.interviewer?.location || ''}</h6>
              <h4>{getTimeDifference(jobData.createdAt)}</h4>
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