import axios from "axios";
import Icons from "../icons"
import { CiHeart } from "react-icons/ci";

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen, interview, handleFilteration }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any, interview: any, handleFilteration: any }) => {
  return <div onClick={() => {
    // setMainScreen(0);
    // console.log(interview)
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
      </div> :
        <div className="kndsaflef-fdsf">
          <CiHeart color="red" style={{ height: "26px", width: "26px" }} onClick={() => {


            axios.patch(process.env.REACT_APP_BACKEND_URL + '/interviews/' + interview.id, {

              favourite: true
            }).then((res) => handleFilteration(res.data)).catch((err) => err)




          }} />
        </div>
    }

  </div>
}
export default Card