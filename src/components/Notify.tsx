import { Toast, ToastContainer } from "react-bootstrap";

const Notify = ({ type="info", title="notification", show=true, handleClose=null }: { type?: string, title?: string, show?: boolean, handleClose?: any }) => {
  return (
    <ToastContainer position="top-center">
      <Toast className={`toast-notify ${type}`} onClose={handleClose} show={show} delay={2000} autohide>
        <Toast.Header className="text-white">
          <img className="rounded-0" src={require(`../images/Tick-${type}.svg`)} />
          <strong className="mx-3 me-auto">{title}</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
}

export default Notify;