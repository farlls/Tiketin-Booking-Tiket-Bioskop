import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Booking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieTitle = queryParams.get('movie'); // Get the 'movie' query parameter

  const navigate = useNavigate(); // Initialize useNavigate

  const handlePaymentClick = () => {
    // Navigate to payment page with movie title as query parameter
    navigate(`/card?movie=${movieTitle}`);
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <p>You are booking a ticket for: {movieTitle}</p>
      <button onClick={handlePaymentClick}>Proceed to Payment</button>
    </div>
  );
}

export default Booking;
