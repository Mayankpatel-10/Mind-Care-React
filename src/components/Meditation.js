import React from 'react';

const Meditation = () => {
  return (
    <section className="card meditation-section">
      <h2>🧘‍♂️ Guided Meditation</h2>
      <div className="meditation-card">
        <h3>Meditation for Beginners</h3>
        <p>Practice mindfulness with this guided meditation session.</p>
        <iframe 
          width="100%" 
          height="250" 
          src="https://www.youtube.com/embed/inpok4MKVLM" 
          title="Guided Meditation" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <div className="video-links">
          <a href="https://youtu.be/inpok4MKVLM" target="_blank" rel="noopener noreferrer">
            <button>Watch on YouTube</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Meditation;