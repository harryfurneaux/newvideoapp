import { Modal, Button } from "react-bootstrap";

const ChangeModal = ({ show, handleClose, item }: { show: boolean, handleClose: any, item: string }) => {
  return (
    <Modal className="modal-primary change-modal" show={show} onHide={handleClose} centered>
      <Modal.Header className="flex-column">
        <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="align-self-end">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66958 1.11595C2.24121 0.687583 1.58365 0.650726 1.20083 1.03354C0.818022 1.41635 0.85502 2.07377 1.28339 2.50214L4.85156 6.07031L1.11946 9.80242C0.690564 10.2313 0.655277 10.8897 1.04079 11.2752C1.4263 11.6607 2.08465 11.6254 2.51355 11.1965L6.24565 7.4644L9.9663 11.185C10.3947 11.6134 11.0521 11.6504 11.4349 11.2676C11.8177 10.8848 11.7809 10.2272 11.3525 9.79886L7.63184 6.07821L11.1964 2.51368C11.6251 2.08495 11.6604 1.42661 11.2749 1.0411C10.8893 0.655582 10.231 0.690858 9.80228 1.1196L6.23775 4.68412L2.66958 1.11595Z" fill="white" />
        </svg>
        <h1>Change {item == "Company" ? "" : "your"} {item}</h1>
        <p>Enter a new {item} and your existing password.</p>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-part">
          <h6>{item == "Name" ? "NAME" :
            item == "Location" ? "LOCATION" :
              item == "Email" ? "EMAIL" :
                item == "Password" ? "NEW PASSWORD" :
                  "COMPANY NAME"
          }</h6>
          <h5>{item=="Name"?"Full Name":item}</h5>
        </div>
        <div className="modal-part">
          <h6>CURRENT PASSWORD</h6>
          <h5>{""}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button className="bordered">Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangeModal;