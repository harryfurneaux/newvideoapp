import React, { useState, useEffect } from "react";
import Icons from "../icons";
import CheckForm from "./CheckForm";
import Question from "./Questions";
//@ts-ignore
import Zoom from 'react-reveal/Fade';
//@ts-ignore

import Zoom1 from 'react-reveal/Zoom';

const CreateForm = ({
    setShowScreen,
    showScreen,
  }: {
    setShowScreen: any;
    showScreen: number;
  }) => {
    const [valuec, setValuechange] = useState('');
    const [selected, setselected] = useState(0);

    useEffect(() => {
      try {
        // Check if the input field is in focus and set the arrowBtn fill-opacity to 1 if it is
        document.getElementById("questionInput")!.addEventListener("focus", () => {
          document.getElementById("arrowBtn")!.style.opacity = "1";
          document.getElementById("arrowBtn")!.style.backgroundColor = "#ADB8FA";
          
          document.getElementById("questionInput")!.style.backgroundColor = "#fff";
          document.getElementById("questionInput")!.style.opacity = "1.0";
        });
    
        document.getElementById("questionInput")!.addEventListener("focusout", () => {
          document.getElementById("arrowBtn")!.style.opacity = "0.5";
          document.getElementById("arrowBtn")!.style.backgroundColor = "#ADB8FA";

          document.getElementById("questionInput")!.style.backgroundColor = "#EFF1FFD9";
          document.getElementById("questionInput")!.style.opacity = "0.85";
        });
      } catch (error) {
        
      }
    }, [showScreen]);


    return (
      <Zoom left big>
        <div className="kjkndask-ankdnwd">
        <div
          className={`leftSideHeader kjsfdkl-adsj ${
            showScreen >= 2 ? "w-100" : ""
          }`}
        >
          <div
            onClick={() => {
              if (showScreen == 1) {
                setShowScreen(0);
              } else if (showScreen == 2) {
                setShowScreen(1);
              } else if (showScreen == 3) {
                setShowScreen(2);
              } else if (showScreen == 4) {
                setShowScreen(3);
              } else if (showScreen == 5) {
                setShowScreen(4);
              }
            }}
            className="backButtonDiv"
          >
            <button className="hkjndankad-dnsd">
              <Icons iconNumber={29} />
            </button>
            <h5 className="mksaldkamaw-jdwa">Back</h5>
          </div>
          {showScreen == 2 ? (
            <button
              onClick={() => {
                setShowScreen(3);
              }}
              className="kjlma0o-dwa jkksjdf-awe"
            >
              <Icons iconNumber={41} />
              Add Question{" "}
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className={`kjdfkksd-aweinmd hkasjfdlmf-dsfsd ${showScreen==3?"kdjsf-awejdn":""}`} >
          <div className="kjdsfms-awddw2">
            <Icons iconNumber={36} />
            <Icons iconNumber={showScreen >= 2 ? 36 : 37} />
            <Icons iconNumber={showScreen >= 2 ? 36 : 37} />
            <Icons iconNumber={showScreen >= 3 ? 36 : 37} />
          </div>
          <div className="kjdfsajs0edjawe-232">
            <h4>
              {showScreen == 2
                ? "Which Questions?"
                : showScreen == 3
                ? "All Good?"
                : "What’s it About?"}
            </h4>
            <h5>
              {showScreen == 2
                ? "SELECT 3 QUESTIONS YOU’D LIKE TO ASK"
                : showScreen == 3
                ? "CHECK BEFORE PUBLISHING"
                : "ENTER ASKER SUBJECT"}
            </h5>
          </div>
          {showScreen == 2 ? (
            <Zoom1>
              <div className="kjdaflj-adjkwmd">
              <Question setselected={setselected} selected={selected} />
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <Question setselected={setselected} selected={selected}/>
              <div className="pos-rel">
                {selected>=3?<button    onClick={()=>{
                  setShowScreen(3)
                }} className="kjdflj0-jsads">
                CONTINUE
                <Icons iconNumber={85} />
                </button>:<button className="hkjdsf-dsjfin">
                  <span>{selected}</span> of <span>3</span> questions selected
                </button>}
                
              </div>
            </div>
            </Zoom1>
          ) : showScreen == 3 ? (
            <>
              <CheckForm showScreen={showScreen} setShowScreen={setShowScreen} />
            </>
          ) : (
            <div className="sfjkdfjsd-dsnaf">
              <div className={`djsfisdmo-sfmef ${valuec.length>5?"ijfako-asdm":""}`}>
                <input
                  placeholder="e.g Bar Staff Position Available "
                  onChange={(e)=>{
                    setValuechange(e.target.value)
                  }}
                  className="ojdfkak-ksmd"
                  value={valuec}
                  type="text"
                  id="questionInput"
                />
                <button id="arrowBtn" className={`no-sh arrowBtn ${valuec.length>5?"ijfako-asdm":""}`} onClick={() => setShowScreen(2)}>
                  <Icons iconNumber={38} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Zoom>
    );
  };

export default CreateForm