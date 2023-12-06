import Icons from "../icons";
//@ts-ignore
import Fade from 'react-reveal/Fade'
const RecordForm = ({setScreen}:{setScreen:any}) => {
    return (
      <Fade>
      <div className="kjjfds-janwkea4">
        {/* <img src={require("../../images/i6.png")} /> */}
        <div className="kjdflmas-sdmfe kamnask-asnw kljdnas-jdnwd">
          <div className='btn khjn-jnkawed' onClick={()=>{
            setScreen(2)
          }}>
          <img className='' src={require('../../images/i7.png')}/>
  
          </div>
          <div className='kdjasldk-ajsdmkd'>
            <img src={require('../../images/i8.png')}/>
          </div>
          <div className='kjfds-jandsa' >
            
          </div>
          <div className='kjjsad-awek' style={{
            width:"112px"
          }}>
            
          </div>
          <div className='kjdsia-ajdwnkd'>
          <Icons iconNumber={25}/>
            <h5>What are your strengths and weaknesses?</h5>
            <div className='kjda-ejmnwae'>
              <Icons iconNumber={26}/>
              <h6>30s</h6>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe1">
          <Icons iconNumber={63}/>
        </div>
      </div>
      </Fade>
    );
  };

  export default RecordForm;