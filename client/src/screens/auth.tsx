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
    if (showScreen <= 7 && showScreen !== 3) {
      const previousNode = document.querySelector('.flip-element .flip-child:is(:not(.d-none))');
      const previousScreenClass = previousNode?.classList.toString().split(' ').find(c => c.includes('flip-child-'));
      const previousScreen: any = previousScreenClass?.split('-')[previousScreenClass?.split('-')?.length - 1];
      
      if(parseInt(previousScreen) !== showScreen) {
        Array.from(document.querySelectorAll('.flip-element .flip-child')).map(item => {
          const nodeScreenClass = item?.classList.toString().split(' ').find(c => c.includes('flip-child-'));
          const nodeScreen: any = nodeScreenClass?.split('-')[nodeScreenClass?.split('-')?.length - 1];
          if(parseInt(nodeScreen) !== parseInt(previousScreen)) {
            item.classList.add('d-none');
          }
        });
        document.querySelector(`.flip-element`)?.classList.add('notransition');
        document.querySelector(`.flip-element`)?.classList.remove('flipped');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.add('notransition');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.remove('t-180');
        document.querySelector(`.flip-child-${showScreen}`)?.classList.add('notransition');
        document.querySelector(`.flip-child-${showScreen}`)?.classList.add('t-180');
        setTimeout(() => {
          document.querySelector(`.flip-element`)?.classList.remove('notransition');
          document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.remove('notransition');
          document.querySelector(`.flip-child-${showScreen}`)?.classList.remove('notransition');
          setTimeout(() => {
            document.querySelector(`.flip-element`)?.classList.add('flipped');
            document.querySelector(`.flip-child-${showScreen}`)?.classList.remove('d-none');
            setTimeout(() => {
              document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.add('d-none');
            }, 500);
          }, 100);
        }, 100);
      }
    }
  }, [showScreen]);

  const renderScreen = () => {
    if (showScreen <= 7 && showScreen !== 3) {
      return (
        <div className={`flip-element`} style={{ height: 472 }}>
          <SignInForm className={` m-0 flip-child flip-child-0`} setshowScreen={setshowScreen} />
          <AccountForm className={`d-none m-0 flip-child flip-child-1`} setshowScreen={setshowScreen} />
          <SignupForm className={`d-none m-0 flip-child flip-child-2`} setshowScreen={setshowScreen} />
          <EmailLoginForm className={`d-none m-0 flip-child flip-child-4`} setshowScreen={setshowScreen} />
          <ForgotPwdForm className={`d-none m-0 flip-child flip-child-5`} setshowScreen={setshowScreen} />
          <EnterCodeForm className={`d-none m-0 flip-child flip-child-6`} setshowScreen={setshowScreen} />
          <NewPwdForm className={`d-none m-0 flip-child flip-child-7`} />
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
