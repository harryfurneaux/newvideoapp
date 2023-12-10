import { Modal } from "react-bootstrap";

const PrivacyTerms = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="p-5">
          <h3 className="text-center mb-4">Privacy and Terms</h3>
          <div className="text-left">
            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PrivacyTerms;