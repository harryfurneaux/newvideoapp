import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//@ts-ignore
import Icons from '../icons';
import VideoForm from '../Home/Video';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const RightButtons = ({ setMainScreen }: { setMainScreen?: any }) => {
  const isTab = useMediaQuery({ query: '(max-width: 1180px)' });


  return <div className={`kljadjfkl-jaem kjdlamkdl-asdj ${isTab ? "adaslkhdfjksj-ajenw" : ""}`}>
    <button className='no-shadow circleButtons' onClick={() => {
      setMainScreen(0)
    }}>
      <Icons iconNumber={isTab ? 70 : 68} />
      Favourite
    </button>
    <button className='no-shadow circleButtons' onClick={() => {
      setMainScreen(0)
    }}>
      <Icons iconNumber={isTab ? 71 : 69} />
      Edit
    </button>
    <button className='no-shadow circleButtons' onClick={() => {
      setMainScreen(0)
    }}>
      <Icons iconNumber={isTab ? 72 : 48} />
      Messages
    </button>
    <button className='no-shadow circleButtons' onClick={() => {
      setMainScreen(0)
    }}>
      <Icons iconNumber={isTab ? 73 : 49} />
      Delete
    </button>
  </div>
}

const Carousel = ({ selectedInterview, setMainScreen }: { selectedInterview?: any, setMainScreen?: any }) => {
  const [favourite, setFavourite] = useState(selectedInterview?.favourite || false);

  return (
    <div className='wh-100 kjsdfl-asjdm' style={{ position: 'absolute' }}>
      <VideoForm selectedInterview={selectedInterview} favourite={favourite} />
      <RightButtons setMainScreen={setMainScreen} />
    </div>
  )
};

export default Carousel;