import React from 'react';

const Footer = () => {
  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to show settings (you can implement a settings modal later)
  const showSettings = () => {
    alert('Settings feature will be implemented soon!');
  };

  return (
    <footer className="app-footer">
      <div className="footer-nav">
        <div className="footer-item" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span>Home</span>
        </div>
        <div className="footer-item" onClick={() => scrollToSection('resources-section')}>
          <span>Resources</span>
        </div>
        <div className="footer-item" onClick={() => scrollToSection('assessment-section')}>
          <span>Assessments</span>
        </div>
        <div className="footer-item" onClick={() => scrollToSection('helpline-section')}>
          <span>Support</span>
        </div>
        <div className="footer-item" onClick={showSettings}>
          <span>Settings</span>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 MindCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;