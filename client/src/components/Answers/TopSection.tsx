import { useState } from "react";
import SearchFilter from "../Modals/SearchFilter";
import Icons from "../icons";
import Back from "./Back";

const TopSec = ({ setMainScreen, showScreen, setshowScreen, showFilter, handleFilterShow, handleFilterClose, selectedFilter, setSelectedFilter }: { setMainScreen: any, showScreen: number, setshowScreen: any, showFilter: boolean, handleFilterShow: any, handleFilterClose: any, selectedFilter: any, setSelectedFilter: any }) => {
  return <>
    <div className="leftSideHeader">
      <Back setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
      <div className="sortButtonDiv" onClick={handleFilterShow}>
        <h5 className="mksaldkamaw-jdwa">Filter</h5>
        <h5 className="mksaldkamaw-jdwa sortButtonIcon">
          <Icons iconNumber={91} />
        </h5>
      </div>
      <SearchFilter show={showFilter} handleClose={handleFilterClose} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    </div>
  </>
}
export default TopSec