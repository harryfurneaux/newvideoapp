import React, { useState } from "react";
import Icons from "../icons";

const Question = ({ setselected, selected, questions, questionIds, setQuestionIds }: { setselected: any, selected: number, questions: any, questionIds: any, setQuestionIds: any }) => {
  const [isHoverOrActive, setisHoverOrActive] = React.useState(false);

  return (
    <div
      key={questions._id}
      className={`jsfkms-akmdwa ${isHoverOrActive ? "ksajdklsa" : "hasdkjashd-d"}`}
      onClick={() => {


        if (isHoverOrActive == true) {

          const questionData: any = [...questionIds]
          const index = questionData.indexOf(questions._id)
          questionData.splice(index, 1)
          setQuestionIds(questionData)
          setselected(--selected)
          setisHoverOrActive(!isHoverOrActive)
        }
        else {
          if (questionIds?.length < 3) {

            const questionData: any = [...questionIds]
            questionData.push(questions._id)

            setQuestionIds(questionData)


            setselected(++selected)
            setisHoverOrActive(!isHoverOrActive)
          }

        }





      }}
    >
      <div className="d-flex align-items-center">
        <Icons iconNumber={isHoverOrActive ? 40 : 39} />
        <h5>{questions.question}</h5>
      </div>
      <div>
        <div className=" ">
          <Icons iconNumber={26} />
          <h6>{`${questions.time_duration}s`}</h6>
        </div>
      </div>
    </div>
  );
};
export default Question
