import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Icons from "../icons";
//@ts-ignore
import Flip from 'react-reveal/Flip'

const ProgressForm = ({ setScreen }: { setScreen: any }) => {
  return (
    <Flip right>
      <div className="kjjfds-janwkea knlsdj0wjew">
        <div onClick={() => {
          setScreen(4)
        }} className="kjdslfk-sjadnkwe">
          <CircularProgressbarWithChildren
            strokeWidth={8}
            value={33}
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
              <h5>33%</h5>
              <h6>1 OF 3</h6>
            </div>
            <div className="knl-masdkw">
              <Icons iconNumber={23} />
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="ldjkfsa-jwme">
          <div className="d-flex">
            <Icons iconNumber={22} />
            <h5>Awesome!</h5>
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