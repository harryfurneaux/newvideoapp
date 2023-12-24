import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import RightButtons2 from "../RightButtons2";
import Icons from "../icons";
//@ts-ignore
import { Flip } from "react-awesome-reveal"
import Notify from "../Notify";
import {

  FacebookShareButton,


  LinkedinShareButton,

} from "react-share";

const ShareForm = ({
  setMainScreen,
  setShowScreen,
  setPastScreen,
  showScreen,
}: {
  setMainScreen: any;
  setShowScreen: any;
  setPastScreen: any;
  showScreen: number;
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1013px)' });
  const [notify_show, setNotifyShow] = useState(false);

  return (
    <>
      <Notify title="Direct link copied!" show={notify_show} handleClose={() => setNotifyShow(false)} />
      <Flip direction="horizontal">
        <div className="kjjfds-janwkeashare" >
          <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video>
          <div className="jhjij-sanwe kjljdfn-jadmw" style={{
            paddingLeft: '33px',
            paddingTop: '32px'
          }}>
            <h3>Share Questions</h3>
            <h4 className="ksajdsd-sjad">
              Invite people to Answer
            </h4>
            <div className="copyLinkDiv">
              <button className="btn" onClick={() => {
                const linkToCopy: any = process.env.REACT_APP_FRONTEND_URL; // Replace with your custom link or text

                navigator.clipboard.writeText(linkToCopy).then(() => setNotifyShow(true))


              }}
              >
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
              <FacebookShareButton url="www.youtube.com" children={<button className="btn">
                <Icons iconNumber={3} />
                Share via Facebook
              </button>}></FacebookShareButton>
              {/* <button className="btn">
                <Icons iconNumber={3} />
                Share via Facebook
              </button> */}
              <button className="btn">
                <Icons iconNumber={4} />
                Share via Google
              </button>
              <LinkedinShareButton className="btn" url={process.env.REACT_APP_FRONTEND_URL || ''} children={

                <Icons iconNumber={5}></Icons>



              } />

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
        {/* <RightButtons2 setMainScreen={setMainScreen} setShowScreen={setShowScreen} setPastScreen={setPastScreen} hideMenu={isMobile ? true : false} /> */}
      </Flip>
    </>
  );
};

export default ShareForm