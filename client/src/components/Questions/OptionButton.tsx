import Icons from "../icons";

const OptionButtons = () => {
  return (
    <div className="option-btn">
      <button className="lamdl-anwid radiusLeft">
        <Icons iconNumber={31} />
        Your Questions
      </button>
      <button className="lamdl-anwid radiusRight">
        <Icons iconNumber={32} />
        Nearby
      </button>
    </div>
  );
}
export default OptionButtons