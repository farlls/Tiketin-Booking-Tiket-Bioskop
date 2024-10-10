// src/components/MovieCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MovieCard = ({ movie, onBook }) => {
    return (
        <div className="col-8 col-sm-auto col-md-auto mb-4">
            <div className="card card-glass h-100" style={{ width: '18rem' }}>
                <img src={movie.image} className="card-img-top img-fluid" alt={movie.title} />
                <div className="card-body justify-content-center align-content-center">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="rating">{movie.rating}</p>
                    <p className="card-text">{movie.description}</p>
                    <button
                        className="btn btn-glass"
                        data-bs-toggle="modal"
                        data-bs-target="#bookingModal"
                        // onClick={() => onBook(movie.title)}
                    >
                        Book Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
