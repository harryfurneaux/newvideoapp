import Icons from "../icons";

const OptionButtons = ({ setMyQuestions }: { setMyQuestions: any }) => {
  return (
    <div className="option-btn">
      <button className="lamdl-anwid radiusLeft" onClick={() => setMyQuestions(true)}>
        <Icons iconNumber={31} />
        Your Questions
      </button>
      <button className="lamdl-anwid radiusRight" onClick={() => setMyQuestions(false)}>
        <Icons iconNumber={32} />
        Nearby
      </button>
    </div>
  );
}
export default OptionButtons