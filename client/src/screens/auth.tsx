import React, { useState, useEffect, ChangeEvent } from "react";
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
import Notify from "../components/Notify";
import { useAuth } from "../hooks/useAuth";
import LinearBackground from "../components/LinearBackground";

function Auth({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const { isLoggedIn } = useAuth();
  const [showScreen, setshowScreen] = useState(0);
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    location: '',
    company_name: '',
    birth_date: '',
    role: 'INTERVIEWEE'
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpFormErrors, setSignUpFormErrors] = useState([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };



  useEffect(() => {
    if (showScreen <= 7 && showScreen !== 3) {
      const previousNode = document.querySelector('.flip-element .flip-child:is(:not(.d-none))');
      const previousScreenClass = previousNode?.classList.toString().split(' ').find(c => c.includes('flip-child-'));
      const previousScreen: any = previousScreenClass?.split('-')[previousScreenClass?.split('-')?.length - 1];

      if (parseInt(previousScreen) !== showScreen) {
        Array.from(document.querySelectorAll('.flip-element .flip-child')).map(item => {
          const nodeScreenClass = item?.classList.toString().split(' ').find(c => c.includes('flip-child-'));
          const nodeScreen: any = nodeScreenClass?.split('-')[nodeScreenClass?.split('-')?.length - 1];
          if (parseInt(nodeScreen) !== parseInt(previousScreen)) {
            item.classList.add('d-none');
            item.classList.remove('hover-anim');
            item.classList.remove('hover-anim-180');
          }
        });
        document.querySelector(`.flip-element`)?.classList.add('notransition');
        document.querySelector(`.flip-element`)?.classList.remove('flipped');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.add('notransition');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.remove('t-180');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.remove('hover-anim');
        document.querySelector(`.flip-child-${parseInt(previousScreen)}`)?.classList.remove('hover-anim-180');
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
              if (document.querySelector(`.flip-child-${showScreen}`)?.classList.contains('t-180')) {
                document.querySelector(`.flip-child-${showScreen}`)?.classList.add('hover-anim-180');
              } else {
                document.querySelector(`.flip-child-${showScreen}`)?.classList.add('hover-anim');
              }
            }, 500);
          }, 100);
        }, 100);
      }
    }
  }, [showScreen]);

  const renderScreen = () => {
    if (showScreen <= 7 && showScreen !== 3) {
      return (
        <div style={{ perspective: 1000, position: 'absolute' }}>
          <div className={`flip-element`} style={{ height: 472 }}>
            <SignInForm className={` m-0 flip-child flip-child-0 hover-anim`} setshowScreen={setshowScreen} setMainScreen={setMainScreen} />
            <AccountForm className={`d-none m-0 flip-child flip-child-1`} setshowScreen={setshowScreen} handleFormChange={handleChange} signUpFormErrors={signUpFormErrors} />
            <SignupForm className={`d-none m-0 flip-child flip-child-2`} setshowScreen={setshowScreen} signUpFormData={signUpFormData} handleFormChange={handleChange} signUpFormErrors={signUpFormErrors} setSignUpFormErrors={setSignUpFormErrors} setErrorMessage={setErrorMessage} />
            <EmailLoginForm className={`d-none m-0 flip-child flip-child-4`} setshowScreen={setshowScreen} setMainScreen={setMainScreen} setErrorMessage={setErrorMessage} />
            <ForgotPwdForm className={`d-none m-0 flip-child flip-child-5`} setshowScreen={setshowScreen} />
            <EnterCodeForm className={`d-none m-0 flip-child flip-child-6`} setshowScreen={setshowScreen} />
            <NewPwdForm className={`d-none m-0 flip-child flip-child-7`} setshowScreen={setshowScreen} />
          </div>
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
      <Notify type="danger" title={errorMessage} show={!!errorMessage?.length} handleClose={() => setErrorMessage('')} />

      <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page">
        <LinearBackground style={{ width: '100%' }} />
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen > 0 ? (
            <BackButton showScreen={showScreen} setshowScreen={setshowScreen} />
          ) : (
            <></>
          )}
        </div>
        {renderScreen()}
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          {isLoggedIn() ? (
            <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
          ) : null}
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setshowScreen} showScreen={showScreen} mainScreen={mainScreen} />
    </div>
  );
}

export default Auth;
