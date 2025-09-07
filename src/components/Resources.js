import React from 'react';

const Resources = () => {
  return (
    <section className="card resources-section" id="resources-section">
      <h2>📚 Helpful Articles</h2>
      <div className="resource-cards">
        <div className="resource-card">
          <h3>Coping with Anxiety</h3>
          <p>Learn effective techniques to manage anxiety in your daily life.</p>
          <a href="https://adaa.org/tips" target="_blank" rel="noopener noreferrer">
            <button>Read Article</button>
          </a>
        </div>
        
        <div className="resource-card">
          <h3>Sleep Better</h3>
          <p>Improve your sleep quality with these evidence-based techniques.</p>
          <a href="https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips-india" target="_blank" rel="noopener noreferrer">
            <button>Read Article</button>
          </a>
        </div>
        
        <div className="resource-card">
          <h3>Stress Management</h3>
          <p>Discover strategies to effectively manage and reduce stress.</p>
          <a href="https://www.apa.org/topics/stress" target="_blank" rel="noopener noreferrer">
            <button>Read Article</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;