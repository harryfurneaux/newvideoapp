import { useEffect, useState } from "react";
import JobTitle from "./JobTitle";
import axios from "axios";
import authConfig from '../../configs/auth'
const QuestionForm = ({ setMainScreen, setShowScreen, setJobView }: { setMainScreen: any, setShowScreen: any, setJobView: any }) => {
  const [jobs, setJobs] = useState([])
  useEffect(() => { getJobs() }, [])
  const getJobs = () => {
    axios
      .get(`
http://localhost:4000${authConfig.getJobsEndpPoint}`)
      .then(async response => {

        setJobs(response.data)


      })

      .catch(err => {

      })


  }
  return (
    <div className="leftSideContent">
      {jobs.map((data, index) =>

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