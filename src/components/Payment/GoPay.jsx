import React, { useState } from "react"; // Import React dan useState
import Navbar from "../Navbar"; // Import komponen Navbar
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import "../styles/Payment.css"; // Import CSS untuk styling
import Popup from "./Popup"; // Impor komponen Popup
import danaImage from "./img/danaa.jpg"; // Import gambar Dana
import gopayImage from "./img/gopayy.jpg"; // Import gambar GoPay
import qrisImage from "./img/qris.png"; // Import gambar QRIS
import cardImage from "./img/carddd.png"; // Import gambar Kartu
import qr from "./img/qr.jpg"; // Import gambar QR untuk pembayaran

const GoPay = () => {
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol pop-up
  const navigate = useNavigate(); // Inisialisasi fungsi navigasi

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tampilkan pop-up
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/"); // Navigasi ke halaman utama setelah menutup pop-up
  };

  return (
    <div className="payment-container">
      <Navbar />
      <div className="payment">
        <div className="pilih-metode">
          <h2>Choose Your Payment Method</h2>
          <div className="payment-methods">
            <button
              className="gopay-btn"
              type="button"
              onClick={() => navigate("/gopay")}
            >
              <img src={gopayImage} alt="GoPay" />
            </button>
            <button
              className="dana-btn"
              type="button"
              onClick={() => navigate("/dana")}
            >
              <img src={danaImage} alt="Dana" />
            </button>
            <button
              className="card-btn"
              type="button"
              onClick={() => navigate("/card")}
            >
              <img src={cardImage} alt="Card" />
            </button>
            <button
              className="qris-btn"
              type="button"
              onClick={() => navigate("/qris")}
            >
              <img src={qrisImage} alt="QRIS" />
            </button>
          </div>
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="bayar">
            <div className="gopay-pembayaran">
              <img src={qr} alt="Gopay" />
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

          <button className="btn-gopay" type="submit">
            Pay Now
          </button>
        </form>

        {/* Render Pop-Up */}
        {showPopup && <Popup message="GoPay Payment Submitted" onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default GoPay;
