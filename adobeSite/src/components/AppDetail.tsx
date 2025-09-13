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
              <img src={app.logo} alt={`${app.name} logo`} className="app-logo-large-img" />
            </div>
            <div className="app-info">
              <h1 className="app-title">{app.name}</h1>
              <p className="app-category">{app.category}</p>
              <p className="app-description">{app.description}</p>
              <div className="app-price-large">{app.price}</div>
              <div className="app-actions">
                <button className="btn-primary-large">Probar gratis</button>
                <button className="btn-secondary-large">Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>Características principales</h2>
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
              <h3>¿Qué incluye?</h3>
              <ul>
                <li>Acceso completo a {app.name}</li>
                <li>Actualizaciones automáticas</li>
                <li>Soporte técnico 24/7</li>
                <li>Almacenamiento en la nube</li>
                <li>Integración con Creative Cloud</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Requisitos del sistema</h3>
              <ul>
                <li>Windows 10 o macOS 10.15+</li>
                <li>8 GB de RAM (recomendado 16 GB)</li>
                <li>2 GB de espacio en disco</li>
                <li>Conexión a internet</li>
                <li>Resolución 1280x800 o superior</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Recursos adicionales</h3>
              <ul>
                <li>Tutoriales en video</li>
                <li>Plantillas gratuitas</li>
                <li>Comunidad de usuarios</li>
                <li>Documentación completa</li>
                <li>Foros de soporte</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppDetail;
