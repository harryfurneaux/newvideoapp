import React, { useEffect, useState } from "react";
import Icons from '../components/icons';
import RightLayout from '../components/rightLayout';
import BeginForm from '../components/Start/beginForm';
import RecordForm from '../components/Start/recordForm';
import NextForm from '../components/Start/nextForm';
import ProgressForm from '../components/Start/progress';
import FinishForm from '../components/Start/finish';
import LinearBackground from "../components/LinearBackground";
import TopMenu from "../components/Start/TopMenu";
import { useFullscreen } from "../hooks/useFullscreen";

function GetScreen(screen: number, setScreen: any, jobViewContext: any, recorded: any, setRecorded: any, setMainScreen: any) {
  switch (screen) {
    case 0: return <BeginForm setScreen={setScreen} jobViewContext={jobViewContext} recorded={recorded} setMainScreen={setMainScreen} />
    case 1: return <RecordForm setScreen={setScreen} jobViewContext={jobViewContext} recorded={recorded} setRecorded={setRecorded} />
    case 2: return <FinishForm setScreen={setScreen} jobViewContext={jobViewContext} recorded={recorded} setRecorded={setRecorded} />
    case 3: return <ProgressForm setScreen={setScreen} jobViewContext={jobViewContext} recorded={recorded} setRecorded={setRecorded} />
    case 4: return <NextForm setScreen={setScreen} />
  }
}

function Next({ jobViewContext, setMainScreen }: { jobViewContext: any, setMainScreen: any }) {
  const [screen, setScreen] = useState(0);
  const [recorded, setRecorded] = useState([]);
  const { fullscreen } = useFullscreen();

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel" style={fullscreen ? { width: '100%' } : {}}>
        <LinearBackground style={{ width: '100%' }} />
        <TopMenu />
        <div style={{ position: 'absolute' }}>
          {GetScreen(screen, setScreen, jobViewContext, recorded, setRecorded, setMainScreen)}
        </div>
      </div>
      <RightLayout screen={screen} style={fullscreen ? { display: 'none' } : {}} />
    </div>
  );
}

export default Next