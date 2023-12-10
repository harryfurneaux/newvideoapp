import { useState } from "react";
import SearchFilter from "../Modals/SearchFilter";
import Icons from "../icons";
import Back from "./Back";

const TopSec = ({ showScreen, setshowScreen }: { showScreen: number, setshowScreen: any }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  return <>
    <div className="leftSideHeader">
      <Back />
      <div className="sortButtonDiv" onClick={handleFilterShow}>
        <h5 className="mksaldkamaw-jdwa">Filter</h5>
        <h5 className="mksaldkamaw-jdwa sortButtonIcon">
          <Icons iconNumber={91} />
        </h5>
      </div>
      <SearchFilter show={showFilter} handleClose={handleFilterClose} />
    </div>
    <div className="nklmad-wkdm kjnasna-dkw">
      <button className="lamdl-anwid radiusLeft">
        <Icons iconNumber={50} />
        Your Answers
      </button>
      <button className="lamdl-anwid radiusRight">
        <Icons iconNumber={32} />
        Nearby
      </button>
    </div>
    <div className="kdhfkjjdsfo">
      <Icons iconNumber={32} />
      <h5 className="mksaldkamaw-jdwa">London, UK</h5>
    </div>
  </>
}
export default TopSec