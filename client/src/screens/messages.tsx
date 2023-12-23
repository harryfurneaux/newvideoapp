import React, { useEffect, useState } from "react";
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
import { useAuth } from "../hooks/useAuth";
import { StreamChat } from 'stream-chat'
function View({ mainScreen, setMainScreen, chatUser }: { mainScreen: number, setMainScreen: any, chatUser: any }) {
  const [showScreen, setShowScreen] = useState(1);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [chatClient, setChatClient] = useState<any>();
  const [channel, setChannel] = useState<any>();
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState<any>('');
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTab = useMediaQuery({ query: '(max-width: 1013px)' });
  const { user } = useAuth()

  const api = process.env.STREAM_CHAT_API_KEY
  const secretKey = process.env.STREAM_CHAT_SECRET
  const userID = user?.id

  console.log('chat usre', chatUser)
  useEffect(() => {
    const client = StreamChat.getInstance('hz7uw3t9nzga')
    if (user) {
      console.log("user datga", user)

      client.devToken(user?.id)
      client.connectUser(
        { id: user?.id }, user?.chat.token
      );
      setChatClient(client)
      const channel = client.channel('messaging', {
        members: [chatUser?.interviewer._id, user.id],
        created_by_id: user.id,
      });
      channel.watch();
      console.log("chanle", channel)
      setChannel(channel);
      console.log("chanle", channel.state.messages)

      setMessages(channel.state.messageSets);
    }

    //  return {
    //     if (channel) {
    //       // Stop watching the channel
    //       channel.stopWatching();

    //       // Delete the channel upon component unmounting
    //       channel.delete().then(() => {
    //         console.log('Channel deleted successfully');
    //       }).catch((error: any) => {
    //         console.error('Error deleting channel:', error);
    //       });
    //     }
    //   };
  }, [])


  const sendMessage = async () => {
    if (text.trim() !== '') {
      const sentMessage = await channel.sendMessage({ text });
      // console.log("messa retunr", message)
      // setMessages([...messages, sentMessage.message]);
      setText('');
    }
  };




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
                <h6>{user?.name}</h6>
              </div>
              {/* <button className="edit">
                <PiPencilSimpleLine />
              </button> */}
            </div>
            <div className="message-room selected shadow-sm">
              <Icons iconNumber={95} />
              <div className="person-content w-100">
                <div className="d-flex justify-content-between">
                  <h5>{chatUser?.interviewer.name}</h5>
                  {/* <p>5:31 AM</p> */}
                </div>
                {/* <h4>Channel name changed to hanna</h4> */}
              </div>
            </div>
            {/* <div className="message-room">
              <Icons iconNumber={95} />
              <div className="person-content w-100">
                <div className="d-flex justify-content-between">
                  <h5>Social Demo</h5>
                  <p>5:30 AM</p>
                </div>
                <h4>We'd like to invite you to becom...</h4>
              </div>
            </div> */}
          </div>
          <Card className="col-7 message-right">
            <Card.Header as="h5" className="message-header shadow-sm">
              <div className="message-heading">
                <Icons iconNumber={95} />
                <h6>{chatUser?.interviewer.name}</h6>
              </div>
              <AiFillInfoCircle color="gray" />
            </Card.Header>
            <Card.Body className="message-body">
              {messages[0]?.messages.map((message: any, index: any) => (
                <div key={index}>{message.text}</div>
              ))}
            </Card.Body>
            <Card.Footer className="message-footer d-flex">
              <Button variant="light"><MdAddCircleOutline color="gray" /></Button>
              <InputGroup onChange={(e: any) => setText(e.target.value)}  >
                <Form.Control placeholder="Type your message" />
                <Button variant="outline-secondary" id="button-addon2"><FaRegSmile /></Button>
              </InputGroup>
              <Button variant="light"><FaCircleArrowRight color="gray" onClick={sendMessage} /></Button>
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
