import CheckFormBox from "../CheckBoxForm";
import Icons from "../icons";

const BeginForm = ({setScreen}:{setScreen:any}) => {
    return (
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 height-none">
        <div className="kafms-kfsamfer">
          <div className="skfalk-smdsefds">
            <div className="kdjnfakdsfm-jsamre">
              <img src={require("../../images/i5.png")} />
            </div>
            <div className="kjdflkads-mdskf">
              <h3>Job Title</h3>
              <h5>
                <Icons iconNumber={16} /> Company Name
              </h5>
              <h6>
                <Icons iconNumber={17} /> Location
              </h6>
            </div>
          </div>
          <div className="njfk-amew">
            <CheckFormBox/>
            <CheckFormBox/>
            <CheckFormBox/>
          </div>
          <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
            <div className="continueBtnDiv snasdj-sawdne">
              <button className="btn" onClick={()=>{
                setScreen(1)
              }}>
               Begin
                <div className="kdksa-ajwmd ">
                  <Icons iconNumber={7} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62}/>
        </div>
      </div>
    );
  };

  export default BeginForm;