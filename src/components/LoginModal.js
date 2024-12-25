import React from "react";
import "./../styles/LoginModal.css"; // Import the CSS file for styling

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>ورود به سایت</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username" dir="rtl">
              نام کاربری:
            </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password" dir="rtl">
              رمز:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button" className="login-button">
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
