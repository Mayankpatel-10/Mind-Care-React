import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import ChatAssistant from './ChatAssistant';
import MoodTracker from './MoodTracker';
import MoodChart from './MoodChart';
import RelaxationStation from './RelaxationStation';
import Assessment from './Assessment';
import Resources from './Resources';
import Helpline from './Helpline';
import Meditation from './Meditation';
import Footer from './Footer';

const Dashboard = ({ user, onLogout, isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'mood', label: 'Mood Tracker', icon: '😊' },
    { id: 'chat', label: 'AI Assistant', icon: '💬' },
    { id: 'chart', label: 'Mood Chart', icon: '📊' },
    { id: 'relaxation', label: 'Relaxation', icon: '🧘' },
    { id: 'assessment', label: 'Assessment', icon: '📝' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'helpline', label: 'Helpline', icon: '📞' },
    { id: 'meditation', label: 'Meditation', icon: '🎧' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="overview-grid">
            <MoodTracker />
            <MoodChart />
            <ChatAssistant />
          </div>
        );
      case 'mood':
        return <MoodTracker />;
      case 'chat':
        return <ChatAssistant />;
      case 'chart':
        return <MoodChart />;
      case 'relaxation':
        return <RelaxationStation />;
      case 'assessment':
        return <Assessment />;
      case 'resources':
        return <Resources />;
      case 'helpline':
        return <Helpline />;
      case 'meditation':
        return <Meditation />;
      default:
        return <MoodTracker />;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>MindCare</h2>
          <p className="user-name">{user?.name || 'User'}</p>
        </div>
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>{sections.find(s => s.id === activeSection)?.label || 'Dashboard'}</h1>
        </header>
        <div className="content-body">
          {renderSection()}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;