import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Icons from "../icons";

const MainForm = ({ setMainScreen, showScreen, setshowScreen }: { setMainScreen: any, showScreen: number, setshowScreen: any }) => {
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
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
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
            <Col className="p-0"><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainForm;