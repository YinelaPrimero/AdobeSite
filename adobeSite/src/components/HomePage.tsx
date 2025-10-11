import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { allServices } from '../data/services';
import { servicesTranslations } from '../data/servicesTranslations';
import './HomePage.css';

const floatingCardColors: { [key: string]: string } = {
  'illustrator': '#FF9A00',
  'photoshop': '#31A8FF',
  'cloudways-hosting': '#6366F1',
  'krisp-ai': '#EF4444',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>(t('all'));
  const [currentServices, setCurrentServices] = useState(allServices);

  // Función para obtener el servicio con traducciones
  const getTranslatedService = (service: any) => {
    const translations = servicesTranslations[i18n.language as 'es' | 'en']?.[service.id as keyof typeof servicesTranslations.es];
    if (translations) {
      return {
        ...service,
        name: translations.name || service.name,
        shortDescription: translations.shortDescription || service.shortDescription
      };
    }
    return service;
  };

  useEffect(() => {
    setSelectedCategory(t('all'));
    setCurrentServices(allServices);
  }, [i18n.language, t]);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/app/${serviceId}`);
  };

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(new Set(currentServices.map(service => service.category)));

  const filteredServices = selectedCategory === t('all')
    ? [...currentServices].sort(() => Math.random() - 0.5)
    : currentServices.filter(service => t(service.category) === selectedCategory);

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
            <div className="card card-3" style={{ borderColor: floatingCardColors['cloudways-hosting'] }}>
              <img src="/img/newsServices/cloudways.svg" alt="Cloudways Logo" />
            </div>
            <div className="card card-4" style={{ borderColor: floatingCardColors['krisp-ai'] }}>
              <img src="/img/newsServices/krisp.svg" alt="Krisp Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="apps-section" id="services">
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

          {/* Services Grid */}
          <div className="apps-grid">
            {filteredServices.map(service => {
              const translatedService = getTranslatedService(service);
              return (
                <div
                  key={service.id}
                  className={`app-card ${service.popular ? 'popular' : ''} ${service.id}`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.popular && <div className="popular-badge">{t('popular')}</div>}
                  <div className="app-icon">
                    <div className="app-icon-placeholder">
                      {translatedService.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <h3 className="app-name">{translatedService.name}</h3>
                  <p className="app-description">{translatedService.shortDescription}</p>
                  <div className="app-category">{t(service.category)}</div>
                  <button className="app-btn">{t('viewDetails')}</button>
                </div>
              );
            })}
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
