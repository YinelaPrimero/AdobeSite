import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adobeApps } from '../data/adobeApps';
import './HomePage.css';

const floatingCardColors: { [key: string]: string } = {
  'illustrator': '#FF9A00',
  'photoshop': '#31A8FF',
  'substance-3d-modeler': '#4CAF50',
  'creative-cloud': '#E10098',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const handleAppClick = (appId: string) => {
    navigate(`/app/${appId}`);
  };

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(new Set(adobeApps.map(app => app.category)));

  const filteredApps = selectedCategory === 'Todas'
    ? adobeApps
    : adobeApps.filter(app => app.category === selectedCategory);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Descubre el poder de la
            <span className="gradient-text"> Creative Cloud</span>
          </h1>
          <p className="hero-subtitle">
            Más de 20 aplicaciones creativas profesionales para diseñadores, 
            fotógrafos, videógrafos y creadores de contenido.
          </p>
          
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card card-1" style={{ borderColor: floatingCardColors['illustrator'] }}>
              <img src="/img/Iconos SVG/illustrator.svg" alt="Illustrator logo" />
            </div>
            <div className="card card-2" style={{ borderColor: floatingCardColors['photoshop'] }}>
              <img src="/img/Iconos SVG/photoshop.svg" alt="Photoshop logo" />
            </div>
            <div className="card card-3" style={{ borderColor: floatingCardColors['substance-3d-modeler'] }}>
              <img src="/img/Iconos SVG/substance-3d-modeler.svg" alt="Substance 3D Modeler logo" />
            </div>
            <div className="card card-4" style={{ borderColor: floatingCardColors['creative-cloud'] }}>
              <img src="/img/Iconos SVG/creative-cloud.svg" alt="Creative Cloud logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="apps-section" id="apps">
        <div className="container">
          <div className="section-header">
            <h2>Explora nuestras aplicaciones</h2>
            <p>Herramientas profesionales para cada tipo de creativo</p>
          </div>

          {/* Categories Filter */}
          <div className="categories-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'Todas' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Todas')}
            >
              Todas
            </button>
            {categories.map(category => (
              <button 
                key={category} 
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
              >
                {category}
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
                {app.popular && <div className="popular-badge">Popular</div>}
                <div className="app-logo">
                  {Array.isArray(app.logo) ? (
                    <div className="app-logos-container">
                      {app.logo.map((logoSrc, index) => (
                        <img key={index} src={logoSrc} alt={`${app.name} logo`} className="app-logo-img" />
                      ))}
                    </div>
                  ) : (
                    <img src={app.logo} alt={`${app.name} logo`} className="app-logo-img" />
                  )}
                </div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-description">{app.shortDescription}</p>
                <div className="app-category">{app.category}</div>
                <button className="app-btn">Ver detalles</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>¿Por qué elegir Creative Cloud?</h2>
            <p>Todo lo que necesitas para crear contenido profesional</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Almacenamiento en la nube</h3>
              <p>Accede a tus archivos desde cualquier lugar con 100GB de almacenamiento seguro.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Sincronización automática</h3>
              <p>Tus proyectos se sincronizan automáticamente entre todos tus dispositivos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>IA generativa</h3>
              <p>Herramientas de IA para acelerar tu flujo de trabajo creativo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Colaboración en equipo</h3>
              <p>Trabaja en equipo con herramientas de colaboración integradas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
