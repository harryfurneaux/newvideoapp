import React, { useState } from "react";
import Icons from "../../components/icons";
const SignInForm = ({setshowScreen}:{setshowScreen:any}) => {
  const [isHoverOrActive, setisHoverOrActive] = React.useState(false);

    return (
        <div className="kjjfds-janwkea">
        <div className="jhjij-sanwe">
          <h3>Sign in</h3>
          <div className="socialButtonsDiv">
            <button className="btn" onClick={()=>{
              setshowScreen(3)
            }}>
              <Icons iconNumber={3} />
              Log in with Facebook
            </button>
            <button className="btn" onClick={()=>{
              setshowScreen(3)
            }}>
              <Icons iconNumber={4} />
              Log in with Google
            </button>
            <button className="btn" onClick={()=>{
              setshowScreen(3)
            }}>
              <Icons iconNumber={5} />
              Log in with LinkedIn
            </button>
          </div>
          <div className="jkdslafj-asdemk">
            <div className="jkdsfs-dajem"></div>
            <h5>or</h5>
            <div className="jkdsfs-dajem"></div>
          </div>

          <div className="socialButtonsDiv">
            <button className="btn" onClick={()=>{
                setshowScreen(3)
              }}>
              <Icons iconNumber={90} />
              Login in with Email
            </button>
          </div>
          
          <div className="continueBtnDiv">
            <button    
          onClick={()=>{
              setshowScreen(1);
            }} className="btn kjlsjadm-kdmsd">
              CONTINUE
              <Icons iconNumber={77}  />
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64}/>
        </div>
      </div>
    );
  };

  export default SignInForm;