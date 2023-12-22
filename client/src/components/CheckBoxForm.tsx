import { useState } from "react";
import Icons from "./icons";

const CheckFormBox = ({ questions, forcedActive = false }: { questions: any, forcedActive?: boolean }) => {
  const [isActive, setIsactive] = useState(forcedActive ? 1 : 0);

  return (
    <button
      onMouseEnter={forcedActive ? () => { } : () => {
        if (isActive == 0) {
          setIsactive(1)
        }
      }}
      onMouseLeave={forcedActive ? () => { } : () => {
        if (isActive != 2)
          setIsactive(0)
      }}
      onClick={forcedActive ? () => { } : () => {
        if (isActive != 2) {
          setIsactive(2)
        } else {
          setIsactive(0)
        }
      }}
      className="kadfmsod-wem sadamodajm-e dsjskd-kads no-shadow check-item"
    >
      <div>
        <Icons iconNumber={isActive > 0 ? 15 : 24} />
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