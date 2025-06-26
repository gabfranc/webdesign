import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="copyright">&copy; {currentYear} Gabby's Design Studio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://instagram.com/gabby.designstudio" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/gabriellefranco/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:gab.ann.franco@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;