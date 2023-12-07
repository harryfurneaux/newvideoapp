import Icons from "../icons";
//@ts-ignore
import Flip from 'react-reveal/Flip'
const ShareForm = ({
  setShowScreen,
  showScreen,
}: {
  setShowScreen: any;
  showScreen: number;
}) => {
  return (
    <Flip right>
      <div className="kjjfds-janwkea">
        <div className="jhjij-sanwe kjljdfn-jadmw">
          <h3>Share Questions</h3>
          <h4 className="ksajdsd-sjad">
            Invite people to Answer
          </h4>
          <div className="copyLinkDiv">
            <button className="btn">
              <Icons iconNumber={44} />
              Copy Direct Link to Questions
            </button>
          </div>
          <div className="jkdslafj-asdemk">
            <div className="jkdsfs-dajem"></div>
            <h5>or</h5>
            <div className="jkdsfs-dajem"></div>
          </div>
          <div className="socialButtonsDiv">
            <button className="btn">
              <Icons iconNumber={3} />
              Share via Facebook
            </button>
            <button className="btn">
              <Icons iconNumber={4} />
              Share via Google
            </button>
            <button className="btn">
              <Icons iconNumber={5} />
              Share via LinkedIn
            </button>
          </div>
          <div className="continueBtnDiv">
            <button
              onClick={() => {
                setShowScreen(7);
              }}
              className="btn jhdfksjan-a0jwe"
            >
              CLOSE
              <Icons iconNumber={43} />
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64} />
        </div>
      </div>
    </Flip>
  );
};

export default ShareForm