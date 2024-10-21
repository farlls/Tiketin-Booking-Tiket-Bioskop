import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';
import danaImage from "./img/danaa.jpg";
import gopayImage from "./img/gopayy.jpg" 
import qrisImage from "./img/qris.png" 
import cardImage from "./img/carddd.png" 
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
       <div className="pilih-metode">
        <h2>Choose Your Payment Method</h2>
        <div className="payment-methods">
          <button className="qris-btn" type="button" onClick={() => navigate('/qris')}>
            <img src={qrisImage} alt="QRIS" />
          </button>
          <button className="dana-btn" type="button" onClick={() => navigate('/dana')}>
            <img src={danaImage} alt="Dana" />
          </button>
          <button className="card-btn" type="button" onClick={() => navigate('/card')}>
            <img src={cardImage} alt="Card" />
          </button>
          <button className="gopay-btn" type="button" onClick={() => navigate('/gopay')}>
            <img src={gopayImage} alt="GoPay" />
          </button>
        </div>
      </div>
  <form className="payment-form" onSubmit={handleSubmit}>
    <div className="bayar">
      <div className="gopay-pembayaran">
      </div>

      <div className="total-pembayaran">
        <h1>Harga</h1>
        <p>Regular Tickets</p>
        <div className="total">
          <p></p>
          <p>2 × Rp 70.000</p>
        </div>
        <p>Bangku A1&A3</p>
        <div className="total">
          <p>Total</p>
          <p>$150.00</p>
        </div>
      </div>
    </div>
    
    <button className='btn-gopay' type="submit">Pay Now</button>
  </form>
</div>
  );
};

export default Qris;
