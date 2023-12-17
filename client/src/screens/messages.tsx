import React, { useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import BackMenu from "../components/Questions/BackMenu";
import OptionButtons from "../components/Questions/OptionButton";
import QuestionForm from "../components/Questions/QuestionsForm";
import CreateForm from "../components/Questions/CreateForm";
import ShareForm from "../components/Questions/ShareForm";
import ViewForm from "../components/Questions/ViewForm";
import { useMediaQuery } from "react-responsive";
import RightButtons from "../components/RightButtons";
import BackButton from "../components/Auth/backButton";
import { InputGroup, Form, Button, Card } from "react-bootstrap";
import { PiPencilSimpleLine } from "react-icons/pi";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

function View({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setShowScreen] = useState(1);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTab = useMediaQuery({ query: '(max-width: 1013px)' });

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg1">
        <div className="leftSideHeader">
          <BackButton showScreen={showScreen} setshowScreen={setShowScreen} />
        </div>
        <div className="message message-content row m-0">
          <div className="col-5 message-left bg-body-tertiary">
            <div className="header d-flex justify-content-between align-items-center">
              <div className="message-heading">
                <Icons iconNumber={95} />
                <h6>dark-recipe-1</h6>
              </div>
              <button className="edit">
                <PiPencilSimpleLine />
              </button>
            </div>
            <div className="message-room selected shadow-sm">
              <Icons iconNumber={95} />
              <div className="person-content w-100">
                <div className="d-flex justify-content-between">
                  <h5>hanna</h5>
                  <p>5:31 AM</p>
                </div>
                <h4>Channel name changed to hanna</h4>
              </div>
            </div>
            <div className="message-room">
              <Icons iconNumber={95} />
              <div className="person-content w-100">
                <div className="d-flex justify-content-between">
                  <h5>Social Demo</h5>
                  <p>5:30 AM</p>
                </div>
                <h4>We'd like to invite you to becom...</h4>
              </div>
            </div>
          </div>
          <Card className="col-7 message-right">
            <Card.Header as="h5" className="message-header shadow-sm">
              <div className="message-heading">
                <Icons iconNumber={95} />
                <h6>dark-recipe-1</h6>
              </div>
              <AiFillInfoCircle color="gray" />
            </Card.Header>
            <Card.Body className="message-body">

            </Card.Body>
            <Card.Footer className="message-footer d-flex">
              <Button variant="light"><MdAddCircleOutline color="gray" /></Button>
              <InputGroup>
                <Form.Control placeholder="Type your message" />
                <Button variant="outline-secondary" id="button-addon2"><FaRegSmile /></Button>
              </InputGroup>
              <Button variant="light"><FaCircleArrowRight color="gray" /></Button>
            </Card.Footer>
          </Card>
        </div>
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setShowScreen} />
    </div>
  );
}

export default View;
