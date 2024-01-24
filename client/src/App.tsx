import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthProvider } from "./context/Auth";
import { SharedProvider } from "./context/Share";
import { FullscreenProvider } from "./context/Fullscreen";
import Notify from "./components/Notify";
import MainLayout from "./main";

function App() {
  const [mainScreen, setMainScreen] = useState(7);
  const [show, setShow] = useState(false);

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <FullscreenProvider>
        <SharedProvider>
          <AuthProvider setMainScreen={setMainScreen}>
            <MainLayout setMainScreen={setMainScreen} mainScreen={mainScreen} />
          </AuthProvider>
        </SharedProvider>
      </FullscreenProvider>
      <Notify
        show={show}
        handleClose={() => setShow(false)}
        title="Payment Method Added Successfully"
      />
    </GoogleOAuthProvider>
  );
}

export default App;
