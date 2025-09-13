import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { adobeApps } from '../data/adobeApps';
import './AppDetail.css';

const AppDetail: React.FC = () => {

  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const app = adobeApps.find(app => app.id === appId);

  // Scroll al inicio cada vez que cambia el appId
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [appId]);

  if (!app) {
    return (
      <div className="app-detail">
        <div className="container">
          <div className="not-found">
            <h2>Aplicación no encontrada</h2>
            <p>La aplicación que buscas no existe.</p>
            <button onClick={() => navigate('/')} className="btn-primary">
              Volver al inicio
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
          Volver a las aplicaciones
        </button>

        {/* App Header */}
        <div className="app-header">
          <div className="app-header-content">
            <div className="app-logo-large">
              {Array.isArray(app.logo)
                ? <img src={app.logo[0]} alt={`${app.name} logo`} className="app-logo-large-img" />
                : <img src={app.logo} alt={`${app.name} logo`} className="app-logo-large-img" />}
            </div>
            <div className="app-info">
              <h1 className="app-title">{app.name}</h1>
              <p className="app-category">{app.category}</p>
              <p className="app-description">{app.description}</p>
              <div className="app-actions">
                <button className="btn-primary-large">Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>¿Qué Incluye?</h2>
          <div className="features-grid">
            {app.features.map((feature, index) => (
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
              <h3>Beneficios</h3>
              <ul>
                <li>Acceso completo a {app.name}</li>
                <li>Actualizaciones automáticas</li>
                <li>Soporte técnico 24/7</li>
                <li>Almacenamiento en la nube</li>
                <li>Integración con Creative Cloud</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Extras</h3>
              <ul>
                {app.extras && app.extras.map((extra, index) => (
                  <li key={index}>{extra}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Recomendado para</h3>
              <ul>
                {app.recommendedFor && app.recommendedFor.map((item, index) => (
                  <li key={index}>{item}</li>
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
