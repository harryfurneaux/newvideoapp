import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
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
  const [linkToCopy, setLinkToCopy] = useState<any>(process.env.REACT_APP_FRONTEND_URL);

  function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  useEffect(() => {
    setLinkToCopy(`${process.env.REACT_APP_FRONTEND_URL}/${makeid(10)}`);
  }, []);

  return (
    <>
      <Notify title="Direct link copied!" show={notify_show} handleClose={() => setNotifyShow(false)} />
      <Flip direction="horizontal">
        <div className="kjjfds-janwkea">
          {/* <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video> */}
          <div className="jhjij-sanwe kjljdfn-jadmw" style={{
            paddingLeft: '33px',
            paddingRight: '33px',
            paddingTop: '32px'
          }}>
            <h3>Share Questions</h3>
            <h4 className="ksajdsd-sjad">
              Invite people to Answer
            </h4>
            <div className="copyLinkDiv">
              <button className="btn" style={{
                paddingLeft: 40,
                paddingRight: 30
              }} onClick={() => {
                navigator.clipboard.writeText(linkToCopy).then(() => setNotifyShow(true))
              }}>
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
              <FacebookShareButton className="btn" url={linkToCopy} children={
                <button className="btn">
                  <Icons iconNumber={3} />
                  Share via Facebook
                </button>
              } />
              <LinkedinShareButton className="btn" url={linkToCopy} children={
                <button className="btn">
                  <Icons iconNumber={5}></Icons>
                  Share via LinkedIn
                </button>
              } />
            </div>
            <div className="continueBtnDiv">
              <button onClick={() => {
                setShowScreen(7);
              }} className="btn jhdfksjan-a0jwe">
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
    </>
  );
};

export default ShareForm