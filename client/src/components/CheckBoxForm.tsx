import { useState } from "react";
import Icons from "./icons";

const CheckFormBox = ({ questions, forcedActive = false, recorded = [], noAction = false }: { questions: any, forcedActive?: boolean, recorded?: any, noAction?: boolean }) => {
  const _isActive = (id: string) => {
    return recorded?.length && !!recorded.find((aid: any) => aid._id === id && aid?.recording);
  };
  
  const [isActive, setIsactive] = useState(forcedActive || _isActive(questions._id) ? 1 : 0);
  
  return (
    <button
      onMouseEnter={noAction || forcedActive || _isActive(questions._id) ? () => { } : () => {
        if (isActive == 0) {
          setIsactive(1)
        }
      }}
      onMouseLeave={noAction || forcedActive || _isActive(questions._id) ? () => { } : () => {
        if (isActive != 2)
          setIsactive(0)
      }}
      onClick={noAction || forcedActive || _isActive(questions._id) ? () => { } : () => {
        if (isActive != 2) {
          setIsactive(2)
        } else {
          setIsactive(0)
        }
      }}
      className="kadfmsod-wem sadamodajm-e dsjskd-kads no-shadow check-item"
    >
      <div>
        <Icons iconNumber={isActive > 0 || _isActive(questions._id) ? 15 : 24} />
      </div>
      <h5>{questions.question}</h5>
      <div className="timing" style={{ marginLeft: 10 }}>
        {" "}
        <Icons iconNumber={18} />
        <h6>{questions.time_duration}</h6>
      </div>
    </button>
  )
}

export default CheckFormBox