
import { useCallback, useEffect, useRef, useState } from "react";

import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";

import Webcam from "react-webcam";
import axios from "axios";

const RecordForm = ({ setScreen }: { setScreen: any }) => {
  const [status, setStatus] = useState("waiting");
  const [count, setCount] = useState(3);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [capturing, setCapturing] = useState(false);
  const [hasCaptured, setHasCaptured] = useState(false);
  const webcamRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);

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

      // }
      var formData = new FormData();

      const myFile = new File(
        [blob],
        "demo.mp4",
        { type: 'video/mp4' }
      );

      formData.append('file', myFile);


      axios.post('http://localhost:4000/video-uploading', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => console.log(res))


      setRecordedChunks([]);
      setHasCaptured(false);
    }
  }

  useEffect(() => {
    if (status == "countdown") {

      if (count == 0) {

        setStatus("recording");
        handleStartCaptureClick()

      }
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [status, count]);

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
          <div> <Webcam audio={true} style={{ borderRadius: '20px', position: 'relative' }} videoConstraints={videoConstraints} ref={webcamRef} /></div>

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
                status == "recoding" ? <Icons iconNumber={102} /> :
                  <Icons iconNumber={106 + count - 3} />
            }
          </div>
          <div className='kdjasldk-ajsdmkd'>
            {/* <img src={require('../../images/i8.png')} /> */}

          </div>
          <div className='kjfds-jandsa' >

          </div>
          <div className='kjjsad-awek' style={{
            width: "112px"
          }}>

          </div>
          <div className='kjdsia-ajdwnkd'>
            <Icons iconNumber={25} />
            <h5>What are your strengths and weaknesses?</h5>
            <div className='kjda-ejmnwae'>
              <Icons iconNumber={26} />
              <h6>30s</h6>
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