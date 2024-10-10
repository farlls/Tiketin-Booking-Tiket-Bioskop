import React, { useState } from 'react'; // Tambahkan useState di sini
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';

const PayCard = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState(''); // Menggunakan useState
  const [expiration, setExpiration] = useState(''); // Menggunakan useState
  const [cvc, setCvc] = useState(''); // Menggunakan useState

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert and navigate to home
    alert('Card Payment Submitted');
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
          <div className="pembayaran">
            <div className="form-group">
              <label htmlFor="card-number">Card number</label>
              <input
                type="text"
                id="card-number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 1234 1234 1234"
                required
              />
            </div>
            <div className="number">
              <div className="form-group-expi">
                <label htmlFor="expiration">Expiration</label>
                <input
                  type="text"
                  id="expiration"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  placeholder="MM / YY"
                  required
                />
              </div>
              <div className="form-group-cvc">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="CVC"
                  required
                />
              </div>
            </div>
          </div>
          <div className="total-pembayaran">
            <p>You’re paying,</p>
            <h1>Rp 140.000</h1>
            <p>2 Regular Tickets</p>
            <div className="total">
              <p>Total</p>
              <p>$100.00</p>
            </div>
          </div>
        </div>

        <button className="btn-card" type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PayCard;
