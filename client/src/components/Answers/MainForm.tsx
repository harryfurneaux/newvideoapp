import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Icons from "../icons";
import axios from "axios";
import { useEffect, useState } from "react";

const MainForm = ({ setMainScreen, showScreen, setshowScreen }: { setMainScreen: any, showScreen: number, setshowScreen: any }) => {
  const [allInterviews, setAllInterviews] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/interviews',
    ).then(response => {
      const questionsArray = response.data.map((obj: any) => ({
        videoLink: obj.questions[0].video_url,
        interviewee: obj.interviewee
      }));
      setAllInterviews(questionsArray)

      console.log(allInterviews)
    })
  }, [])

  console.log(allInterviews)
  return (
    <div className="leftSideMain">
      <div className="option-btn">
        <button className="lamdl-anwid radiusLeft">
          <Icons iconNumber={50} />
          Your Answers
        </button>
        <button className="lamdl-anwid radiusRight">
          <Icons iconNumber={32} />
          Nearby
        </button>
      </div>
      <div className="kdhfkjjdsfo">
        <Icons iconNumber={32} />
        <h5 className="mksaldkamaw-jdwa">London, UK</h5>
      </div>
      <div className="leftSideContent">
        <Container>
          <Row className="row-cols-3 row-cols-sm-4 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {allInterviews.map((interview, index) => (
              // <Col key={index} interview={interview} />
              <Col className="p-0" key={index}><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} interview={interview} /></Col>
            ))}

            {/* <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showFav showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainForm;