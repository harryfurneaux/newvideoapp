import Icons from "../icons"

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen, interview }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any, interview: any }) => {
  return <div onClick={() => {
    setMainScreen(0);
    console.log(interview)
    // setshowScreen(1)
  }} className="candidateCard">
    <video controls style={{ position: 'relative' }} width={123} height={225}
      src={interview.videoLink}
    />
    <div className="cardInfoDiv">
      <h4>{interview?.interviewee?.name}</h4>
      <h5>
        <Icons iconNumber={32} />
        {interview?.interviewee?.location}</h5>
    </div>
    {
      showFav ? <div className="kndsaflef-fdsf">
        <Icons iconNumber={52} />
      </div> : <></>
    }

  </div>
}
export default Card