import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Productos</h4>
            <ul>
              <li><a href="#photoshop">Photoshop</a></li>
              <li><a href="#illustrator">Illustrator</a></li>
              <li><a href="#premiere">Premiere Pro</a></li>
              <li><a href="#after-effects">After Effects</a></li>
              <li><a href="#indesign">InDesign</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Planes</h4>
            <ul>
              <li><a href="#individual">Individual</a></li>
              <li><a href="#business">Empresas</a></li>
              <li><a href="#students">Estudiantes</a></li>
              <li><a href="#teachers">Educadores</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#tutorials">Tutoriales</a></li>
              <li><a href="#community">Comunidad</a></li>
              <li><a href="#support">Soporte</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#careers">Carreras</a></li>
              <li><a href="#news">Noticias</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Adobe Inc. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#privacy">Privacidad</a>
              <a href="#terms">Términos</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
