import Icons from "../icons"
import Back from "./Back"

 const TopSec=({showScreen,setshowScreen}:{showScreen:number,setshowScreen:any})=>{
    return <>
    <div className="leftSideHeader">
            <Back/>
            <div className="sortButtonDiv">
              <h5 className="mksaldkamaw-jdwa">Sort</h5>
              <h5 className="mksaldkamaw-jdwa sortButtonIcon">
                <Icons iconNumber={51} />
              </h5>
            </div>
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
            <Icons iconNumber={32}/>
            <h5 className="mksaldkamaw-jdwa">London, UK</h5>
          </div>
    </>
  }
  export default TopSec