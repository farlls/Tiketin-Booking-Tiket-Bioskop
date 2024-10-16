import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Booking from "./components/Booking";
import PayCard from "./components/Payment/PayCard";
import GoPayPage from "./components/Payment/GoPay";
import QrisPage from "./components/Payment/Qris"; // Correct import for QrisPage
import DanaPage from "./components/Payment/Dana"; // Correct import for DanaPage
import MovieList from "./components/MovieList";
import Ticket from "./components/Ticket";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        {/* Route for Booking */}
        <Route path="/booking" element={<Booking />} />
        {/* Route for Payment */}
        <Route path="/card" element={<PayCard />} />
        {/* Routes for Payment Methods */}
        <Route path="/gopay" element={<GoPayPage />} />
        <Route path="/qris" element={<QrisPage />} />
        <Route path="/dana" element={<DanaPage />} />
        <Route path="/movielist" element={<MovieList />} />
        {/* Routes for Payment Methods */}
        <Route path="/ticket" element={<Ticket />} />

      </Routes>
    </Router>
  );
};

export default App;
