import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Icons from "../icons";
//@ts-ignore
import { Flip } from "react-awesome-reveal"

const ProgressForm = ({ setScreen, jobViewContext, recorded, setRecorded }: { setScreen: any, jobViewContext: any, recorded: any, setRecorded: any }) => {
  
  function calculateProgress(max: number, current: number) {
    current = Math.min(Math.max(current, 1), max);
    const progress = (current / max) * 100;
    return Math.floor(progress);
  }
  
  return (
    <Flip direction="horizontal">
      <div className="kjjfds-janwkea knlsdj0wjew" style={{ cursor: 'pointer' }}>
        <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
        <div className="kjdslfk-sjadnkwe mb-5">
          <CircularProgressbarWithChildren
            strokeWidth={8}
            value={calculateProgress(jobViewContext?.questions?.length || 3, recorded?.length || 1)}
            styles={{
              path: {
                stroke: `#00D9CD`,
              },
              trail: {
                stroke: `#E8EEF44D`,
              },
            }}
          >
            <div className="hasfkja0ew-sd">
              <h5>{calculateProgress(jobViewContext?.questions?.length || 3, recorded?.length || 1)}%</h5>
              <h6>{recorded?.length || 1} OF {jobViewContext?.questions?.length || 3}</h6>
            </div>
            <div className="knl-masdkw">
              <Icons iconNumber={23} />
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="ldjkfsa-jwme" style={{ width: 280 }}>
          <div className="d-flex justify-content-center">
            <Icons iconNumber={22} />
            <h5>Awesome!</h5>
          </div>
          <div className="kdjsa-ajwnkelds afkfjnkas-edsm mb-2">
            <div className="continueBtnDiv snasdj-sawdne">
              <button className="btn" onClick={() => {
                setScreen(0)
              }}>
                CONTINUE
                <div className="kdksa-ajwmd ">
                  <Icons iconNumber={7} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64} />
        </div>
      </div>
    </Flip>
  );
};

export default ProgressForm;