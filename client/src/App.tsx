import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./screens/auth";
import { useEffect, useMemo, useState } from "react";
import Question from "./screens/questions";
import Answers from "./screens/answers";
import Start from './screens/start';
import Messages from './screens/messages'
import DemoScreen from "./screens/demo";
import { AuthProvider } from "./context/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FullscreenProvider } from "./context/Fullscreen";
import { useAuth } from "./hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Notify from "./components/Notify";
function App() {
  const [mainScreen, setMainScreen] = useState(7);
  const [jobViewContext, setJobViewContext] = useState()
  const [watchAns, setWatchAns] = useState(false)
  const [chatUser, setChatUser] = useState()
  const [show, setShow] = useState(false)

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <FullscreenProvider>
        <AuthProvider setMainScreen={setMainScreen}>
          {
            mainScreen == 0 ? <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
              : mainScreen == 1 ? <Question mainScreen={mainScreen} setMainScreen={setMainScreen} jobViewContext={jobViewContext} setJobViewContext={setJobViewContext} setChatUser={setChatUser} setWatchAns={setWatchAns} />
                : mainScreen == 2 ? <Answers mainScreen={mainScreen} setMainScreen={setMainScreen} setChatUser={setChatUser} jobViewContext={jobViewContext} watchAns={watchAns} />
                  : mainScreen == 3 ? <Start setMainScreen={setMainScreen} jobViewContext={jobViewContext} />
                    : mainScreen == 4 ? <Messages mainScreen={mainScreen} setMainScreen={setMainScreen} chatUser={chatUser} />
                      : mainScreen == 7 ? <DemoScreen setMainScreen={setMainScreen} />
                        : <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
          }
        </AuthProvider>
      </FullscreenProvider>
      <Notify show={show} handleClose={() => setShow(false)} title="Payment Method Added Successfully" />
    </GoogleOAuthProvider>
  );
}

export default App;