import Icons from "../icons";
//@ts-ignore
import Fade from 'react-reveal/Fade'
const FinishForm = ({setScreen}:{setScreen:any}) => {
    return (
     <Fade >
       <div className="kjjfds-janwkea4 ">
        {/* <img src={require("../../images/i6.png")} /> */}
        <div className="kjdflmas-sdmfe">
          <div className="d-flex justify-content-between skdjand-wkemd ksljfsa-asjd">
            <div className="circleButtons">
              <Icons iconNumber={19} />
              <h5>Retry</h5>
            </div>
            <div className="circleButtons">
              <Icons iconNumber={20} />
              <h5>Watch</h5>
            </div>
            <div className="circleButtons" onClick={()=>{
              setScreen(3)
            }}>
              <Icons iconNumber={21} />
              <h5>Next</h5>
            </div>
          </div>
        <div className="klasdjf-jdsifm"></div>
        <div className="ldkjfal0-fdsnfe1">
          <Icons iconNumber={63}/>
        </div>
        </div>
       
      </div>
     </Fade>
    );
  };

  export default FinishForm