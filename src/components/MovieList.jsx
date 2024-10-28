import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { movies } from './Data/datamovie';
import MovieCard from './controller/MovieCard';
import Navbar from './Navbar';

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  // Film yang ditampilkan untuk halaman saat ini
  const currentMovies = movies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  // Hitung total halaman
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div>
      <Navbar/>
        {/* <nav className="navbar sticky-top navbar-expand-lg navbar-glass">
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
                <a className="nav-link"  href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
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
      </nav> */}
    
      {/* MovieList */}
      <section className="container-fluid px-xl-5 px-sm-4 py-4">
        <div className="row px-xl-3 px-sm-5 d-flex justify-content-center">
          {currentMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>

      {/* Render Pagination */}
      <nav>
        <ul className="pagination justify-content-center ">
          {/* Tombol Previous */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage - 1)} 
              disabled={currentPage === 1}
              style={{
                backgroundColor: currentPage === 1 ? "#555" : "#6f42c1", // ungu untuk aktif
                color: "#fff",
                border: "none",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}>
              Previous
            </button>
          </li>

          {/* Halaman */}
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}
                 style={{
                  backgroundColor: currentPage === i + 1 ? "#6f42c1" : "#444", // warna ungu untuk halaman aktif
                  color: "#fff",
                  border: "none",
                }}>
                {i + 1}
              </button>
            </li>
          ))}

          {/* Tombol Next */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage + 1)} 
              disabled={currentPage === totalPages}
              style={{
                backgroundColor: currentPage === totalPages ? "#555" : "#6f42c1", // warna ungu untuk aktif
                color: "#fff",
                border: "none",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieList;
