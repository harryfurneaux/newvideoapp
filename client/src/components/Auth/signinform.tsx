import React, { useState } from "react";
import Icons from "../../components/icons";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useAuth } from "../../hooks/useAuth";

const SignInForm = ({ setshowScreen, className = '', setMainScreen }: { setshowScreen: any, className?: string, setMainScreen: any }) => {
  const { setUser } = useAuth();
  const [isHoverOrActive, setisHoverOrActive] = React.useState(false);

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      axios.get(process.env.REACT_APP_BACKEND_URL + '/auth/google/callback', { params: { code: tokenResponse.access_token } })
      .then((res) => {
        setUser(res.data);
        setMainScreen(1)
      })
    }
  });
  
  const { linkedInLogin } = useLinkedIn({
    clientId: '77ezxuyzh6xmh6',
    redirectUri: process.env.REACT_APP_FRONTEND_URL+'/linkedIn-Auth',
    scope: 'openid,profile,email',
    onSuccess: (code) => {
      axios.get(process.env.REACT_APP_BACKEND_URL + '/auth/linkedin/callback', {
        params: {
          code,
        }
      }).then((res) => {
        setUser(res.data);
        setMainScreen(1)
      })
    },
    onError: (error) => {
      console.log(error)
      setMainScreen(0)
    }
  });
  return (
    <div className={`kjjfds-janwkea ${className}`}>
      <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
      <div className="jhjij-sanwe">
        <h3>Sign in</h3>
        <div className="socialButtonsDiv">
          <FacebookLogin
            appId="873599547503766"
            onSuccess={(response) => {
              console.log('Login Success!', response);
            }}
            onFail={(error) => {
              console.log('Login Failed!', error);
            }}
            onProfileSuccess={(response) => {
              console.log('Get Profile Success!', response);
            }}
            render={({ onClick, logout }) => (
              <button className="btn" onClick={onClick}>
                <Icons iconNumber={3} />
                Log in with Facebook
              </button>

            )}
          />

          <button className="btn" onClick={() => login()}>
            <Icons iconNumber={4} />
            Log in with Google
          </button>
          <button className="btn" onClick={() => linkedInLogin()}>
            <Icons iconNumber={5} />
            Log in with LinkedIn
          </button>
        </div>
        <div className="jkdslafj-asdemk mt-1">
          <div className="jkdsfs-dajem"></div>
          <h5 className="fw-light mt-1 mx-2">or</h5>
          <div className="jkdsfs-dajem"></div>
        </div>

        <div className="socialButtonsDiv mt-2">
          <button className="btn" onClick={() => {
            setshowScreen(4)
          }}>
            <Icons iconNumber={90} />
            Login in with Email
          </button>
        </div>
        <div className="jdaskfjnas-ajaied njskakd-kawmed px-1">
          <div className="ansks-adn">
            <button
              onClick={() => {
                setshowScreen(1);
              }} className="no-shadow fw-bold">Create Account</button>
          </div>
          <div className="ansks-adn">
            <button
              onClick={() => {
                setshowScreen(5);
              }} className="no-shadow fw-light">Forgot Password?</button>
          </div>
        </div>
        <div className="continueBtnDiv">
          <button
            onClick={() => {
              setshowScreen(1);
            }} className="btn kjlsjadm-kdmsd">
            CONTINUE
            <Icons iconNumber={77} />
          </button>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={64} />
      </div>
    </div >
  );
};

export default SignInForm;