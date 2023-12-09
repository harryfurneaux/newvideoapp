import Icons from "../icons"

const Card=({showFav,showScreen,setshowScreen}:{showFav?:boolean,showScreen:number,setshowScreen:any})=>{
    return <div  onClick={()=>{
      setshowScreen(1)
    }} className="candidateCard">
      <img src={require('../../images/i12.png')}/>
      <div className="cardInfoDiv">
        <h4>Steven Aubrey</h4>
        <h5>
          <Icons iconNumber={32}/>
          London, UK</h5>
      </div>
      {
        showFav?<div className="kndsaflef-fdsf">
          <Icons iconNumber={52}/>
        </div>:<></>
      }
      
    </div>
    }
    export default Card