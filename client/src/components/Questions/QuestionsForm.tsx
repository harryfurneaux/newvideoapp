import { useEffect, useState } from "react";
import JobTitle from "./JobTitle";
import axios from "axios";
import authConfig from '../../configs/auth'
import { useAuth } from "../../hooks/useAuth";

const QuestionForm = ({ setMainScreen, setShowScreen, setJobView, myQuestions }: { setMainScreen: any, setShowScreen: any, setJobView: any, myQuestions: any }) => {
  const [jobs, setJobs] = useState([])
  const { user } = useAuth()
  useEffect(() => { getJobs() }, [myQuestions])
  const getJobs = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getJobsEndpPoint}`)
      .then(async response => {

        if (myQuestions) {

          const filtered = response?.data?.filter((obj: any) => obj.interviewer._id == user?.id)
          console.log("filter jobs", filtered)
          setJobs(filtered)

        } else {
          setJobs(response.data)
        }
      })

      .catch(err => {

      })


  }
  return (
    <div className="leftSideContent">
      {jobs?.map((data, index) =>

        <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} jobData={data} setJobView={setJobView} />
      )}

      {/* <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={true} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} />
      <JobTitle setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} /> */}
    </div>
  );
};
export default QuestionForm