import Icons from "../icons"

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen, interview, handleFilteration, setSelectedInterview }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any, interview: any, handleFilteration: any, setSelectedInterview: any }) => {

  return <div onClick={() => {
    setSelectedInterview(interview);
  }} className="candidateCard" style={{ height: '100%' }}>
    <video style={{ position: 'relative', height: '100%', borderRadius: 10, width: '99%' }} width={123} height={225}
      src={interview.videoLink}
    />
    <div className="cardInfoDiv">
      <h4>{interview?.interviewee?.name}</h4>
      <h5>
        <Icons iconNumber={32} />
        {interview?.interviewee?.location}</h5>
    </div>
    {interview?.favourite ? (
      <div className='odjfks-amds'>
        <Icons iconNumber={65.5} />
      </div>
    ) : null}
  </div>
}
export default Card