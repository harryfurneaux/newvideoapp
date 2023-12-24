import React, { useState, useEffect } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import FormMessage from "../components/Answers/MessageForm";
import MainForm from "../components/Answers/MainForm";
import TopSec from "../components/Answers/TopSection";
import Back from "../components/Answers/Back";

export enum AnswerFilter {
  LastHour = 'Last hour',
  Today = 'Today',
  ThisWeek = 'This week',
  ThisMonth = 'This month',
  ThisYear = 'This year',
}

function View({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setshowScreen] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<AnswerFilter>(AnswerFilter.ThisMonth);

  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  return (
    <div className="pageContainer kladsfhjn-ajwe">
      <div className="jkadshfkjf rightSideDiv rightSideBg1 pos-rel sjfdak-ajwe">
        <div className="leftsidediv">
          {
            showScreen == 0 ? <MainForm setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} selectedFilter={selectedFilter} /> : <><FormMessage showScreen={showScreen} setshowScreen={setshowScreen} /></>
          }
          {
            showScreen == 0 ? <TopSec setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} showFilter={showFilter} handleFilterShow={handleFilterShow} handleFilterClose={handleFilterClose} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> : <div className="sjaklsa-wmjes"><Back setMainScreen={setMainScreen} setShowScreen={setshowScreen} /></div>
          }
        </div>
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
    </div>
  );
}

export default View;
