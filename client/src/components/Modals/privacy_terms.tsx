import { Modal } from "react-bootstrap";

const PrivacyTerms = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  return (
    <Modal className="privacy-modal" show={show} onHide={handleClose} centered>
      <Modal.Header className="flex-column-reverse" closeButton>
        <h1 className="text-center">Privacy and Terms</h1>
      </Modal.Header>
      <Modal.Body>
        <div className="text-left">
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PrivacyTerms;