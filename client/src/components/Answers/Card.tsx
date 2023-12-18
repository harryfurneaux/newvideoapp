import Icons from "../icons"

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any }) => {
  return <div onClick={() => {
    setMainScreen(0);
    // setshowScreen(1)
  }} className="candidateCard">
    <img src={require('../../images/i12.png')} />
    <div className="cardInfoDiv">
      <h4>Steven Aubrey</h4>
      <h5>
        <Icons iconNumber={32} />
        London, UK</h5>
    </div>
    {
      showFav ? <div className="kndsaflef-fdsf">
        <Icons iconNumber={52} />
      </div> : <></>
    }

  </div>
}
export default Card