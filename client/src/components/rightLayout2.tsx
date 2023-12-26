import React from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import SettingMenuIcon from './SettingMenuIcon';
import { useAuth } from '../hooks/useAuth';

const RightLayout = ({ setMainScreen, setShowScreen }: { setMainScreen: any, setShowScreen: any }) => {
  const { isLoggedIn } = useAuth();
  
  return <div className="rightSideDiv kjdsfkn-ajdnkw">
    <div className={`d-${isLoggedIn() ? 'flex' : 'none'} justify-content-end`}>
      <SettingMenuIcon setMainScreen={setMainScreen} />
    </div>
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
      <div className="createVideoInterviewBtnDiv d-none">
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
        <img src={require("../images/i3.png")} />
      </div>
    </div>
    <div className='kjladsm-sajdw'>
      <Icons iconNumber={60} />
    </div>
  </div>
}
export default RightLayout;