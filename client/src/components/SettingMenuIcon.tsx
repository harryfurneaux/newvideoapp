import { useState } from "react";
import { OverlayTrigger, CloseButton } from 'react-bootstrap';
// @ts-ignore
import $ from "jquery";
import Icons from './icons';

import profile_img from "../images/Profile Pic.svg";
import company_img from "../images/Vector.svg";
import location_img from "../images/Location.svg";
import security_img from "../images/password.svg";
import creditcard_img from "../images/Credit Card.svg";
import help_img from "../images/help.svg";
import privacy_img from "../images/privacy.svg";
import contact_img from "../images/contact.svg";
import PrivacyTermsModal from './Modals/privacy_terms';
import AccountSecurityModal from "./Modals/account_security";
import PaymentSettingModal from "./Modals/payment_setting";

$(function () {
  $(".btn-close").hide();

  $(".btn-close").click(function () {
    // @ts-ignore
    $(this).hide();
  });

  $(".btn-show").click(function () {
    $(".btn-close").show();
  });

  $(window).click(function () {
    if ($(".overlay.show").length == 0) {
      $(".btn-close").hide();
    }
  })
});

const SettingMenuIcon = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleAccountClose = () => setShowAccount(false);
  const handleAccountShow = () => {
    $(".overlay").hide();
    setShowAccount(true);
  }

  const handlePaymentClose = () => setShowPayment(false);
  const handlePaymentShow = () => {
    $(".overlay").hide();
    setShowPayment(true);
  }

  const handlePrivacyClose = () => setShowPrivacy(false);
  const handlePrivacyShow = () => {
    $(".overlay").hide();
    setShowPrivacy(true);
  }

  return (
    <>
      <CloseButton className="overlay" variant="white" />
      <OverlayTrigger trigger="click" placement="left" overlay={
        <div className="overlay text-white">
          <div className="header text-center">
            <img src={profile_img} className="profile" />
            <h5>User Name</h5>
            <div className="desc"><img src={company_img} /> Company</div>
            <div className="desc"><img src={location_img} /> Location</div>
          </div>
          <div className="overlay-part">
            <div onClick={handleAccountShow}>
              <img src={security_img} />Account & Security
            </div>
            <div onClick={handlePaymentShow}>
              <img src={creditcard_img} />Payment Settings
            </div>
          </div>
          <div className="overlay-part">
            <div>
              <img src={help_img} />Help Center
            </div>
            <div onClick={handlePrivacyShow}>
              <img src={privacy_img} />Privacy & Terms
            </div>
            <div>
              <img src={contact_img} />Contact Us
            </div>
          </div>
          <div className='text-center logout'>
            <span>LOG OUT</span>
          </div>
        </div>
      } rootClose>
        <button className="btn btn-show no-shadow">
          <Icons iconNumber={1} />
        </button>
      </OverlayTrigger>
      <AccountSecurityModal show={showAccount} handleClose={handleAccountClose} />
      <PaymentSettingModal show={showPayment} handleClose={handlePaymentClose} />
      <PrivacyTermsModal show={showPrivacy} handleClose={handlePrivacyClose} />
    </>
  )
}

export default SettingMenuIcon;