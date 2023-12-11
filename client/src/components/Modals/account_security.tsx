import { Modal } from "react-bootstrap";
import profile_pic from "../../images/Profile Pic 2.png";

const AccountSecurity = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  return (
    <Modal className="modal-primary" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-white px-5 py-3">
          <div className="text-center mb-4">
            <h5>Account & Security</h5>
          </div>
          <div className="modal-part my-3 row align-items-center">
            <img className="profile-img p-0" src={profile_pic} />
            <div className="col">
              <button className="mb-1">Change Profile Picture</button>
              <p className="pic-desc fw-light">Must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
            </div>
          </div>
          <div className="modal-part my-3 p-2 row align-items-center">
            <div className="col">
              <p>NAME</p>
              <p className="fw-light">Full Name</p>
            </div>
            <div className="col-2">
              <button>Edit</button>
            </div>
          </div>
          <div className="modal-part my-3 p-2 row align-items-center">
            <div className="col">
              <p>ORGANISATION</p>
              <p className="fw-light">ORGANISATION</p>
            </div>
            <div className="col-2">
              <button>Edit</button>
            </div>
          </div>
          <div className="modal-part my-3 p-2 row align-items-center">
            <div className="col">
              <p>LOCATION</p>
              <p className="fw-light">Full location</p>
            </div>
            <div className="col-2">
              <button>Edit</button>
            </div>
          </div>
          <div className="modal-part my-3 p-2 row align-items-center">
            <div className="col">
              <p>EMAIL</p>
              <p className="fw-light">**********@emailaddress.com</p>
            </div>
            <div className="col-2">
              <button>Edit</button>
            </div>
          </div>
          <div className="modal-part my-3 p-2 row align-items-center">
            <div className="col">
              <p>PASSWORD</p>
              <p className="fw-light">**********</p>
            </div>
            <div className="col d-flex justify-content-end">
              <button>Change Password</button>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="border">Delete Account</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AccountSecurity;