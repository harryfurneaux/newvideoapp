import { useEffect, useState } from "react";
import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";

const RecordForm = ({ setScreen }: { setScreen: any }) => {
  const [status, setStatus] = useState("waiting");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (status == "countdown") {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [status, count]);

  useEffect(() => {
    if (count == 0) {
      setStatus("recording");
      setTimeout(() => setScreen(2), 5000 + 1000);
    }
  }, [count]);

  return (
    <Fade>
      <div className="kjjfds-janwkea4">
        <div className="kjdflmas-sdmfe kamnask-asnw kljdnas-jdnwd">
          <div className='btn khjn-jnkawed' onClick={() => {
            if (status == "waiting") setStatus("countdown");
          }}>
            {
              status == "waiting" ? <Icons iconNumber={101} /> :
                status == "recoding" ? <Icons iconNumber={102} /> :
                  <Icons iconNumber={106 + count - 3} />
            }
          </div>
          <div className='kdjasldk-ajsdmkd'>
            <img src={require('../../images/i8.png')} />
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