import { useLocation, useNavigate } from 'react-router-dom';
import './styles/Booking.css';

import { movies } from './Data/datamovie';
import React, { useEffect, useState } from 'react';

const Booking = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieTitle = queryParams.get('movie'); 

  const navigate = useNavigate(); 

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Simulasi pengambilan data film
  useEffect(() => {
    const fetchMovies = () => {
      setTimeout(() => {
        if (movies && movies.length > 0) {
          setSelectedMovie(movies[0]);
          setIsLoading(false);
        } else {
          setError("Tidak dapat memuat data film.");
          setIsLoading(false);
        }
      }, 1000);
    };

    fetchMovies();
  }, []);

  const handleTicketSelection = (time) => {
    setSelectedTime(selectedTime === time ? null : time);
  };

  const handleSeatClick = (seatId) => {
    
    setSelectedSeat(selectedSeat === seatId ? null : seatId);
  };

  const handlePaymentClick = () => {
    
    navigate(`/card?movie=${movieTitle}`);
  };

  // Definisikan kursi
  const seats = Array.from({ length: 20 }, (_, index) => ({
    id: `A${index + 1}`,
    type: index % 2 === 0 ? 'standard' : 'comfort', 
    available: true,
  }));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedMovie) return <div>Tidak ada film yang tersedia.</div>;

  return (
    <div className="booking-container">
      <div className="movie-details">
        <img src={selectedMovie.image} alt={selectedMovie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{selectedMovie.title}</h1>
          <div className="movie-metadata">
            <span>{selectedMovie.year}</span>
            <span>{selectedMovie.genre}</span>
            <span>{selectedMovie.duration}</span>
          </div>
          <div className="rating-duration">
            <p className="not-rated">not rated</p>
            <p className="duration">1h 38 m</p>
          </div>
          <p className="movie-description">
            "Avatar" (2009) adalah film sci-fi yang disutradarai oleh James Cameron, berlatar di dunia alien Pandora. 
            Film ini mengikuti Jake Sully, seorang Marinir paraplegic yang menghubungkan kesadarannya dengan Avatar, tubuh Na'vi. 
            Saat ia semakin terlibat dalam budaya Na'vi, Jake menghadapi konflik antara penjajah manusia 
            yang ingin mengeksploitasi sumber daya Pandora dan penduduk asli Na'vi yang berjuang untuk melindungi rumah mereka.
          </p>
          <div className="crew-info">
            <div className="director-stars">
              <p className="director-label">Sutradara</p>
              <p className="stars-label">Bintang</p>
            </div>
            <div className="director-stars-names">
              <p className="director-name">Laurent Bouzereau</p>
              <p className="stars-names">James Cameron, Jon Landau, James Gianopulos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <h2 className="tiket">Tiket</h2>
        <div className="table-wrapper">
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Mo, 10/21/2024</th>
                <th>Di, 10/15/2024</th>
                <th>Mi, 10/16/2024</th>
                <th>Do, 10/17/2024</th>
                <th>Fr, 10/18/2024</th>
                <th>Sa, 10/19/2024</th>
                <th>So, 10/20/2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button onClick={() => handleTicketSelection('15:45')} className={selectedTime === '15:45' ? 'selected' : ''}>
                    15:45
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleTicketSelection('13:40')} 
                    className={selectedTime === '13:40' ? 'selected' : ''}>
                    13:40
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleTicketSelection('14:00')} 
                    className={selectedTime === '14:00' ? 'selected' : ''}>
                    14:00
                  </button>
                </td>
                <td>
                  <button onClick={() => handleTicketSelection('18:00')} className={selectedTime === '18:00' ? 'selected' : ''}>
                    18:00
                  </button>
                </td>
                <td>
                  <button disabled>--</button>
                </td>
                <td>
                  <button disabled>--</button>
                </td>
                <td>
                  <button onClick={() => handleTicketSelection('19:35')} className={selectedTime === '19:35' ? 'selected' : ''}>
                    19:35
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {selectedTime && (
          <div className="seat-selection-container ">
            <h2>Kursi</h2>
            {/* <p className="screen-label">Layar</p> */}
            <div className="seats">
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  className={`seat ${seat.type} ${seat.available ? 'available' : 'unavailable'} ${selectedSeat === seat.id ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat.id)}
                  disabled={!seat.available}
                >
                  {seat.id}
                </button>
              ))}
            </div>
            <div className="selected-seats">
              <p className='kursi'>Kursi Terpilih: {selectedSeat || 'Tidak ada kursi yang dipilih'}</p>
            </div>
          </div>
        )}

        <div className="video-trailer-container">
          <h3 className="triler">Trailer</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5PSNL1qE6VY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {selectedSeat && (
          <div className="payment-method-container">
            <h2>Pilih Metode Pembayaran</h2>
            <button className="proceed-button" onClick={handlePaymentClick}>Proceed to Payment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
