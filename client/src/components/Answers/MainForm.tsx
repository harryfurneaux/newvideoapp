import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

const MainForm = ({ setMainScreen, showScreen, setshowScreen }: { setMainScreen: any, showScreen: number, setshowScreen: any }) => {
  return (
    <div className="leftSideMain">
      <div className="kjkdsjnds-aned">
        <Container>
          <Row className="row-cols-3 row-cols-sm-4 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showFav showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainForm;