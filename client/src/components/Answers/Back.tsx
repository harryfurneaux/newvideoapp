import Icons from "../icons"

const Back = ({ setMainScreen, setShowScreen }: { setMainScreen: any, setShowScreen: any }) => {
  return <div onClick={() => { }} className="skdmsa-dsad">
    <div className="backButtonDiv backdrop-filter">
      <button className="hkjndankad-dnsd">
        <Icons iconNumber={29} />
      </button>
      <h5 className="mksaldkamaw-jdwa">Back</h5>
    </div>
    <div className="headerTitleDiv">
      <div onClick={() => {
        setMainScreen(1);
        setShowScreen(7);
      }}><Icons iconNumber={31} /></div>
      <h5 className="mksaldkamaw-jdwa">Cleaner Job in Central</h5>
    </div>
  </div>
}

export default Back;