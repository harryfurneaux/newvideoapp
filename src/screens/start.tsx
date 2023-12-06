import React, { useState } from "react";
import Icons from '../components/icons';
import RightLayout from '../components/rightLayout';
import BeginForm from '../components/Start/beginForm';
import RecordForm from '../components/Start/recordForm';
import NextForm from '../components/Start/nextForm';
import ProgressForm from '../components/Start/progress';
import FinishForm from '../components/Start/finish';

function GetScreen(screen:number,setScreen:any){
  switch(screen)
  {
    case 0:return  <BeginForm setScreen={setScreen} /> 
    case 1:return  <RecordForm setScreen={setScreen}/>
    case 2:return  <FinishForm setScreen={setScreen}/>
    case 3:return  <ProgressForm setScreen={setScreen}/>
    case 4:return   <NextForm setScreen={setScreen}/> 
  }
}
function Next() {
  const [screen,setScreen] = useState(0);
    return (
      <div className="pageContainer">
        <div className="rightSideDiv rightSideBg pos-rel">
          {GetScreen(screen,setScreen)}
        </div>
       <RightLayout />
      </div>
    );
  }

  export default Next