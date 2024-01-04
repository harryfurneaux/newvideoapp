import { useEffect, useState } from "react"
import VideoForm from "../components/Home/Video"
import Icons from "../components/icons"
import RightLayout from "../components/rightLayout2"
import axios from "axios"

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
// {
//     id: "6593ebd6c7759940780442b7",
//     videoLink: "https://api.videointerviews.io/assets/interviews_videos/a37b3741-b5fc-4a92-886d-f25ff24e3bf5_demo.mp4",
//     questions: [
//         {
//             question_id: {
//                 _id: "6589302e5f983925f8afb612",
//                 question: "Why do you want to work at this company?",
//                 time_duration: 30,
//                 createdAt: "2023-12-25T07:33:02.630Z",
//                 updatedAt: "2023-12-25T07:33:02.630Z",
//                 __v: 0
//             },

//             _id: "6593ebd6c7759940780442b8"
//         }
//     ],
//     job_id: "65939007c775994078044217",
//     interviewee: {
//         _id: "6588b0070935ae35af976dcf",
//         name: "Tommy Banes",
//         email: "harryfurneaux@gmail.com",
//         createdAt: "2023-12-24T22:26:15.489Z",
//         updatedAt: "2024-01-02T04:27:20.938Z",
//         __v: 0,
//         company_name: "Video Interviews",
//         location: "London, UK"
//     },
//     interviewer: {
//         _id: "6588b0070935ae35af976dcf",
//         name: "Tommy Banes",
//         email: "harryfurneaux@gmail.com",
//         createdAt: "2023-12-24T22:26:15.489Z",
//         updatedAt: "2024-01-02T04:27:20.938Z",
//         __v: 0,
//         company_name: "Video Interviews",
//         location: "London, UK"
//     },
//     favourite: false,
//     createdAt: "2024-01-02T10:56:22.741Z",
//     updatedAt: "2024-01-02T10:56:22.741Z",
//     __v: 0
// }

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
    return (<div className="pageContainer" onClick={(e: any) => {
        const { id } = e.target

        if (id === 'parentDiv') {
            setMainScreen(0)
        }
        else {
            e.stopPropagation()
        }

    }}>


        <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page" id="parentDiv"  >
            <div className="lkljdfsl-sifkmd" style={{ width: 'auto', left: 0 }} onClick={prevInterview}>
                <Icons iconNumber={66} />
            </div>
            <div className="leftSideHeader">

                <div className='wh-100 kjsdfl-asjdm'>
                    <VideoForm selectedInterview={selectedInterview} favourite={''} />
                </div>
            </div>
            <div className="lkljdfsl-sifkmd" style={{ width: 'auto', right: 0 }} onClick={nextInterview}>
                <Icons iconNumber={67} />
            </div>

        </div>

        <RightLayout setMainScreen={''} setShowScreen={''} />
    </div>)
}

export default DemoScreen