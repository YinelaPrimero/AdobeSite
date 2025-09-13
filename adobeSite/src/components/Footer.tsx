import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="adobe-logo">Adobe</span>
        <p>&copy; 2024 Adobe Inc. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
