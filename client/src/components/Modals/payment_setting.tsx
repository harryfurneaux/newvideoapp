import { useState } from "react";
import { Modal } from "react-bootstrap";
import ChangeModal from "./change_modal";
import TinyModal from "./tiny_modal";
import visa_img from "../../images/visa 1.svg";

const PaymentSetting = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  const [show_change, setChangeModal] = useState(false);
  const [change_item, setChangeItem] = useState("");

  const [show_tiny, setTinyModal] = useState(false);
  const [tiny_type, setTinyType] = useState("");

  const handleChangeClose = () => setChangeModal(false);
  const handleChangeShow = (item: string) => {
    setChangeModal(true);
    setChangeItem(item);
  };

  const handleTinyClose = () => setTinyModal(false);
  const handleTinyShow = (type: string) => {
    setTinyModal(true);
    setTinyType(type);
  };

  return (
    <Modal className={`modal-primary payment-modal ${show_change || show_tiny ? "z-0" : ""}`} show={show} onHide={handleClose} centered>
      <Modal.Header className="flex-column-reverse">
        <h1>Payment Settings</h1>
        <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="align-self-end">
          <path fill-rule="evenodd" clipRule="evenodd" d="M2.66958 1.11595C2.24121 0.687583 1.58365 0.650726 1.20083 1.03354C0.818022 1.41635 0.85502 2.07377 1.28339 2.50214L4.85156 6.07031L1.11946 9.80242C0.690564 10.2313 0.655277 10.8897 1.04079 11.2752C1.4263 11.6607 2.08465 11.6254 2.51355 11.1965L6.24565 7.4644L9.9663 11.185C10.3947 11.6134 11.0521 11.6504 11.4349 11.2676C11.8177 10.8848 11.7809 10.2272 11.3525 9.79886L7.63184 6.07821L11.1964 2.51368C11.6251 2.08495 11.6604 1.42661 11.2749 1.0411C10.8893 0.655582 10.231 0.690858 9.80228 1.1196L6.23775 4.68412L2.66958 1.11595Z" fill="white" />
        </svg>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-part d-flex justify-content-between">
          <div>
            <h6>MANAGE BILLING METHODS</h6>
            <p>Add, update, or remove your billing methods</p>
          </div>
          <div className="justify-content-end">
            <button>Add New Billing Method</button>
          </div>
        </div>
        <div className="modal-part modal-part-1">
          <div className="modal-part-header">
            <h6>PRIMARY</h6>
            <p>Your primary billing method is used for all recurring payments.</p>
          </div>
          <div className="modal-part-body">
            <div className="d-flex align-items-start">
              <img src={visa_img} />
              <div className="modal-part-main">
                <p className="fw-bold">Visa ending in 7883&ensp;|&emsp;GBP</p>
                <p>You need a primary biulling method when you have active questions or a balance due. To remove this one, set a new primary billing method first.</p>
              </div>
            </div>
            <button>Edit</button>
          </div>
        </div>
        <div className="modal-part modal-part-2">
          <div className="modal-part-header">
            <h6>ADDITIONAL</h6>
            <p>Your primary billing method is used for all recurring payments.</p>
          </div>
          <div className="modal-part-body">
            <img src={visa_img} />
            <div className="modal-part-main">
              <p className="fw-bold">Visa ending in 7883&ensp;|&emsp;GBP</p>
              <p>You need a primary biulling method when you have active questions or a balance due. To remove this one, set a new primary billing method first.</p>
            </div>
          </div>
          <div className="d-flex justify-content-end btn-group">
            <button>Edit</button>
            <button>Set as Primary</button>
            <button>Remove</button>
          </div>
        </div>
      </Modal.Body>
      <ChangeModal show={show_change} handleClose={handleChangeClose} item={change_item} setNotifyShow={''} />
      <TinyModal show={show_tiny} handleClose={handleTinyClose} type={tiny_type} setMainScreen={''} />
    </Modal>
  )
}

export default PaymentSetting;