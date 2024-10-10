import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Hompage"; // Import komponen Homepage

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk Homepage */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;