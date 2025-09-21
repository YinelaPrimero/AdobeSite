import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="adobe-logo">Digital Creation Tools</span>
        <p>&copy; 2025 Digital Creation Tools. {t('allRightsReserved', 'Todos los derechos reservados.')}</p>
        <div className="footer-links">
          <Link to="/terminos" className="footer-link-btn">{t('termsTitle')}</Link>
          <span className="footer-separator">|</span>
          <Link to="/privacidad" className="footer-link-btn">{t('privacyTitle')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
