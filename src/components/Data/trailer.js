import React from 'react';

const trailer = ({ videoId }) => {
    return (
      <div className="trailer-container">
        {videoId ? (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer tidak tersedia.</p>
        )}
      </div>
    );
  };

export default trailer;
