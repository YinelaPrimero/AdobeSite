import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="adobe-logo">Adobe</span>
          <span className="creative-cloud">Creative Cloud</span>
        </div>
        <nav className="nav">
          <a href="#apps" className="nav-link">Aplicaciones</a>
          <a href="#plans" className="nav-link">Planes</a>
          <a href="#support" className="nav-link">Soporte</a>
        </nav>
        <div className="header-actions">
          <button className="btn-secondary">Iniciar sesión</button>
          <button className="btn-primary">Prueba gratuita</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
