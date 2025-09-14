import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { adobeApps } from '../data/adobeApps';
import { adobeAppsEn } from '../data/adobeAppsEn';
import './HomePage.css';

const floatingCardColors: { [key: string]: string } = {
  'illustrator': '#FF9A00',
  'photoshop': '#31A8FF',
  'substance-3d-modeler': '#4CAF50',
  'creative-cloud': '#E10098',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>(t('all'));
  const [currentApps, setCurrentApps] = useState(adobeApps);

  useEffect(() => {
    setSelectedCategory(t('all'));
    setCurrentApps(i18n.language === 'en' ? adobeAppsEn : adobeApps);
  }, [i18n.language, t]);

  const handleAppClick = (appId: string) => {
    navigate(`/app/${appId}`);
  };

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(new Set(currentApps.map(app => app.category)));

  const filteredApps = selectedCategory === t('all')
    ? currentApps
    : currentApps.filter(app => t(app.category) === selectedCategory);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('heroTitlePart1')}
            <span className="gradient-text"> {t('creativeCloud')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('heroSubtitle')}
          </p>
          
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card card-1" style={{ borderColor: floatingCardColors['illustrator'] }}>
              <img src="/img/Iconos SVG/illustrator.svg" alt={t('illustratorLogoAlt')} />
            </div>
            <div className="card card-2" style={{ borderColor: floatingCardColors['photoshop'] }}>
              <img src="/img/Iconos SVG/photoshop.svg" alt={t('photoshopLogoAlt')} />
            </div>
            <div className="card card-3" style={{ borderColor: floatingCardColors['substance-3d-modeler'] }}>
              <img src="/img/Iconos SVG/substance-3d-modeler.svg" alt={t('substance3dModelerLogoAlt')} />
            </div>
            <div className="card card-4" style={{ borderColor: floatingCardColors['creative-cloud'] }}>
              <img src="/img/Iconos SVG/creative-cloud.svg" alt={t('creativeCloudLogoAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="apps-section" id="apps">
        <div className="container">
          <div className="section-header">
            <h2>{t('exploreAppsTitle')}</h2>
            <p>{t('exploreAppsSubtitle')}</p>
          </div>

          {/* Categories Filter */}
          <div className="categories-filter">
            <button 
              className={`filter-btn ${selectedCategory === t('all') ? 'active' : ''}`}
              onClick={() => handleFilterClick(t('all'))}
            >
              {t('all')}
            </button>
            {categories.map(category => (
              <button 
                key={category} 
                className={`filter-btn ${selectedCategory === t(category) ? 'active' : ''}`}
                onClick={() => handleFilterClick(t(category))}
              >
                {t(category)}
              </button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="apps-grid">
            {filteredApps.map(app => (
              <div 
                key={app.id} 
                className={`app-card ${app.popular ? 'popular' : ''} ${app.id}`}
                onClick={() => handleAppClick(app.id)}
              >
                {app.popular && <div className="popular-badge">{t('popular')}</div>}
                <div className="app-logo">
                  {Array.isArray(app.logo) ? (
                    <div className="app-logos-container">
                      {app.logo.map((logoSrc, index) => (
                        <img key={index} src={logoSrc} alt={`${app.name} ${t('logo')}`} className="app-logo-img" />
                      ))}
                    </div>
                  ) : (
                    <img src={app.logo} alt={`${app.name} ${t('logo')}`} className="app-logo-img" />
                  )}
                </div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-description">{t(app.shortDescription)}</p>
                <div className="app-category">{t(app.category)}</div>
                <button className="app-btn">{t('viewDetails')}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('whyChooseCCTitle')}</h2>
            <p>{t('whyChooseCCSubtitle')}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>{t('cloudStorageTitle')}</h3>
              <p>{t('cloudStorageDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>{t('autoSyncTitle')}</h3>
              <p>{t('autoSyncDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>{t('aiToolsTitle')}</h3>
              <p>{t('aiToolsDescription')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>{t('teamCollaborationTitle')}</h3>
              <p>{t('teamCollaborationDescription')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
