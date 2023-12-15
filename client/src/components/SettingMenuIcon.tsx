import { useEffect, useState } from "react";
import { OverlayTrigger, CloseButton } from 'react-bootstrap';
// @ts-ignore
import $ from "jquery";
import Icons from './icons';

import profile_img from "../images/Profile Pic.svg";
import company_img from "../images/Vector.svg";
import location_img from "../images/Location.svg";
import PrivacyTermsModal from './Modals/privacy_terms';
import AccountSecurityModal from "./Modals/account_security";
import PaymentSettingModal from "./Modals/payment_setting";
import TinyModal from "./Modals/tiny_modal";

const SettingMenuIcon = () => {
  useEffect(() => {
    $(".overlay.btn-close").hide();
    $(".overlay.btn-close").click(function () {
      // @ts-ignore
      $(this).hide();
    });
  
    $(".btn-show").click(function () {
      $(".overlay.btn-close").show();
    });
  
    $(window).click(function () {
      if ($(".overlay.show").length == 0) {
        $(".overlay.btn-close").hide();
      }
    });
  }, []);

  const [showAccount, setShowAccount] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

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

  const handleLogoutClose = () => setShowLogout(false);
  const handleLogoutShow = () => {
    $(".overlay").hide();
    setShowLogout(true);
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
              <Icons iconNumber={96} />
              Account & Security
            </div>
            <div onClick={handlePaymentShow}>
              <Icons iconNumber={97} />
              Payment Settings
            </div>
          </div>
          <div className="overlay-part">
            <div>
              <Icons iconNumber={98} />Help Center
            </div>
            <div onClick={handlePrivacyShow}>
              <Icons iconNumber={99} />Privacy & Terms
            </div>
            <div>
              <Icons iconNumber={100} />Contact Us
            </div>
          </div>
          <div onClick={handleLogoutShow} className='text-center logout'>
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
      <TinyModal show={showLogout} handleClose={handleLogoutClose} type="logout" />
    </>
  )
}

export default SettingMenuIcon;