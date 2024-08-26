// ModalComponent.jsx
import React from 'react';

const ModalComponent = ({ show, handleClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h5>{title}</h5>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
