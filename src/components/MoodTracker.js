// src/components/MoodTracker.js
import React, { useState, useEffect } from 'react';

const MoodTracker = () => {
  const [moodNote, setMoodNote] = useState('');
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    // Load saved mood data from localStorage
    const savedMoodData = localStorage.getItem('moodData');
    if (savedMoodData) {
      setMoodData(JSON.parse(savedMoodData));
    }
  }, []);

  const handleMoodSelection = (mood) => {
    const newMoodEntry = {
      date: new Date().toISOString(),
      mood: mood,
      note: moodNote
    };
    
    const updatedMoodData = [...moodData, newMoodEntry];
    setMoodData(updatedMoodData);
    localStorage.setItem('moodData', JSON.stringify(updatedMoodData));
    setMoodNote('');
    
    // Show confirmation
    alert(`Mood recorded: ${mood}`);
  };

  return (
    <section className="card mood-section">
      <h2>How are you feeling today?</h2>
      <div className="mood-options">
        <button className="mood-btn" onClick={() => handleMoodSelection('awful')}>
          😡<span>Awful</span>
        </button>
        <button className="mood-btn" onClick={() => handleMoodSelection('sad')}>
          😔<span>Sad</span>
        </button>
        <button className="mood-btn" onClick={() => handleMoodSelection('neutral')}>
          😐<span>Neutral</span>
        </button>
        <button className="mood-btn" onClick={() => handleMoodSelection('good')}>
          😊<span>Good</span>
        </button>
        <button className="mood-btn" onClick={() => handleMoodSelection('great')}>
          🤩<span>Great</span>
        </button>
      </div>
      <textarea 
        id="mood-note" 
        placeholder="Add a note about your mood (optional)"
        value={moodNote}
        onChange={(e) => setMoodNote(e.target.value)}
      ></textarea>
    </section>
  );
};

export default MoodTracker;