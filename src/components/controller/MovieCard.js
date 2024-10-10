import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();  // Inisialisasi useNavigate

    const handleBookClick = () => {
        // Mengarahkan ke halaman booking dengan parameter movie title
        navigate(`/booking?movie=${movie.title}`);
    };

    return (
        <div className="col-8 col-sm-auto col-md-auto mb-4">
            <div className="card card-glass h-100" style={{ width: '18rem' }}>
                <img src={movie.image} className="card-img-top img-fluid" alt={movie.title} />
                <div className="card-body justify-content-center align-content-center">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="rating">{movie.rating}</p>
                    <p className="card-text">{movie.description}</p>
                    <button
                        type="button"
                        className="btn btn-glass-primary"
                        onClick={handleBookClick} // Call handleBookClick when the button is clicked
                        >
                        Book Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
