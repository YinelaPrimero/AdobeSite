
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
          <span className="adobe-logo">Digital Creation Tools</span>
        </div>
        <div className="nav-and-language">
          <nav className="nav">
            <a href="#apps" className="nav-link" onClick={handleAppsClick}>{t('applications')}</a>
          </nav>
          <div className="language-switcher">
            <button
              onClick={() => changeLanguage('es')}
              className={i18n.language === 'es' ? 'active' : ''}
            >
              <img src="/flags/spain.png" alt="Spanish Flag" className="flag-icon" /> ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'active' : ''}
            >
              <img src="/flags/united-states.png" alt="English Flag" className="flag-icon" /> EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
