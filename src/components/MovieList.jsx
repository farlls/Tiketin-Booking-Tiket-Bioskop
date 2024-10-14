import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { movies } from './Data/datamovie';
import MovieCard from './controller/MovieCard';

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
      {/* MovieList */}
      <section className="container-fluid px-xl-5 px-sm-4 py-4">
        <div className="row justify-content-xl-start justify-content-center">
          {currentMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>

      {/* Render Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {/* Tombol Previous */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage - 1)} 
              disabled={currentPage === 1}>
              Previous
            </button>
          </li>

          {/* Halaman */}
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          {/* Tombol Next */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button 
              className="page-link" 
              onClick={() => setCurrentPage(currentPage + 1)} 
              disabled={currentPage === totalPages}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieList;
