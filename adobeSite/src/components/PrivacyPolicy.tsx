
import React from "react";
import "./Legal.css";
import '../components/HomePage.css';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1 className="legal-title">{t('privacyTitle')}</h1>
        <div className="legal-intro">{t('privacyIntro')}</div>
        <div>
          <div className="legal-section-title">{t('privacySection1Title')}</div>
          <div className="legal-text">{t('privacySection1')}</div>
          <div className="legal-section-title">{t('privacySection2Title')}</div>
          <div className="legal-text">{t('privacySection2')}</div>
          <div className="legal-section-title">{t('privacySection3Title')}</div>
          <div className="legal-text">{t('privacySection3')}</div>
          <div className="legal-section-title">{t('privacySection4Title')}</div>
          <div className="legal-text">{t('privacySection4')}</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
