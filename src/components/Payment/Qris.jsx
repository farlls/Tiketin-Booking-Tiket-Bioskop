import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';

const Qris = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert and navigate to home
    alert('QRIS Payment Submitted');
    navigate('/');
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="secure-section">
          <img src="https://via.placeholder.com/30x30" alt="Secure icon" />
          <span>Payment Method</span>
        </div>

        <div className="payment-methods">
          <button type="button" onClick={() => navigate('/card')}>Card</button>
          <button type="button" onClick={() => navigate('/gopay')}>GoPay</button>
          <button type="button" onClick={() => navigate('/qris')}>QRIS</button>
          <button type="button" onClick={() => navigate('/dana')}>DANA</button>
        </div>

        <div className="bayar">
          <h2>QRIS</h2>
          <div className="qris-pembayaran">
            <img src="https://via.placeholder.com/265x280" alt="QR Code" />
          </div>

          <div className="total-pembayaran">
            <p>You’re paying,</p>
            <h1>Rp 140.000</h1>
            <p>2 Regular Tickets</p>
            <div className="total">
              <p>Total</p>
              <p>$10.00</p>
            </div>
          </div>
        </div>

        <button className="btn-gopay" type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Qris;
