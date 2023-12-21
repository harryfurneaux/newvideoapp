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


  return (
    <GoogleOAuthProvider clientId='832998365590-mc16ctfeo9kti9bg2puo7coq2kfb16en.apps.googleusercontent.com'>
      <AuthProvider>
        {
          mainScreen == 0 ? <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
            : mainScreen == 1 ? <Question mainScreen={mainScreen} setMainScreen={setMainScreen} setJobViewContext={setJobViewContext} />
              : mainScreen == 2 ? <Answers mainScreen={mainScreen} setMainScreen={setMainScreen} />
                : mainScreen == 3 ? <Start jobViewContext={jobViewContext} /> : mainScreen == 4 ? <Messages mainScreen={mainScreen} setMainScreen={setMainScreen} />
                  : <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
        }
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

/*

    */
