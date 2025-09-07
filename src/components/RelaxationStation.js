// src/components/RelaxationStation.js
import React from 'react';

const RelaxationStation = () => {
  return (
    <section className="card relaxation-section">
      <h2>Relaxation Station</h2>
      
      <div className="relaxation-item">
        <h3>Peaceful Piano Music</h3>
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/1ZYbU82GVz4" 
          title="Relaxing Piano Music" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    
    </section>
  );
};

export default RelaxationStation;