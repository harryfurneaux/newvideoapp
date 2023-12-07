import React, { useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import FormMessage from "../components/Answers/MessageForm";
import MainForm from "../components/Answers/MainForm";
import TopSec from "../components/Answers/TopSection";
import Back from "../components/Answers/Back";

function View({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setshowScreen] = useState(0);
  return (
    <div className="pageContainer kladsfhjn-ajwe">
      <div className="jkadshfkjf rightSideDiv rightSideBg1 pos-rel sjfdak-ajwe">
        {
          showScreen == 0 ? <TopSec showScreen={showScreen} setshowScreen={setshowScreen} /> : <div className="sjaklsa-wmjes"><Back /></div>
        }
        {
          showScreen == 0 ? <MainForm showScreen={showScreen} setshowScreen={setshowScreen} /> : <><FormMessage showScreen={showScreen} setshowScreen={setshowScreen} /></>
        }
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 />
    </div>
  );
}

export default View;
