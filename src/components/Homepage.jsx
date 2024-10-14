import "./styles/homepage.css";
import React from "react";
import { movies } from "./Data/datamovie";
import MovieCard from "./controller/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-responsive-3d-carousel'


function Homepage() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-glass">
        <div className="container-fluid px-5">
          <a
            className="navbar-brand col-7 d-inline-flex align-items-center gap-1"
            href="#"
          >
            <img src="/assets/Logo.svg" alt="Tickets" width="30" height="30" />
            Tiketin.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <form className="d-flex my-2 my-xl-0" role="search">
              <input
                className="form-control"
                style={{ maxWidth: "400px" }}
                type="search"
                placeholder="Search Film"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="movielist">
                  Movie List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* <section className="container-fluid">
          <div className="row my-10 p-5">
            <div className="d.flex flex-column align-items-center">
              <h2 className="glowing-text">
                Apa yang ingin <br /> Anda tonton hari ini ?
              </h2>
            </div>
          </div>
        </section> */}

        {/* Carousel Section */}
        <section className="carousel">
        <div style={{margin: '0 auto', marginBottom: '100px', marginTop: '50px' }}>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows
              showThumbs
              showStatus
              spread="wide"
              interval={3000}
              transitionTime={500}
              width="600px"
              height="350px"
              indicatorsSize="small"
              depth={2}
            >
              {movies.map((item) => (
                <div key={item.title}>
                  <img src={item.image} alt={item.caption} />
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="container-fluid px-xl-3 px-sm-5 justify-content-center">
          <div className="row justify-content-xl-start ">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </section>

        {/* <div
          className="modal fade"
          id="bookingModal"
          tabIndex="-1"
          aria-labelledby="bookingModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content glass-content">
              <div className="modal-header">
                <h5 className="modal-title" id="bookingModalLabel">
                  Book Your Ticket
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="movieTitle" className="form-label">
                    Movie Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    id="movieTitle"
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="seats" className="form-label">
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-glass"
                    id="seats"
                    required
                    min="1"
                    max="10"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-glass-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-glass-primary"
                  onClick={bookTicket}
                >
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default Homepage;
