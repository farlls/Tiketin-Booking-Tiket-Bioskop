import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // import useNavigate
import "./styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk routing

  const handleNavigation = () => {
      navigate("/login"); // arahkan ke halaman login
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-glass">
      <div className="container-fluid px-5">
        <Link
          className="navbar-brand col-7 d-inline-flex align-items-center gap-1"
          to="/"
        >
          <img src="/assets/Logo.svg" alt="Tickets" width="30" height="30" />
          Tiketin.
        </Link>
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
          <ul className="navbar-nav me-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movielist">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ticket">
                Ticket
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-glass-primary btn-glass me-2"
            onClick={handleNavigation} // Panggil fungsi handleNavigation untuk routing
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-glass btn-glass-secondary"
            onClick={handleNavigation} // Toggle antara sign in dan sign up
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
