import { useMediaQuery } from "react-responsive";
import Icons from "./icons"

const RightButtons2 = ({ hideMenu }: { hideMenu: boolean }) => {
  const isTab = useMediaQuery({ query: '(max-width: 1013px)' });

  return <div className={`kljadjfkl-jaem rightbuttons2 ${hideMenu ? "jkdslfsae" : isTab ? "lkhdfjksj-ajenw" : ""}`}>
    <button className="no-shadow circleButtons">
      <Icons iconNumber={45} />
      Preview
    </button>
    <button className="no-shadow circleButtons">
      <Icons iconNumber={46} />
      Edit
    </button>
    <button className="no-shadow circleButtons">
      <Icons iconNumber={47} />
      Share
    </button>
    <button className="no-shadow circleButtons">
      <Icons iconNumber={48} />
      Messages
    </button>
    <button className="no-shadow circleButtons">
      <Icons iconNumber={49} />
      Delete
    </button>
  </div>
}

export default RightButtons2