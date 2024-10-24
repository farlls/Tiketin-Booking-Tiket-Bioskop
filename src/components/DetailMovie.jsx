import React from "react";
import "./styles/DetailMovie.css";
import Navbar from "./Navbar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function DetailMovie() {
  return (
    <div>
      <Navbar />
      <section className="container-fluid p-5">
        <div className="row align-content-center gx-xl-5 gx-lg-3 g-sm-2">
          <div className="col-lg-3 col-sm-4 detailmovie-container-img mb-3">
            <img
              src="assets/img/avatar.jpg"
              className="img-fluid detailmovie-img"
            ></img>
          </div>
          <div className="col-lg-9 col-sm-7 justify-content-around align-content-center">
            <h1 className="detailmovie-title">Avatar: The Way of Water</h1>
            <div className="d-flex flex-row flex-wrap">
              <div className="d-inline-flex m-1 p-1 detailmovie-container-glass justify-content-center align-items-center">
                <img className="img-fluid" src="assets/Icons/star.svg" />
                <span className="fw-bold mx-1">4,9</span>
              </div>
              <div className="d-inline-flex m-1 p-1 detailmovie-container-glass justify-content-center align-items-center">
                <span className="mx-1">Karya Ilmiah</span>
              </div>
              <div className="d-inline-flex m-1 p-1 detailmovie-container-glass justify-content-center align-items-center">
                <span className="mx-1">Drama</span>
              </div>
              <div className="d-inline-flex m-1 p-1 detailmovie-container-glass justify-content-center align-items-center">
                <span className="mx-1">Laga</span>
              </div>
            </div>

            <p className="my-3 text-wrap">
              Film fiksi ilmiah yang mengisahkan tentang manusia yang mencari
              sumber energi baru di planet <br /> Pandora yang memiliki sumber
              energi besar bernama unobtanium.
            </p>
            <button className="btn detailmovie-btn-glass">View Trailer</button>
          </div>
        </div>
      </section>
      <section className="container-fluid px-5">
        <div className="d-flex flex-row justify-content-around gap-2 flex-wrap">
          <div className="d-flex flex-grow-1 detailmovie-glass-effect flex-column justify-content-start align-content-center gap-1">
            <h2 className="fs-6">Nama Bioskop</h2>
            <select
              class="form-select detailmovie-select-glass"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">Bioskop 1</option>
              <option value="2">Bioskop 2</option>
              <option value="3">Bioskop 3</option>
            </select>
          </div>
          <div className="d-flex flex-column detailmovie-glass-effect align-items-start gap-1">
            <h2 className="fs-6">Date</h2>
            <div className="d-flex gap-2">
              <button class="btn detailmovie-btn-glass btn-sm ">
                <FaChevronLeft />
              </button>
              <select
                class="form-select detailmovie-select-glass"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">Bioskop 1</option>
                <option value="2">Bioskop 2</option>
                <option value="3">Bioskop 3</option>
              </select>

              <button class="btn detailmovie-btn-glass btn-sm">
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="d-flex flex-grow-1 detailmovie-glass-effect flex-column gap-1">
            <h2 className="fs-6">Jam Tayang </h2>
            <select
              class="form-select detailmovie-select-glass"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">Bioskop 1</option>
              <option value="2">Bioskop 2</option>
              <option value="3">Bioskop 3</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row detailmovie-glass-effect my-2 p-4">
          <div className="d-inline-flex flex-column ">
            <h2 className="fs-4 mb-4">Select Your Sheats</h2>
            <div className="d-flex flex-column">
              <div className="d-inline-flex flex-row justify-content-between align-content-cente">
                <p className="fs-6 fw-medium ">Movie Ticket</p>
                <img
                  src="/assets/Logo.svg"
                  alt="Tickets"
                  width="25"
                  height="25"
                />
              </div>
              <div className="d-inline-flex flex-row justify-content-between align-content-center">
                <p className="fs-6 fw-light ">Date Time</p>
                <p className="fs-6 fw-light ">12/12/2024, 20.20 WIB</p>
              </div>
              <div className="d-inline-flex flex-row justify-content-between align-content-center">
                <p className="fs-6 fw-light ">Your Tickets</p>
                <p className="fs-6 fw-light ">Rp. 45.000 X 2</p>
              </div>
              <div className="d-inline-flex flex-row justify-content-between align-content-center">
                <p className="fs-5 fw-bold">Total</p>
                <p className="fs-5 fw-bold">Rp. 85.000</p>
              </div>
              <button
                type="button"
                className="btn btn-glass btn-glass-primary fw-bold mt-2"
              >
                BUY YOUR TICKET
              </button>
            </div>
          </div>
          <div className="d-flex"></div>
        </div>
      </section>
    </div>
  );
}
export default DetailMovie;
