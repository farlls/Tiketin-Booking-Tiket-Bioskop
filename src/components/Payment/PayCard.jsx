import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';
import Popup from './Popup'; // Import Popup
import danaImage from "./img/danaa.jpg";
import gopayImage from "./img/gopayy.jpg";
import qrisImage from "./img/qris.png";
import cardImage from "./img/carddd.png";

const PayCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Pascal Benoit');
  const [cardNumber, setCardNumber] = useState('9876 9876 9876 9876');
  const [expiration, setExpiration] = useState('09/25');
  const [cvv, setCvv] = useState('***');
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol pop-up

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Tampilkan pop-up saat submit
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/'); // Navigasi ke halaman utama setelah menutup pop-up
  };

  return (
    <div className="payment-container">
      <Navbar/>
      <div className="payment">
        <div className="pilih-metode">
          <h2>Choose Your Payment Method</h2>
          <div className="payment-methods">
            <button className="card-btn" type="button" onClick={() => navigate('/card')}>
              <img src={cardImage} alt="Card" />
            </button>
            <button className="dana-btn" type="button" onClick={() => navigate('/dana')}>
              <img src={danaImage} alt="Dana" />
            </button>
            <button className="gopay-btn" type="button" onClick={() => navigate('/gopay')}>
              <img src={gopayImage} alt="GoPay" />
            </button>
            <button className="qris-btn" type="button" onClick={() => navigate('/qris')}>
              <img src={qrisImage} alt="QRIS" />
            </button>
          </div>
        </div>

        <div className="form-bayar">
          <div className="card-form-container">
            <div className="card-preview">
              <div className="card-pay">
                <div className="card-chip"></div>
                <div className="card-info">
                  <h4>{name}</h4>
                  <p>{cardNumber}</p>
                  <p>{expiration}</p>
                </div>
              </div>
            </div>

            <form className="card-form" onSubmit={handleSubmit}>
              <div className="isi-card">
                <div className="nama-card">
                  <div className="input-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="nama-card">
                  <div className="input-group">
                    <label>Expiration</label>
                    <input
                      type="text"
                      value={expiration}
                      onChange={(e) => setExpiration(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* Render Pop-Up */}
        {showPopup && <Popup message="Card Payment Submitted" onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default PayCard;
