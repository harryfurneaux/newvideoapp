import Icons from "../icons"

const Back = ({ setMainScreen, setShowScreen }: { setMainScreen: any, setShowScreen: any }) => {
  return <div onClick={() => { }} className="skdmsa-dsad">
    <div onClick={() => {
        setMainScreen(2);
        setShowScreen(0);
      }} className="backButtonDiv backdrop-filter">
      <button className="hkjndankad-dnsd">
        <Icons iconNumber={29} />
      </button>
      <h5 className="mksaldkamaw-jdwa">Back</h5>
    </div>
    <div className="headerTitleDiv">
      <div><Icons iconNumber={31} /></div>
      <h5 className="mksaldkamaw-jdwa">Cleaner Job in Central</h5>
    </div>
  </div>
}

export default Back;