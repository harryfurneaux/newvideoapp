import React, { useState } from "react";
import Icons from "./icons";

const CheckFormBox = () => {
  const [isActive, setIsactive] = useState(0);
  return <button
    onMouseEnter={() => {
      if (isActive == 0) {
        setIsactive(1)
      }
    }}
    onMouseLeave={() => {
      if (isActive != 2)
        setIsactive(0)
    }}
    onClick={() => {
      if (isActive != 2) {
        setIsactive(2)
      }
      else { setIsactive(0) }
    }}
    className="kadfmsod-wem sadamodajm-e dsjskd-kads no-shadow check-item"
  >
    <div>
      <Icons iconNumber={isActive > 0 ? 15 : 24} />
    </div>
    <h5>Tell me about your relevant experience</h5>
    <div className="timing">
      {" "}
      <Icons iconNumber={18} />
      <h6>30s</h6>
    </div>
  </button>
}

export default CheckFormBox