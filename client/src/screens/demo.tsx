import { useEffect, useState } from "react"
import VideoForm from "../components/Home/Video"
import Icons from "../components/icons"
import RightLayout from "../components/rightLayout2"
import axios from "axios"
import LinearBackground from "../components/LinearBackground"
import Carousel from "../components/Demo/Carousel"
import BottomMenu from "../components/Demo/bottomMenu"
import BackButton from "../components/Demo/backButton"

interface Interview {
  videoLink: string;
  interviewee?: {
    _id?: string;
    name?: string;
    email?: string;
    birth_date?: string;
    location?: string;
    company_name?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
  favourite?: any,
  id?: any
}

const DemoScreen = ({ setMainScreen }: { setMainScreen: any }) => {
  const [mainAllInterviews, setMainAllInterviews] = useState<Array<any>>([]);
  const [selectedInterview, setSelectedInterview] = useState<any>()

  const handleFilteration = (array: any) => {
    const questionsArray: Array<Interview> = array?.map((obj: any) => ({
      videoLink: obj.questions[0].video_url,
      interviewee: obj.interviewee,
      interviewer: obj.interviewer,
      id: obj._id
    }));

    setSelectedInterview(questionsArray[0])
    setMainAllInterviews(questionsArray)
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/interviews/random',
    ).then((res) => {
      handleFilteration(res.data)
    })
  }, [])

  const prevInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const prevIndex = currentIndex - 1;
      if (prevIndex == -1) {
        setSelectedInterview(mainAllInterviews[mainAllInterviews.length - 1]);
      } else {
        setSelectedInterview(mainAllInterviews[prevIndex]);
      }
    }
  };

  const nextInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex > (mainAllInterviews.length - 1)) {
        setSelectedInterview(mainAllInterviews[0]);
      } else {
        setSelectedInterview(mainAllInterviews[nextIndex]);
      }
    }
  };

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page">
        <LinearBackground style={{ width: '100%' }} />
        <div className="leftSideHeader kjsf-ajmwe w-100">
          <BackButton setMainScreen={setMainScreen} />
        </div>

        <div className="lkljdfsl-sifkmd" style={{ width: 'auto', left: 0 }} onClick={prevInterview}>
          <Icons iconNumber={66} />
        </div>
        <Carousel selectedInterview={selectedInterview} setMainScreen={setMainScreen} />
        <div className="lkljdfsl-sifkmd" style={{ width: 'auto', right: 0 }} onClick={nextInterview}>
          <Icons iconNumber={67} />
        </div>
        <div className="dkfnmsd-awde">
          <div className="wh-100 l1">
            <VideoForm />
          </div>
          <div className="wh-100 l2">
            <VideoForm />
          </div>
        </div>
        <div className="ldkf-kasmdaw"></div>

        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout setMainScreen={''} setShowScreen={''} />
    </div>
    
    // <div className="pageContainer" onClick={(e: any) => {
    //   const { id } = e.target
    //   if (id === 'parentDiv') {
    //     setMainScreen(0)
    //   }
    //   else {
    //     e.stopPropagation()
    //   }
    // }}
    // >
    //   <>

    //   </>
    //   {/* <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page" id="parentDiv"  >
    //     <div className="lkljdfsl-sifkmd" style={{ width: 'auto', left: 0 }} onClick={prevInterview}>
    //       <Icons iconNumber={66} />
    //     </div>
    //     <div className="leftSideHeader">

    //       <div className='wh-100 kjsdfl-asjdm' style={{ height: 523, width: 326 }}>
    //         <VideoForm selectedInterview={selectedInterview} favourite={''} />
    //       </div>
    //     </div>
    //     <div className="lkljdfsl-sifkmd" style={{ width: 'auto', right: 0 }} onClick={nextInterview}>
    //       <Icons iconNumber={67} />
    //     </div>

    //   </div> */}

    //   <RightLayout setMainScreen={''} setShowScreen={''} />
    // </div>
  )
}

export default DemoScreen