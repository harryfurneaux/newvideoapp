import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

const MainForm = ({ showScreen, setshowScreen }: { showScreen: number, setshowScreen: any }) => {
  return (
    <div className="leftSideMain">
      <div className="kjkdsjnds-aned">
        <Container>
          <Row className="row-cols-3 row-cols-sm-4 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showFav showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
            <Col><Card showScreen={showScreen} setshowScreen={setshowScreen} /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainForm;