import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { adobeApps } from '../data/adobeApps';
import { adobeAppsEn } from '../data/adobeAppsEn';
import './AppDetail.css';

const AppDetail: React.FC = () => {

  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentAppsData = useMemo(() => {
    return i18n.language === 'en' ? adobeAppsEn : adobeApps;
  }, [i18n.language]);

  const app = currentAppsData.find(app => app.id === appId);

  // Scroll al inicio cada vez que cambia el appId
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [appId]);

  if (!app) {
    return (
      <div className="app-detail">
        <div className="container">
          <div className="not-found">
            <h2>{t('appNotFoundTitle')}</h2>
            <p>{t('appNotFoundDescription')}</p>
            <button onClick={() => navigate('/')} className="btn-primary">
              {t('backToHome')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-detail">
      <div className="container">
        {/* Back Button */}
        <button onClick={() => navigate('/')} className="back-button">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 18L8.5 12L14.5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('backToApps')}
        </button>

        {/* App Header */}
        <div className="app-header">
          <div className="app-header-content">
            <div className="app-logo-large">
              {Array.isArray(app.logo)
                ? <img src={app.logo[0]} alt={`${app.name} ${t('logo')}`} className="app-logo-large-img" />
                : <img src={app.logo} alt={`${app.name} ${t('logo')}`} className="app-logo-large-img" />}
            </div>
            <div className="app-info">
              <h1 className="app-title">{app.name}</h1>
              <p className="app-category">{t(app.category)}</p>
              <p className="app-description">{t(`description_${app.id}`)}</p>
              <div className="app-actions">
                <a
                  className="btn-primary-large"
                  href="https://www.adobe.com/co/creativecloud/plans.html?sdid=ZKD5F5F3&mv=search&mv2=paidsearch&ef_id=Cj0KCQjwxL7GBhDXARIsAGOcmIMrDdmFsYGJCAtfBN_gffFuTG7ivyStXvW4I9m2_HWlrHKLXRNZj-saAhn1EALw_wcB:G:s&s_kwcid=AL!3085!3!719866303404!e!!g!!adobe!21868494465!171552491002&gad_source=1&gad_campaignid=21868494465&gbraid=0AAAAADxybVolk2tT0EkQHmfQexwrSSljt&gclid=Cj0KCQjwxL7GBhDXARIsAGOcmIMrDdmFsYGJCAtfBN_gffFuTG7ivyStXvW4I9m2_HWlrHKLXRNZj-saAhn1EALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('buyNow')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>{t('whatItIncludes')}</h2>
          <div className="features-grid">
            {app.features.map((_, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <span>{t(`feature_${app.id}_${index + 1}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-grid">
            <div className="info-card">
              <h3>{t('benefitsTitle')}</h3>
              <ul>
                <li>{t('fullAccess', { appName: app.name })}</li>
                <li>{t('automaticUpdates')}</li>
                <li>{t('techSupport')}</li>
                <li>{t('cloudStorage')}</li>
                <li>{t('creativeCloudIntegration')}</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>{t('extrasTitle')}</h3>
              <ul>
                {app.extras && app.extras.map((_, index) => (
                  <li key={index}>{t(`extra_${app.id}_${index + 1}`)}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <h3>{t('recommendedForTitle')}</h3>
              <ul>
                {app.recommendedFor && app.recommendedFor.map((_, index) => (
                  <li key={index}>{t(`recommendedFor_${app.id}_${index + 1}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppDetail;
