import React from "react";
import "./styles/Ticket.css";
import Img from "./Payment/img/toy.png";
import qr from "./Payment/img/qr.jpg";
import Navbar from "./Navbar";
function Ticket() {
  return (
    <div className="ticketContainer">
        <Navbar/>
      <div className="ticketContent">
        <div className="ticketInfo">
          <div className="leftSection">
            <img className="posterImage" src={Img} alt="Gopay" />
            {/* <h2 className="title">Judul Film</h2> */}
          </div>
          <div className="rightSection">
            <div className="ticket-judul">
              <p className="infoText">Judul</p><br />
              <p className="infoText">Hari/Tanggal</p>
              <p className="infoText">Jam</p>
              <p className="infoText">Lokasi</p>
            </div>
            <div className="ticket-judul">
              <p className="infoText2">Anomali </p><br />
              <p className="infoText2">Jumat, 21 Desember 2024 </p>
              <p className="infoText2">19:30 WIB </p>
              <p className="infoText2">Jogja City Mall </p>
            </div>
          </div>
        </div>
        <div className="ticketDetails">
          <div className="detailRow">
            <p>Jumlah Tiket</p>
            <p>2</p>
          </div>
          <div className="detailRow">
            <p>Kursi</p>
            <p>D1 & D2</p>
          </div>
          <div className="qrSection">
            <img className="qrCode" src={qr} alt="Gopay" />
            <p className="qrticket">Kode QR</p>
          </div>
        </div>
        <p className="orderNumber">
          <strong>Nomor Order</strong>: 12345678901010
        </p>
      </div>
    </div>
  );
}

export default Ticket;
