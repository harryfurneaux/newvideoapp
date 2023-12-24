import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./screens/auth";
import React, { useState } from "react";
import Question from "./screens/questions";
import Answers from "./screens/answers";
import Start from './screens/start';
import Messages from './screens/messages'
import { AuthProvider } from "./context/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [mainScreen, setMainScreen] = useState(0);
  const [jobViewContext, setJobViewContext] = useState()
  const [chatUser, setChatUser] = useState()


  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <AuthProvider setMainScreen={setMainScreen}>
        {
          mainScreen == 0 ? <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
            : mainScreen == 1 ? <Question mainScreen={mainScreen} setMainScreen={setMainScreen} setJobViewContext={setJobViewContext} setChatUser={setChatUser} />
              : mainScreen == 2 ? <Answers mainScreen={mainScreen} setMainScreen={setMainScreen} />
                : mainScreen == 3 ? <Start setMainScreen={setMainScreen} jobViewContext={jobViewContext} /> : mainScreen == 4 ? <Messages mainScreen={mainScreen} setMainScreen={setMainScreen} chatUser={chatUser} />
                  : <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
        }
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

/*

    */
