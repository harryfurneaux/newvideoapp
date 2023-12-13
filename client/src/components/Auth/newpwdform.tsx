import { useState } from "react";
import Icons from "../../components/icons";
import { useMediaQuery } from 'react-responsive'
//@ts-ignore
import Flip from 'react-reveal/Flip';

const NewPwdForm = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Flip bottom>
      <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"}`}>
        <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : "jhjij-sanwe5"}`}>
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
    </Flip>
  );
};

export default NewPwdForm;