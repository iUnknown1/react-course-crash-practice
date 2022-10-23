import './Modal.css'
//propv
function Modal({ title, onTodoCancel, onTodoConfirm }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button onClick={onTodoCancel} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={onTodoConfirm} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;