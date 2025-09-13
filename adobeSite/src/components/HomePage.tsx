import React from 'react';
import { useNavigate } from 'react-router-dom';
import { adobeApps } from '../data/adobeApps';
import './HomePage.css';

const floatingCardColors: { [key: string]: string } = {
  'illustrator': '#FF9A00',
  'photoshop': '#31A8FF',
  'substance-3d-modeler': '#4CAF50',
  'creative-cloud': '#E10098',
};

const appHoverColors: { [key: string]: string } = {
  'fotografia': 'linear-gradient(135deg, #00A7F5, #31A8FF)', // Lightroom blue to Photoshop blue
  'substance-3d-collection': 'linear-gradient(135deg, #4CAF50, #388E3C)', // Green gradient
  'substance-3d-texturing': 'linear-gradient(135deg, #4CAF50, #388E3C)', // Green gradient
  'creative-cloud-pro': '#E10098', // Example: Adobe Creative Cloud color
  'creative-cloud-standard': '#E10098',
  'lightroom': '#00A7F5',
  'photoshop': '#31A8FF',
  'illustrator': '#FF9A00',
  'premiere-pro': '#9900FF',
  'after-effects': '#CC00FF',
  'indesign': '#FF3366',
  'incopy': '#FF6699',
  'acrobat-pro': '#FF0000',
  'acrobat-ai-assistant': '#FF0000',
  'audition': '#00E676',
  'dreamweaver': '#00BCD4',
  'animate': '#FF6F00',
  'express-premium': '#34D1C3',
  'firefly-standard': '#FF0066',
  'firefly-pro': '#FF0066',
  'firefly-premium': '#FF0066',
  'adobe-stock': '#00C853',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleAppClick = (appId: string) => {
    navigate(`/app/${appId}`);
  };

  const categories = Array.from(new Set(adobeApps.map(app => app.category)));

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
            <button className="filter-btn active">Todas</button>
            {categories.map(category => (
              <button key={category} className="filter-btn">
                {category}
              </button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="apps-grid">
            {adobeApps.map(app => (
              <div 
                key={app.id} 
                className={`app-card ${app.popular ? 'popular' : ''} ${app.id}`}
                onClick={() => handleAppClick(app.id)}
                style={{ '--app-accent-color': appHoverColors[app.id] } as React.CSSProperties}
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
                <div className="app-price">{app.price}</div>
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
