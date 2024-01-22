import { Dispatch, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Auth from "./screens/auth";
import Question from "./screens/questions";
import Answers from "./screens/answers";
import Start from "./screens/start";
import Messages from "./screens/messages";
import DemoScreen from "./screens/demo";
import SharedJobScreen from "./screens/sharedJobScreen";
import { useShared } from "./hooks/useShare";
import { useAuth } from "./hooks/useAuth";

const MainLayout = ({
  setMainScreen,
  mainScreen,
}: {
  setMainScreen: Dispatch<number>;
  mainScreen: number;
}) => {
  const [jobViewContext, setJobViewContext] = useState();
  const [chatUser, setChatUser] = useState();
  const [watchAns, setWatchAns] = useState(false);
  const [showSharedNotify, setShowNotify] = useState(false);
  const [fromShareScreen, setFromShareScreen] = useState(false);

  const params = useParams();
  const { setShared, setSharedJobData } = useShared();
  const { showLoading, setShowLoading } = useAuth();

  useEffect(() => {
    const { job_id } = params;
    if (job_id) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/interviewer/${job_id}`)
        .then((res) => {
          console.log("appts job api", res.data);
          //   setShowLoading(false);
          window.localStorage.setItem("shared", "true");
          setJobViewContext(res.data);
          setShowNotify(true);
          setShared(true);
          setMainScreen(8);
        });
    }
  }, [params]);

  return (
    <>
      {showLoading && <div className="top-loading-bar" />}
      {mainScreen === 0 ? (
        <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
      ) : mainScreen === 1 ? (
        <Question
          mainScreen={mainScreen}
          setMainScreen={setMainScreen}
          jobViewContext={jobViewContext}
          setJobViewContext={setJobViewContext}
          setChatUser={setChatUser}
          setWatchAns={setWatchAns}
          showSharedNotify={showSharedNotify}
          setShowNotify={setShowNotify}
        />
      ) : mainScreen === 2 ? (
        <Answers
          mainScreen={mainScreen}
          setMainScreen={setMainScreen}
          setChatUser={setChatUser}
          jobViewContext={jobViewContext}
          watchAns={watchAns}
        />
      ) : mainScreen === 3 ? (
        <Start
          fromShareScreen={fromShareScreen}
          setMainScreen={setMainScreen}
          jobViewContext={jobViewContext}
          setJobViewContext={setJobViewContext}
          setFromShareScreen={setFromShareScreen}
        />
      ) : mainScreen === 4 ? (
        <Messages
          mainScreen={mainScreen}
          setMainScreen={setMainScreen}
          chatUser={chatUser}
        />
      ) : mainScreen === 7 ? (
        <DemoScreen mainScreen={mainScreen} setMainScreen={setMainScreen} />
      ) : // : null
      mainScreen === 8 ? (
        <SharedJobScreen
          setFromShareScreen={setFromShareScreen}
          setMainScreen={setMainScreen}
          setJobViewContext={setJobViewContext}
          jobViewContext={jobViewContext}
        />
      ) : (
        <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
      )}
    </>
  );
};

export default MainLayout;
