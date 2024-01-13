import React, { useEffect, useState } from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import SettingMenuIcon from './SettingMenuIcon';
import { useAuth } from '../hooks/useAuth';

const RightLayout = ({ setMainScreen, setShowScreen, showScreen = null, style = {}, mainScreen = null }: { setMainScreen: any, setShowScreen: any, showScreen?: any, style?: any, mainScreen?: any }) => {
  const { isLoggedIn } = useAuth();
  const [isLoginChecked, setIsLoginChecked] = useState(true);

  useEffect(() => {
    switch (showScreen) {
      case 0:
      case 4:
        setIsLoginChecked(true);
        break;
      case 1:
        setIsLoginChecked(false);
        break;
      default:
        break;
    }
  }, [showScreen]);

  return <div className="rightSideDiv kjdsfkn-ajdnkw" style={style}>
    <div className={`d-${isLoggedIn() ? 'flex' : 'none'} justify-content-end`}>
      <SettingMenuIcon setMainScreen={setMainScreen} />
    </div>
    {!isLoggedIn() && (mainScreen == 0 || mainScreen == 7) ? (
      <div className="tabs-container">
        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" onChange={() => {
            if (typeof setShowScreen === 'function') {
              setIsLoginChecked(false);
              setShowScreen(1);
            } else if (typeof setMainScreen === 'function') {
              setMainScreen(0);
            }
          }} checked={!isLoginChecked} />
          <label className="tab" htmlFor="radio-1">SIGN UP</label>
          <input type="radio" id="radio-2" name="tabs" onChange={() => {
            if (typeof setShowScreen === 'function') {
              setIsLoginChecked(true);
              setShowScreen(0);
            } else if (typeof setMainScreen === 'function') {
              setMainScreen(0);
            }
          }} checked={isLoginChecked} />
          <label className="tab" htmlFor="radio-2">LOGIN</label>
          <span className="glider"></span>
        </div>
      </div>
    ) : null}
    <div className="nakds-ajews">
      <div className="topSectionDiv d-flex">
        <h1>“</h1>
        <h1 className='kjjsad-wjwdwe'>Tell me why you’re <span>perfect</span> for this role” </h1>
      </div>
      <div className="middleSectionDiv">
        <SimpleCheckBox span="Choose" title=" 3 Questions" />
        <SimpleCheckBox span="Share" title=" link with candidates" />
        <SimpleCheckBox span="Watch" title=" the video responses roll in" />
      </div>
      <div className="createVideoInterviewBtnDiv ">
        <button className="btn no-shadow asjdsajde" onClick={() => {
          setMainScreen(0);
          setShowScreen(0);
        }}>Create Video Interview</button>
      </div>
      <div className="homescreenFloater">
        <img src={require("../images/i1.png")} />
      </div>
      <div className="homescreenFloater1">
        <img src={require("../images/i2.png")} />
      </div>
      <div className="homescreenFloater2 c-pr">
        {/* <img src={require("../images/i3.png")} /> */}
      </div>
    </div>
    <div className='kjladsm-sajdw'>
      <Icons iconNumber={60} />
    </div>
  </div>
}
export default RightLayout;