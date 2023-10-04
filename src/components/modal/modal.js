import './modal.css'

const Modals = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return(
    <div className="modal-background">
    <div className="modal-container">
    <span className='closeModal' onClick={onClose}>x</span>
        <h2>Title Modal</h2>
        <hr></hr>
        <p>Text Modal</p>
        <button className='buttonModal' onClick={onClose}>cerrar</button>
    </div>
</div>

  )
  }

export default Modals;
