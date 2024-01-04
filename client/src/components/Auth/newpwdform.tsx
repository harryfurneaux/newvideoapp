import { useState } from "react";
import Icons from "../../components/icons";
import { useMediaQuery } from 'react-responsive'

const NewPwdForm = ({ setshowScreen, className = '' }: { setshowScreen: any, className?: string }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} white-form ${className}`}>
      <div className='wave-box'>
        <div className='wave'></div>
      </div>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""}`}>
        <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`}>Create New Password</h3>
        <h4>Password must be at least 8 characters</h4>

        <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
          <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={9} />
              <input type="password" placeholder="New Password" />
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={9} />
              <input type="password" placeholder="Confirm New Password" />
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`}>
            <button onClick={() => {
              setshowScreen(2);
            }} className={`btn`}>
              CONFIRM CHANGES
              <div className="kdksa-ajwmd">
                <Icons iconNumber={7} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={isTabletOrMobile ? 64 : 62} />
      </div>
    </div>
  );
};

export default NewPwdForm;