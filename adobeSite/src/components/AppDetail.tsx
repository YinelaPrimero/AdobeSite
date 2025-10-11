import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { allServices } from '../data/services';
import { servicesTranslations } from '../data/servicesTranslations';
import './AppDetail.css';

const AppDetail: React.FC = () => {

  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentServicesData = useMemo(() => {
    return allServices;
  }, [i18n.language]);

  const service = currentServicesData.find(service => service.id === appId);
  
  // Obtener traducciones del servicio si existen
  const serviceTranslations = service && servicesTranslations[i18n.language as 'es' | 'en']?.[service.id as keyof typeof servicesTranslations.es];
  
  // Usar traducciones si existen, sino usar datos originales
  const displayService = service ? {
    ...service,
    name: serviceTranslations?.name || service.name,
    shortDescription: serviceTranslations?.shortDescription || service.shortDescription,
    description: serviceTranslations?.description || service.description,
    features: serviceTranslations?.features || service.features,
    extras: serviceTranslations?.extras || service.extras,
    recommendedFor: serviceTranslations?.recommendedFor || service.recommendedFor
  } : null;

  // Scroll al inicio cada vez que cambia el appId
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [appId]);

  if (!displayService) {
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

        {/* Service Header */}
        <div className="app-header">
          <div className="app-header-content">
            <div className="app-icon-large">
              <div className="app-icon-placeholder-large">
                {displayService.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="app-info">
              <h1 className="app-title">{displayService.name}</h1>
              <p className="app-category">{t(displayService.category)}</p>
              <p className="app-description">{displayService.description}</p>
              <div className="app-actions">
                <button
                  className="btn-primary-large"
                  onClick={() => displayService.website ? window.open(displayService.website, '_blank') : navigate('/')}
                >
                  {displayService.website ? (i18n.language === 'es' ? 'Visitar sitio web' : 'Visit website') : t('buyNow')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>{t('whatItIncludes')}</h2>
          <div className="features-grid">
            {displayService.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <span>{feature}</span>
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
                <li>{t('fullAccess', { appName: displayService.name })}</li>
                <li>{t('automaticUpdates')}</li>
                <li>{t('techSupport')}</li>
                <li>{t('cloudStorage')}</li>
                <li>{t('creativeCloudIntegration')}</li>
              </ul>
            </div>
            
            {displayService.extras && displayService.extras.length > 0 && (
              <div className="info-card">
                <h3>{t('extrasTitle')}</h3>
                <ul>
                  {displayService.extras.map((extra, index) => (
                    <li key={index}>{extra}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {displayService.recommendedFor && displayService.recommendedFor.length > 0 && (
              <div className="info-card">
                <h3>{t('recommendedForTitle')}</h3>
                <ul>
                  {displayService.recommendedFor.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppDetail;
