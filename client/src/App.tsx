import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./screens/auth";
import { useState } from "react";
import Question from "./screens/questions";
import Answers from "./screens/answers";
import Start from './screens/start';
import Messages from './screens/messages'
import { AuthProvider } from "./context/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FullscreenProvider } from "./context/Fullscreen";

function App() {
  const [mainScreen, setMainScreen] = useState(0);
  const [jobViewContext, setJobViewContext] = useState()
  const [watchAns, setWatchAns] = useState(false)
  const [chatUser, setChatUser] = useState()

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
                      : <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
          }
        </AuthProvider>
      </FullscreenProvider>
    </GoogleOAuthProvider>
  );
}

export default App;