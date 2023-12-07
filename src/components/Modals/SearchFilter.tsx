import { Modal } from "react-bootstrap";

const SearchFilter = ({ show, handleClose }: { show: boolean, handleClose: any }) => {
  return (
    <Modal className="modal-primary text-white" show={show} onHide={handleClose} centered>
      <Modal.Header className="p-5" closeButton>
        <h4 className="text-white">Search Filters</h4>
      </Modal.Header>
      <Modal.Body className="row text-white gap-4 px-5 mx-1 my-3">
        <div className="col px-0">
          <p className="border-bottom py-3">SUBMITTED</p>
          <p className="fw-light my-3">Last hour</p>
          <p className="fw-bold my-3">Today X</p>
          <p className="fw-light my-3">This week</p>
          <p className="fw-light my-3">This month</p>
          <p className="fw-light my-3">This year</p>
        </div>
        <div className="col px-0">
          <p className="border-bottom py-3">FEATURES</p>
          <p className="fw-light my-3">Favourite</p>
          <p className="fw-light my-3">Messaged</p>
          <p className="fw-light my-3">Watched</p>
          <p className="fw-light my-3">Unwatched</p>
        </div>
        <div className="col px-0">
          <p className="border-bottom py-3">SORT BY</p>
          <p className="fw-light my-3">Upload date</p>
          <p className="fw-light my-3">Rating</p>
          <p className="fw-light my-3">First Name</p>
          <p className="fw-light my-3">Surname</p>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SearchFilter;