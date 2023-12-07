import { OverlayTrigger } from 'react-bootstrap';
import Icons from './icons';

import profile_img from "../images/Profile Pic.svg";
import company_img from "../images/Vector.svg";
import location_img from "../images/Location.svg";
import security_img from "../images/password.svg";
import creditcard_img from "../images/Credit Card.svg";
import help_img from "../images/help.svg";
import privacy_img from "../images/privacy.svg";
import contact_img from "../images/Contact.svg";

const SettingMenuIcon = () => {
  return (
    <OverlayTrigger trigger="click" placement="left" overlay={
      <div className="overlay text-white px-5 py-3">
        <div className="text-center">
          <img src={profile_img} />
          <h5>User Name</h5>
          <p className="fw-light"><img src={company_img} /> Company</p>
          <p className="fw-light"><img src={location_img} /> Location</p>
        </div>
        <div className="overlay-part my-3 px-5 py-1">
          <div className="my-3"><img src={security_img} />&emsp;Account & Security</div>
          <div className="my-3"><img src={creditcard_img} />&emsp;Payment Settings</div>
        </div>
        <div className="overlay-part my-3 px-5 py-1">
          <div className="my-3"><img src={help_img} />&emsp;Help Center</div>
          <div className="my-3"><img src={privacy_img} />&emsp;Privacy & Terms</div>
          <div className="my-3"><img src={contact_img} />&emsp;Contact Us</div>
        </div>
        <div className='text-center'>
          <span className='border-bottom p-1'>LOG OUT</span>
        </div>
      </div>
    } rootClose>
      <button className="btn no-shadow">
        <Icons iconNumber={1} />
      </button>
    </OverlayTrigger>
  )
}

export default SettingMenuIcon;