import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="adobe-logo">Adobe</span>
        </div>
        <nav className="nav">
          <a href="#apps" className="nav-link">Aplicaciones</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
