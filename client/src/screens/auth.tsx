import React, { useState, useEffect } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import SignInForm from "../components/Auth/signinform";
import AccountForm from "../components/Auth/accountform";
import SignupForm from "../components/Auth/signupform";
import BottomMenu from "../components/bottomMenu";
import BackButton from "../components/Auth/backButton";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";
import EmailLoginForm from "../components/Auth/emailloginform";
import ForgotPwdForm from "../components/Auth/forgotpwdform";
import EnterCodeForm from "../components/Auth/entercodeform";
import NewPwdForm from "../components/Auth/newpwdform";

function Auth({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setshowScreen] = useState(0);

  useEffect(() => {
    switch (showScreen) {
      case 0:
        //front
        setTimeout(() => {
          document.querySelector('.flip-child-0')?.classList.remove('d-none');
          document.querySelector('.flip-child-2')?.classList.add('d-none');
          document.querySelector('.flip-child-5')?.classList.add('d-none');
          document.querySelector('.flip-child-7')?.classList.add('d-none');
        }, 500);
        break;
      case 1:
        //back
        setTimeout(() => {
          document.querySelector('.flip-child-1')?.classList.remove('d-none');
          document.querySelector('.flip-child-4')?.classList.add('d-none');
          document.querySelector('.flip-child-6')?.classList.add('d-none');
        }, 500);
        break;
      case 2:
        //front
        setTimeout(() => {
          document.querySelector('.flip-child-2')?.classList.remove('d-none');
          document.querySelector('.flip-child-0')?.classList.add('d-none');
          document.querySelector('.flip-child-5')?.classList.add('d-none');
          document.querySelector('.flip-child-7')?.classList.add('d-none');
        }, 500);
        break;
      case 4:
        //back
        setTimeout(() => {
          document.querySelector('.flip-child-4')?.classList.remove('d-none');
          document.querySelector('.flip-child-1')?.classList.add('d-none');
          document.querySelector('.flip-child-6')?.classList.add('d-none');
        }, 500);
        break;
      case 5:
        //front
        setTimeout(() => {
          document.querySelector('.flip-child-5')?.classList.remove('d-none');
          document.querySelector('.flip-child-7')?.classList.add('d-none');
          document.querySelector('.flip-child-0')?.classList.add('d-none');
          document.querySelector('.flip-child-2')?.classList.add('d-none');
        }, 500);
        break;
      case 6:
        //back
        setTimeout(() => {
          document.querySelector('.flip-child-6')?.classList.remove('d-none');
          document.querySelector('.flip-child-4')?.classList.add('d-none');
          document.querySelector('.flip-child-1')?.classList.add('d-none');
        }, 500);
        break;
      case 7:
        //front
        setTimeout(() => {
          document.querySelector('.flip-child-7')?.classList.remove('d-none');
          document.querySelector('.flip-child-5')?.classList.add('d-none');
          document.querySelector('.flip-child-0')?.classList.add('d-none');
          document.querySelector('.flip-child-2')?.classList.add('d-none');
        }, 500);
        break;
    }
  }, [showScreen]);

  const renderScreen = () => {
    if (showScreen <= 7 && showScreen !== 3) {
      return (
        <div className={`flip-element ${showScreen === 1 || showScreen === 4 || showScreen === 6 ? 'flipped' : ''}`} style={{ height: 472 }}>
          <SignInForm className={`front m-0 flip-child-0`} setshowScreen={setshowScreen} />
          <AccountForm className={`back m-0 flip-child-1`} setshowScreen={setshowScreen} />
          <SignupForm className={`front m-0 flip-child-2`} setshowScreen={setshowScreen} />
          <EmailLoginForm className={`back m-0 flip-child-4`} setshowScreen={setshowScreen} />
          <ForgotPwdForm className={`front m-0 flip-child-5`} setshowScreen={setshowScreen} />
          <EnterCodeForm className={`back m-0 flip-child-6`} setshowScreen={setshowScreen} />
          <NewPwdForm className={`front m-0 flip-child-7`} />
        </div>
      );
    } else {
      switch (showScreen) {
        case 3:
          return (
            <>
              <TestiMonials />
              <div className="lkljdfsl-sifkmd">
                <Icons iconNumber={66} />
                <Icons iconNumber={67} />
              </div>
              <div className="dkfnmsd-awde">
                <div className="wh-100 l1">
                  <VideoForm />
                </div>
                <div className="wh-100 l2">
                  <VideoForm />
                </div>
              </div>
              <div className="ldkf-kasmdaw"></div>
            </>
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page">
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen > 0 ? (
            <BackButton showScreen={showScreen} setshowScreen={setshowScreen} />
          ) : (
            <></>
          )}
        </div>
        {renderScreen()}
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 />
    </div>
  );
}

export default Auth;
