
import React from "react";
import "./Legal.css";
import '../components/HomePage.css';
import { useTranslation } from 'react-i18next';

const TermsOfUse: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1 className="legal-title">{t('termsTitle')}</h1>
        <div className="legal-intro">{t('termsIntro')}</div>
        <div>
          <div className="legal-section-title">{t('termsSection1Title')}</div>
          <div className="legal-text">{t('termsSection1')}</div>
          <div className="legal-section-title">{t('termsSection2Title')}</div>
          <div className="legal-text">{t('termsSection2')}</div>
          <div className="legal-section-title">{t('termsSection3Title')}</div>
          <div className="legal-text">{t('termsSection3')}</div>
          <div className="legal-section-title">{t('termsSection4Title')}</div>
          <div className="legal-text">{t('termsSection4')}</div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
