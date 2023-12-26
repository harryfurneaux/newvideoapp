
import { useCallback, useEffect, useRef, useState } from "react";

import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";

import Webcam from "react-webcam";

const RecordForm = ({ setScreen, jobViewContext, recorded, setRecorded }: { setScreen: any, jobViewContext: any, recorded: any, setRecorded: any }) => {
  const [question, setQuestion] = useState<any>(null);
  const [status, setStatus] = useState("waiting");
  const [count, setCount] = useState(3);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [capturing, setCapturing] = useState(false);
  const [hasCaptured, setHasCaptured] = useState(false);
  const [timeDuration, setTimeDuration] = useState(30);
  const [timeDurationBGWidth, setTimeDurationBGWidth] = useState(0);

  const webcamRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);

  useEffect(() => {
    if (jobViewContext?.questions?.length) {
      const _question = jobViewContext.questions.find((q: any) => !recorded.find((r: any) => r._id === q._id));
      if (_question) {
        setQuestion(_question);
        setTimeDuration(_question.time_duration);
      }
    }
  }, []);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = ({ data }: any) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const handleStopCaptureClick = () => {
    if (mediaRecorderRef && webcamRef) {
      mediaRecorderRef.current.stop();
      setCapturing(false);
      setStatus('waiting');
      setHasCaptured(true);
    }
  };

  useEffect(() => {
    if (hasCaptured) {
      handleSaveVideo();
    }
  }, [hasCaptured, recordedChunks]);

  const handleSaveVideo = () => {

    if (recordedChunks.length > 0) {

      const blob = new Blob(recordedChunks, {
        type: "video/mp4"
      });

      const myFile = new File(
        [blob],
        "demo.mp4",
        { type: 'video/mp4' }
      );

      const _recorded = [...recorded];
      const idx = _recorded.findIndex((_r: any) => _r._id === question._id);
      if (idx > -1) {
        _recorded[idx].recording = myFile;
      } else {
        _recorded.push({ ...question, recording: myFile });
      }
      setRecorded(_recorded);
      setRecordedChunks([]);
      setHasCaptured(false);
      setScreen(2);
    }
  }

  useEffect(() => {
    if (status == "countdown") {
      if (count == 0) {
        setStatus("recording");
        handleStartCaptureClick();
      }
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [status, count]);

  const calculateWidth = () => {
    const duration = Math.max(0, Math.min(timeDuration, 30));
    const maxWidth = 304;
    const minWidth = 0;
    const width = maxWidth - (maxWidth / 30) * duration;
    setTimeDurationBGWidth(Math.max(minWidth, width));
  }

  useEffect(() => {
    if (status === 'recording') {
      if (timeDuration <= 0) {
        setStatus('waiting');
        handleStopCaptureClick();
      }
      setTimeout(() => {
        calculateWidth();
        setTimeDuration(timeDuration - 1);
      }, 1000);
    }
  }, [status, timeDuration]);

  const videoConstraints = {
    width: 320,
    height: 520,
    facingMode: "user",
  };

  return (
    <Fade>
      <div className="kjjfds-janwkea4">
        <div
          style={{ width: 320, height: 520 }}
          className="kjdflmas-sdmfe kamnask-asnw kljdnas-jdnwd"
        >
          <div> <Webcam mirrored={true} audio={true} style={{ borderRadius: '20px', position: 'relative' }} videoConstraints={videoConstraints} ref={webcamRef} /></div>

          <div
            className='btn khjn-jnkawed' onClick={() => {

              if (status == 'recording') {
                handleStopCaptureClick()
              } else if (status == "waiting") {
                setStatus("countdown")
              };
            }}>
            {
              status == "waiting" ? <Icons iconNumber={101} /> :
                status == "recoding" ? null :
                  <Icons iconNumber={106 + count - 3} />
            }
          </div>
          <div className='kdjasldk-ajsdmkd'>
            {/* <img src={require('../../images/i8.png')} /> */}

          </div>
          <div className='kjfds-jandsa' >
            <div className='kjjsad-awek' style={{
              transition: 'all 500ms',
              left: 0,
              bottom: 0,
              width: timeDurationBGWidth
            }}></div>
          </div>
          <div className='kjdsia-ajdwnkd'>
            <Icons iconNumber={25} />
            <h5>{question?.question || 'What are your strengths and weaknesses?'}</h5>
            <div className='kjda-ejmnwae'>
              <Icons iconNumber={26} />
              <h6>{timeDuration >= 0 ? timeDuration : 0}s</h6>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe1">
          <Icons iconNumber={63} />
        </div>
      </div>
    </Fade>
  );
};

export default RecordForm;