import { Modal } from "react-bootstrap";
import profile_pic from "../../images/Profile Pic 2.png";

const AccountSecurity = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  return (
    <Modal className="modal-primary account-modal text-white" show={show} onHide={handleClose} centered>
      <Modal.Header className="flex-column-reverse">
        <h1>Account & Security</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="align-self-end">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66958 1.11595C2.24121 0.687583 1.58365 0.650726 1.20083 1.03354C0.818022 1.41635 0.85502 2.07377 1.28339 2.50214L4.85156 6.07031L1.11946 9.80242C0.690564 10.2313 0.655277 10.8897 1.04079 11.2752C1.4263 11.6607 2.08465 11.6254 2.51355 11.1965L6.24565 7.4644L9.9663 11.185C10.3947 11.6134 11.0521 11.6504 11.4349 11.2676C11.8177 10.8848 11.7809 10.2272 11.3525 9.79886L7.63184 6.07821L11.1964 2.51368C11.6251 2.08495 11.6604 1.42661 11.2749 1.0411C10.8893 0.655582 10.231 0.690858 9.80228 1.1196L6.23775 4.68412L2.66958 1.11595Z" fill="white"/>
        </svg>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-part p-0 row align-items-center">
          <img className="profile-img p-0" src={profile_pic} />
          <div className="col">
            <button className="pic-btn">Change Profile Picture</button>
            <p className="pic-desc">Must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
          </div>
        </div>
        <div className="modal-part row align-items-center">
          <div className="col">
            <h6>NAME</h6>
            <p>Full Name</p>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button>Edit</button>
          </div>
        </div>
        <div className="modal-part row align-items-center">
          <div className="col">
            <h6>ORGANISATION</h6>
            <p>Company name ltd.</p>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button>Edit</button>
          </div>
        </div>
        <div className="modal-part row align-items-center">
          <div className="col">
            <h6>LOCATION</h6>
            <p>Full location</p>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button>Edit</button>
          </div>
        </div>
        <div className="modal-part row align-items-center">
          <div className="col">
            <h6>EMAIL</h6>
            <p>**********@emailaddress.com</p>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button>Edit</button>
          </div>
        </div>
        <div className="modal-part row align-items-center">
          <div className="col">
            <h6>PASSWORD</h6>
            <p>**********</p>
          </div>
          <div className="col d-flex justify-content-end">
            <button>Change Password</button>
          </div>
        </div>
        <div className="delete-part d-flex justify-content-end">
          <button className="border">Delete Account</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AccountSecurity;