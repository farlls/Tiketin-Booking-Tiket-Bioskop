import "../styles/Payment.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
        <h3>{message}</h3>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
