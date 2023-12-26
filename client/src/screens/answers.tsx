import React, { useState, useEffect } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import FormMessage from "../components/Answers/MessageForm";
import MainForm from "../components/Answers/MainForm";
import TopSec from "../components/Answers/TopSection";
import Back from "../components/Answers/Back";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";

export enum AnswerFilter {
  LastHour = 'Last hour',
  Today = 'Today',
  ThisWeek = 'This week',
  ThisMonth = 'This month',
  ThisYear = 'This year',
}

function View({ mainScreen, setMainScreen, setChatUser }: { mainScreen: number, setMainScreen: any, setChatUser?: any }) {
  const [showScreen, setshowScreen] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<AnswerFilter>(AnswerFilter.ThisMonth);
  const [mainAllInterviews, setMainAllInterviews] = useState<Array<any>>([]);
  const [selectedInterview, setSelectedInterview] = useState<any>(null);

  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  useEffect(() => {
    if (selectedInterview) {
      setshowScreen(1);
    }
  }, [selectedInterview]);

  const prevInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const prevIndex = currentIndex - 1;
      if (prevIndex == -1) {
        setSelectedInterview(mainAllInterviews[mainAllInterviews.length - 1]);
      } else {
        setSelectedInterview(mainAllInterviews[prevIndex]);
      }
    }
  };

  const nextInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex > (mainAllInterviews.length - 1)) {
        setSelectedInterview(mainAllInterviews[0]);
      } else {
        setSelectedInterview(mainAllInterviews[nextIndex]);
      }
    }
  };

  return (
    <div className="pageContainer kladsfhjn-ajwe">
      <div className={showScreen == 1 ? "jkadshfkjf rightSideDiv rightSideBg pos-rel sjfdak-ajwe over-hdn" : "jkadshfkjf rightSideDiv rightSideBg1 pos-rel sjfdak-ajwe"}>
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen == 1 ? (
            <Back setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
          ) : (
            <></>
          )}
        </div>
        {showScreen != 1 ? (
          <div className="leftsidediv">
            {
              showScreen == 0 ? <MainForm setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} selectedFilter={selectedFilter} setSelectedInterview={setSelectedInterview} allInterviews={mainAllInterviews} setAllInterviews={setMainAllInterviews} />
                : <><FormMessage showScreen={showScreen} setshowScreen={setshowScreen} /></>
            }
            {
              showScreen == 0 ? <TopSec setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} showFilter={showFilter} handleFilterShow={handleFilterShow} handleFilterClose={handleFilterClose} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> : <div className="sjaklsa-wmjes"><Back setMainScreen={setMainScreen} setShowScreen={setshowScreen} /></div>
            }
          </div>
        ) : (
          <></>
        )}
        {showScreen == 1 ? <>
          <div className="lkljdfsl-sifkmd" style={{ width: 'auto', left: 0 }} onClick={prevInterview}>
            <Icons iconNumber={66} />
          </div>
          <TestiMonials setChatUser={setChatUser} selectedInterview={selectedInterview} setAllInterviews={setMainAllInterviews} setshowScreen={setshowScreen} setMainScreen={setMainScreen} />
          <div className="lkljdfsl-sifkmd" style={{ width: 'auto', right: 0 }} onClick={nextInterview}>
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
          : null}
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
    </div>
  );
}

export default View;
