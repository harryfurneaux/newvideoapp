import { useState, useEffect } from "react";
import Icons from "../icons";
import CheckForm from "./CheckForm";
import Question from "./Questions";
//@ts-ignore
import { Zoom } from "react-awesome-reveal";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import authConfig from '../../configs/auth'

const CreateForm = ({
  setShowScreen,
  showScreen,
  setJobView
}: {
  setShowScreen: any;
  showScreen: number;
  setJobView: any;
}) => {
  const { addQuestion, user } = useAuth()
  const [valuec, setValuechange] = useState('');
  const [selected, setselected] = useState(0);
  const [questionIds, setQuestionsIds] = useState<any>([])
  const [newQuestion, setNewQuestion] = useState({
    "question": '',
    "time_duration": 30,
    "user_id": user?.id
  })
  const [questions, setQuestions] = useState<any>()
  const [job, setjob] = useState({
    questions: questionIds,
    job_title: "",
    interviewer: user?.id
  })
  const [newJob, setNewJob] = useState<any>();

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    if (newJob?._id) {
      setShowScreen(5)
    }
  }, [newJob])

  const getQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.addQuestion}${user?.id ? `?user_Id=${user?.id}` : ''}`)
      .then(async response => {
        setQuestions(response.data)
      })
      .catch(console.error)
  }

  const addJob = (params: any) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}${authConfig.addJobEndPoint}`, params)
      .then(async response => {
        setJobView(response.data);
        setNewJob(response.data);
      })
      .catch(err => {
      })
  }

  useEffect(() => {
    if (showScreen == 3) {
      $(".kdnklms-awendwd").css("z-index", -1);
    } else {
      $(".kdnklms-awendwd").css("z-index", 1000);
    }

    try {
      // Check if the input field is in focus and set the arrowBtn fill - opacity to 1 if it is
      document.getElementById("questionInput")!.addEventListener("focus", () => {
        document.getElementById("arrowBtn")!.style.opacity = "1";
        document.getElementById("arrowBtn")!.style.backgroundColor = "#ADB8FA";

        document.getElementById("questionInput")!.style.backgroundColor = "#fff";
        document.getElementById("questionInput")!.style.opacity = "1.0";
      });

      document.getElementById("questionInput")!.addEventListener("focusout", () => {
        document.getElementById("arrowBtn")!.style.opacity = "0.5";
        document.getElementById("arrowBtn")!.style.backgroundColor = "#ADB8FA";

        document.getElementById("questionInput")!.style.backgroundColor = "#EFF1FFD9";
        document.getElementById("questionInput")!.style.opacity = "0.85";
      });
    } catch (error) {

    }
  }, [showScreen]);

  const handleQuestionChange = (e: any) => {
    const { name, value } = e.target;

    setNewQuestion({
      ...newQuestion,
      [name]: value,
    });
  };

  const handleJobData = (e: any) => {
    const { name, value } = e.target;

    setjob({
      ...job,
      [name]: value,
    });
  }

  return (
    // <Fade direction="left" big>
    <div className="kjkndask-ankdnwd">
      <div
        className={`leftSideHeader kjsfdkl-adsj ${showScreen >= 3 ? "w-100" : ""
          }`}
      >
        <div
          onClick={() => {
            if (showScreen == 1) {
              setShowScreen(0);
            } else if (showScreen == 2) {
              setShowScreen(1);
            } else if (showScreen == 3) {
              setShowScreen(2);
            } else if (showScreen == 4) {
              setShowScreen(3);
            } else if (showScreen == 5) {
              setShowScreen(3);
            } else if (showScreen == 6) {
              setShowScreen(5);
            } else if (showScreen == 7) {
              setShowScreen(6);
            }
          }}
          className="backButtonDiv"
        >
          <button className="hkjndankad-dnsd">
            <Icons iconNumber={29} />
          </button>
          <h5 className="mksaldkamaw-jdwa">Back</h5>
        </div>
        {showScreen == 3 ? (
          <button
            onClick={() => {
              setShowScreen(4);
            }}
            className="kjlma0o-dwa jkksjdf-awe"
          >
            <Icons iconNumber={41} />
            Add Question{" "}
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={`kjdfkksd-aweinmd hkasjfdlmf-dsfsd ${showScreen == 3 ? "kdjsf-awejdn" : showScreen == 5 ? "screen-5" : ""}`} >
        <div className="kjdsfms-awddw2">
          <Icons iconNumber={36} />
          <Icons iconNumber={showScreen >= 2 ? 36 : 37} />
          <Icons iconNumber={showScreen >= 3 ? 36 : 37} />
          <Icons iconNumber={showScreen == 5 ? 36 : showScreen == 3 || 4 ? 37 : 36} />
        </div>
        <div className="kjdfsajs0edjawe-232">
          <h4>
            {showScreen == 1
              ? "What's the Position?"
              : showScreen == 2
                ? "Who's Asking?"
                : showScreen == 3
                  ? "Which Questions?"
                  : showScreen == 4
                    ? "What’s the Question?"
                    : showScreen == 5
                      ? "All Good?"
                      : "What’s it About?"}
          </h4>
          <h5>
            {showScreen == 1
              ? "ENTER JOB TITLE"
              : showScreen == 2
                ? "ENTER RECRUITER NAME"
                : showScreen == 3
                  ? "SELECT 3 QUESTIONS YOU’D LIKE TO ASK"
                  : showScreen == 4
                    ? "ENTER QUESTION"
                    : showScreen == 5
                      ? "CHECK BEFORE PUBLISHING"
                      : "ENTER ASKER SUBJECT"}
          </h5>
        </div>
        {showScreen == 3 ? (
          <Zoom>
            <div className="kjdaflj-adjkwmd">
              {questions?.map((data: any, index: number,) => (
                <Question key={index} setselected={setselected} selected={selected} questions={data} questionIds={questionIds} setQuestionIds={setQuestionsIds} />
              ))}
            </div>
            <div className="pos-rel">
              {selected >= 3 ? <button onClick={() => {
                const jobFinalData = { ...job }
                jobFinalData.questions = questionIds;
                addJob(jobFinalData)
              }} className="kjdflj0-jsads">
                CONTINUE
                <Icons iconNumber={85} />
              </button> : <button className="hkjdsf-dsjfin fw-light">
                <span className="fs-6">{selected}</span> OF <span className="fs-6">3</span> QUESTIONS SELECTED
              </button>}
            </div>
          </Zoom>
        ) : showScreen == 5 ? (
          <>
            <CheckForm showScreen={showScreen} setShowScreen={setShowScreen} questionIds={questionIds} questions={questions} newJob={newJob} />
          </>
        ) : (
          <div className="sfjkdfjsd-dsnaf">
            <div className={`djsfisdmo-sfmef ${valuec.length > 5 ? "ijfako-asdm" : ""}`}>
              {

                showScreen == 1 ? <>

                  <input id="questionInput" placeholder="e.g Bar Staff Position Available" name='job_title' className="ojdfkak-ksmd" type="text" onChange={(e) => {
                    handleJobData(e)
                  }} />
                  <button id="arrowBtn" className={`no-sh arrowBtn ${valuec.length > 5 ? "ijfako-asdm" : ""}`} onClick={() => {
                    // if (showScreen == 1) 
                    setShowScreen(2);
                    // if (showScreen == 2) setShowScreen(3);
                    // if (showScreen == 4) setShowScreen(3);
                  }}
                  >
                    <Icons iconNumber={38} />

                  </button>
                </>
                  : showScreen == 2 ?
                    <>
                      <input id="questionInput" value={valuec} placeholder="e.g Recruitment Agency" className="ojdfkak-ksmd" type="text" onChange={(e) => {
                        setValuechange(e.target.value)
                      }} />
                      <button id="arrowBtn" className={`no-sh arrowBtn ${valuec.length > 5 ? "ijfako-asdm" : ""}`} onClick={() => {
                        // if (showScreen == 1) 
                        setShowScreen(3);
                        // if (showScreen == 2) setShowScreen(3);
                        // if (showScreen == 4) setShowScreen(3);
                      }}
                      >
                        <Icons iconNumber={38} />

                      </button>

                    </>

                    :
                    <>
                      <input id="questionInput" placeholder="e.g What’s your 5 year plan?" name="question" className="ojdfkak-ksmd" type="text" onChange={(e) => {
                        handleQuestionChange(e)
                      }} />
                      <button id="arrowBtn" className={`no-sh arrowBtn ${valuec.length > 5 ? "ijfako-asdm" : ""}`} onClick={() => {
                        // if (showScreen == 1) 

                        addQuestion(newQuestion).then((res) => {

                          getQuestions()
                          setShowScreen(3)
                        })


                        // if (showScreen == 2) setShowScreen(3);
                        // if (showScreen == 4) setShowScreen(3);
                      }}
                      >
                        <Icons iconNumber={38} />

                      </button>
                    </>
              }
              {/* <input
                placeholder={showScreen == 1
                  ? "e.g Bar Staff Position Available "
                  : showScreen == 2
                    ? "e.g Recruitment Agency"
                    : "e.g What’s your 5 year plan?"
                }
                onChange={(e) => {
                  setValuechange(e.target.value)
                }}
                className="ojdfkak-ksmd"
                value={valuec}
                type="text"
                id="questionInput"
              /> */}
              {/* <button id="arrowBtn" className={`no-sh arrowBtn ${valuec.length > 5 ? "ijfako-asdm" : ""}`} onClick={() => {
                if (showScreen == 1) setShowScreen(2);
                if (showScreen == 2) setShowScreen(3);
                if (showScreen == 4) setShowScreen(3);
              }}>
                <Icons iconNumber={38} />
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div >
    // </Fade>
  );
};

export default CreateForm