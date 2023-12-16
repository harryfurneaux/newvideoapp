import React, { useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import BackMenu from "../components/Questions/BackMenu";
import OptionButtons from "../components/Questions/OptionButton";
import QuestionForm from "../components/Questions/QuestionsForm";
import CreateForm from "../components/Questions/CreateForm";
import ShareForm from "../components/Questions/ShareForm";
import ViewForm from "../components/Questions/ViewForm";
import { useMediaQuery } from "react-responsive";
import RightButtons from "../components/RightButtons";

function View({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setShowScreen] = useState(0);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTab = useMediaQuery({ query: '(max-width: 1013px)' });

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg1">
        {
          showScreen <= 5 ?
            <div className="leftSideMain">
              <OptionButtons />
              <QuestionForm setMainScreen={setMainScreen} setShowScreen={setShowScreen} />
            </div> :
            <></>
        }
        <BackMenu showRightMenu={showRightMenu} setShowRightMenu={setShowRightMenu} showScreen={showScreen} setShowScreen={setShowScreen} />
        {showScreen > 5 ? (
          <div className={`lnjsadnksa-sda ${isMobile && showScreen == 7 ? "" : "kjsadl-asdksm"}`}>
            {showScreen == 6 ? (
              <ShareForm setMainScreen={setMainScreen} showScreen={showScreen} setShowScreen={setShowScreen} />
            ) : (
              <>
                <ViewForm setMainScreen={setMainScreen} setShowScreen={setShowScreen} />
                <RightButtons setMainScreen={setMainScreen} setShowScreen={setShowScreen} hideMenu={showRightMenu && isTab ? false : true} />
              </>
            )}
          </div>
        ) : <></>}
        {showScreen >= 1 && showScreen <= 5 ? (
          <CreateForm showScreen={showScreen} setShowScreen={setShowScreen} />
        ) : (
          <></>
        )}
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setShowScreen} />
    </div>
  );
}

export default View;
