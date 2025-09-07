import React from 'react';
import ThemeToggle from './ThemeToggle';
import ChatAssistant from './ChatAssistant';
import MoodTracker from './MoodTracker';
import MoodChart from './MoodChart';
import RelaxationStation from './RelaxationStation';
import Assessment from './Assessment';
import Resources from './Resources';
import Helpline from './Helpline';
import Meditation from './Meditation';
import Footer from './Footer'; // Add this import

const Dashboard = ({ user, onLogout, isDarkMode, toggleTheme }) => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>MindCare Dashboard</h1>
        <div className="header-controls">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <MoodTracker />
        <ChatAssistant />
        <MoodChart />
        <RelaxationStation />
        <Assessment />
        <Resources />
        <Helpline />
        <Meditation />
      </div>
      
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Dashboard;