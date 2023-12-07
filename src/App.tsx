import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./screens/auth";
import React, { useState } from "react";
import Question from "./screens/questions";
import Answers from "./screens/answers";
import Start from './screens/start';

function App() {
  const [mainScreen, setMainScreen] = useState(0);
  return (
    mainScreen == 0 ? <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
      : mainScreen == 1 ? <Question mainScreen={mainScreen} setMainScreen={setMainScreen} />
        : mainScreen == 2 ? <Answers mainScreen={mainScreen} setMainScreen={setMainScreen} />
          : mainScreen == 3 ? <Start />
            : <Auth mainScreen={mainScreen} setMainScreen={setMainScreen} />
  );
}

export default App;

/*

    */
