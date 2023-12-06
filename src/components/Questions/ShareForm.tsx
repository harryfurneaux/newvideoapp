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
          <h3>Some final details...</h3>
          <h4 className="ksajdsd-sjad">
            If you don’t have a company, just leave it blank
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
              Log in with Facebook
            </button>
            <button className="btn">
              <Icons iconNumber={4} />
              Log in with Google
            </button>
            <button className="btn">
              <Icons iconNumber={5} />
              Log in with LinkedIn
            </button>
          </div>
  
          <div className="continueBtnDiv">
            <button
              onClick={() => {
                setShowScreen(5);
              }}
              className="btn jhdfksjan-a0jwe"
            >
              I’ll do it later
              <Icons iconNumber={43} />
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64}/>
        </div>
      </div>
      </Flip>
    );
  };

export default ShareForm