
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAppsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que la navegación termine antes de hacer scroll
      setTimeout(() => {
        const el = document.getElementById('apps');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('apps');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="adobe-logo">Adobe</span>
        </div>
        <nav className="nav">
          <a href="#apps" className="nav-link" onClick={handleAppsClick}>Aplicaciones</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
