import type { AdobeApp } from '../types';

export const adobeApps: AdobeApp[] = [
  // Planes y Suites
  {
    id: 'creative-cloud-pro',
    name: 'Creative Cloud Pro',
    shortDescription: 'Más de 20 aplicaciones creativas profesionales',
    description: 'El plan completo de Creative Cloud incluye todas las aplicaciones creativas de Adobe, herramientas de IA generativa, almacenamiento en la nube y acceso a Adobe Stock. La solución definitiva para creativos profesionales.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Planes Completos',
    features: [
      'Más de 20 aplicaciones creativas',
      'Herramientas de IA generativa',
      '100GB de almacenamiento en la nube',
      'Adobe Stock incluido',
      'Soporte técnico prioritario'
    ],
    price: 'Desde $52.99/mes',
    popular: true
  },
  {
    id: 'creative-cloud-standard',
    name: 'Creative Cloud Standard',
    shortDescription: 'Las principales aplicaciones de Creative Cloud',
    description: 'Comienza tu jornada creativa con las aplicaciones esenciales de Creative Cloud: Photoshop, Illustrator, Acrobat Pro y más. Perfecto para principiantes y usuarios ocasionales.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Planes Completos',
    features: [
      'Photoshop e Illustrator',
      'Acrobat Pro',
      'Almacenamiento en la nube',
      'Sincronización automática',
      'Actualizaciones regulares'
    ],
    price: 'Desde $29.99/mes'
  },

  // Fotografía
  {
    id: 'fotografia',
    name: 'Fotografía',
    shortDescription: 'Lightroom, Lightroom Classic, Photoshop + 1TB almacenamiento',
    description: 'El plan perfecto para fotógrafos. Incluye Lightroom, Lightroom Classic, Photoshop para computadora, web, iPhone y iPad, más 1TB de almacenamiento en la nube.',
    logo: ['/img/Iconos SVG/lightroom.svg', '/img/Iconos SVG/photoshop.svg'],
    category: 'Fotografía',
    features: [
      'Lightroom y Lightroom Classic',
      'Photoshop completo',
      '1TB de almacenamiento en la nube',
      'Sincronización entre dispositivos',
      'Herramientas de IA para fotos'
    ],
    price: 'Desde $9.99/mes',
    popular: true
  },
  {
    id: 'lightroom',
    name: 'Lightroom',
    shortDescription: 'Edita, organiza, almacena y comparte fotos',
    description: 'Lightroom es la herramienta esencial para fotógrafos. Ofrece flujos de trabajo optimizados para organización, edición y compartición de fotografías.',
    logo: '/img/Iconos SVG/lightroom.svg',
    category: 'Fotografía',
    features: [
      'Edición no destructiva',
      'Organización de catálogos',
      'Sincronización en la nube',
      'Herramientas de retoque',
      'Presets y perfiles'
    ],
    price: 'Desde $9.99/mes'
  },

  // Diseño Gráfico
  {
    id: 'photoshop',
    name: 'Photoshop',
    shortDescription: 'Crea espectaculares gráficos, fotos e ilustraciones',
    description: 'Photoshop es la aplicación líder mundial para edición de imágenes y diseño gráfico. Con herramientas profesionales de retoque, composición y efectos visuales.',
    logo: '/img/Iconos SVG/photoshop.svg',
    category: 'Diseño Gráfico',
    features: [
      'Edición de imágenes profesional',
      'Herramientas de retoque avanzadas',
      'Filtros y efectos creativos',
      'Trabajo con capas',
      'Integración con otras apps de Adobe'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    shortDescription: 'Crea diseños, ilustraciones y gráficos vectoriales',
    description: 'Illustrator es la herramienta estándar para crear gráficos vectoriales escalables. Perfecto para logos, iconos, ilustraciones y diseños que necesitan mantener su calidad en cualquier tamaño.',
    logo: '/img/Iconos SVG/illustrator.svg',
    category: 'Diseño Gráfico',
    features: [
      'Gráficos vectoriales escalables',
      'Herramientas de dibujo precisas',
      'Tipografía avanzada',
      'Efectos 3D y perspectiva',
      'Integración con Creative Cloud'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },

  // Video
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    shortDescription: 'Edición profesional de video y películas',
    description: 'Premiere Pro es el software de edición de video más utilizado por profesionales. Ofrece herramientas avanzadas para edición, efectos, colorización y exportación de videos de alta calidad.',
    logo: '/img/Iconos SVG/premiere.svg',
    category: 'Video',
    features: [
      'Edición de video multicapa',
      'Efectos y transiciones profesionales',
      'Corrección de color avanzada',
      'Integración con After Effects',
      'Exportación en múltiples formatos'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    shortDescription: 'Crea gráficos animados y efectos visuales',
    description: 'After Effects es la herramienta estándar para motion graphics y efectos visuales. Crea animaciones impresionantes, efectos de partículas y composiciones visuales complejas.',
    logo: '/img/Iconos SVG/after-effects.svg',
    category: 'Video',
    features: [
      'Motion graphics avanzados',
      'Efectos de partículas',
      'Composición 3D',
      'Integración con Cinema 4D',
      'Expresiones y scripting'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },

  // Diseño Editorial
  {
    id: 'indesign',
    name: 'InDesign',
    shortDescription: 'Diseño y maquetación para medios digitales e impresos',
    description: 'InDesign es la herramienta profesional para diseño editorial y maquetación. Perfecta para crear revistas, libros, folletos y documentos interactivos.',
    logo: '/img/Iconos SVG/indesign.svg',
    category: 'Diseño Editorial',
    features: [
      'Maquetación profesional',
      'Tipografía avanzada',
      'Diseño interactivo',
      'Exportación para impresión',
      'Trabajo con múltiples páginas'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'incopy',
    name: 'InCopy',
    shortDescription: 'Modifica el texto y la maquetación sin afectar los diseños',
    description: 'InCopy permite a los editores y escritores trabajar con texto en documentos de InDesign sin afectar el diseño. Perfecto para flujos de trabajo editoriales colaborativos.',
    logo: '/img/Iconos SVG/incopy.svg',
    category: 'Diseño Editorial',
    features: [
      'Edición de texto en tiempo real',
      'Integración con InDesign',
      'Control de versiones',
      'Trabajo colaborativo',
      'Flujos de trabajo editoriales'
    ],
    price: 'Desde $20.99/mes'
  },

  // Productividad
  {
    id: 'acrobat-pro',
    name: 'Acrobat Pro',
    shortDescription: 'Crea, edita, firma y gestiona archivos PDF',
    description: 'Acrobat Pro es la solución completa para trabajar con documentos PDF. Permite crear, editar, firmar y colaborar en documentos PDF de forma profesional.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productividad',
    features: [
      'Creación y edición de PDFs',
      'Firma digital y electrónica',
      'Colaboración en tiempo real',
      'Conversión de formatos',
      'Protección de documentos'
    ],
    price: 'Desde $14.99/mes',
    popular: true
  },
  {
    id: 'acrobat-ai-assistant',
    name: 'Asistente de IA para Acrobat',
    shortDescription: 'Haz preguntas a tus documentos para obtener respuestas rápidas',
    description: 'El Asistente de IA para Acrobat te permite hacer preguntas a tus documentos PDF y obtener respuestas rápidas y resúmenes con un solo clic. Funciona con Acrobat Pro, Standard y Reader.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productividad',
    features: [
      'Preguntas inteligentes a documentos',
      'Resúmenes automáticos',
      'Búsqueda avanzada',
      'Integración con Acrobat',
      'Análisis de contenido'
    ],
    price: 'Desde $4.99/mes'
  },

  // Audio
  {
    id: 'audition',
    name: 'Audition',
    shortDescription: 'Grabación, mezcla y restauración de audio',
    description: 'Audition es la estación de trabajo de audio profesional de Adobe. Ideal para podcasters, músicos y productores de audio que necesitan herramientas avanzadas.',
    logo: '/img/Iconos SVG/audition.svg',
    category: 'Audio',
    features: [
      'Grabación multipista',
      'Mezcla y masterización',
      'Restauración de audio',
      'Efectos y plugins',
      'Integración con Premiere Pro'
    ],
    price: 'Desde $20.99/mes'
  },

  // Desarrollo Web
  {
    id: 'dreamweaver',
    name: 'Dreamweaver',
    shortDescription: 'Diseña y desarrolla sitios web modernos',
    description: 'Dreamweaver combina un editor visual con capacidades de codificación para crear sitios web responsivos y modernos. Perfecto para diseñadores y desarrolladores.',
    logo: '/img/Iconos SVG/dreamweaver.svg',
    category: 'Desarrollo Web',
    features: [
      'Editor visual y de código',
      'Diseño responsivo',
      'Integración con Git',
      'Previsualización en vivo',
      'Soporte para frameworks modernos'
    ],
    price: 'Desde $20.99/mes'
  },

  // Animación
  {
    id: 'animate',
    name: 'Animate',
    shortDescription: 'Diseña animaciones vectoriales interactivas',
    description: 'Animate te permite crear animaciones 2D para web, aplicaciones y juegos. Combina herramientas de dibujo con capacidades de programación para animaciones interactivas.',
    logo: '/img/Iconos SVG/animate.svg',
    category: 'Animación',
    features: [
      'Animación 2D vectorial',
      'Interactividad con JavaScript',
      'Exportación multiplataforma',
      'Herramientas de dibujo',
      'Integración con Creative Cloud'
    ],
    price: 'Desde $20.99/mes'
  },

  // Contenido Rápido
  {
    id: 'express-premium',
    name: 'Adobe Express Premium',
    shortDescription: 'Diseña folletos, videos de TikTok, currículums y reels',
    description: 'Adobe Express Premium es la nueva versión todo en uno de Adobe Express. Diseña contenido visual rápidamente con plantillas profesionales y herramientas de IA.',
    logo: '/img/Iconos SVG/cc-express.svg',
    category: 'Contenido Rápido',
    features: [
      'Plantillas profesionales',
      'Herramientas de IA avanzadas',
      'Creación de videos',
      'Diseño de redes sociales',
      'Colaboración en equipo'
    ],
    price: 'Desde $9.99/mes',
    popular: true
  },

  // IA Generativa
  {
    id: 'firefly-standard',
    name: 'Adobe Firefly Standard',
    shortDescription: 'Explora la IA creativa con 2,000 créditos mensuales',
    description: 'Firefly Standard te permite explorar la IA creativa con 2,000 créditos mensuales para funciones premium de video y audio, además de acceso ilimitado a funciones estándar de imagen.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '2,000 créditos mensuales',
      'Generación de imágenes con IA',
      'Funciones premium de video',
      'Funciones premium de audio',
      'Acceso ilimitado a funciones estándar'
    ],
    price: 'Desde $4.99/mes'
  },
  {
    id: 'firefly-pro',
    name: 'Adobe Firefly Pro',
    shortDescription: 'Descubre la IA creativa con 7,000 créditos mensuales',
    description: 'Firefly Pro te ofrece 7,000 créditos mensuales para funciones premium de video y audio, además de acceso ilimitado a funciones estándar de imagen. Perfecto para creadores profesionales.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '7,000 créditos mensuales',
      'Generación de imágenes con IA',
      'Funciones premium de video',
      'Funciones premium de audio',
      'Herramientas profesionales'
    ],
    price: 'Desde $9.99/mes'
  },
  {
    id: 'firefly-premium',
    name: 'Adobe Firefly Premium',
    shortDescription: 'Crea a escala con 50,000 créditos mensuales',
    description: 'Firefly Premium es la solución empresarial con 50,000 créditos mensuales para funciones premium de video y audio. Ideal para equipos y empresas que necesitan crear contenido a gran escala.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '50,000 créditos mensuales',
      'Generación de imágenes con IA',
      'Funciones premium de video',
      'Funciones premium de audio',
      'Soporte empresarial'
    ],
    price: 'Desde $19.99/mes'
  },

 

  // Recursos
  {
    id: 'adobe-stock',
    name: 'Adobe Stock',
    shortDescription: 'Accede a millones de imágenes, videos 4K y plantillas',
    description: 'Adobe Stock es tu biblioteca de recursos creativos con millones de imágenes, videos 4K y HD, plantillas y mucho más sin derechos de autor, todo en el mismo plan.',
    logo: '/img/Iconos SVG/stock.svg',
    category: 'Recursos',
    features: [
      'Millones de imágenes',
      'Videos 4K y HD',
      'Plantillas profesionales',
      'Sin derechos de autor',
      'Integración con Creative Cloud'
    ],
    price: 'Desde $29.99/mes'
  },
   // 3D y Modelado
   {
    id: 'substance-3d-texturing',
    name: 'Texturizados 3D con Adobe Substance',
    shortDescription: 'Crea, captura y pinta materiales en 3D',
    description: 'Adobe Substance para texturizado 3D te permite crear, capturar y pintar materiales realistas en 3D. Herramientas profesionales para artistas 3D y diseñadores.',
    logo: [
      '/img/Iconos SVG/substance-3d-sampler.svg',
      '/img/Iconos SVG/substance-3d-designer.svg',
      '/img/Iconos SVG/substance-3d-painter.svg'
    ],
    category: '3D y Modelado',
    features: [
      'Creación de materiales 3D',
      'Captura de texturas',
      'Pintura digital 3D',
      'Biblioteca de materiales',
      'Exportación multiplataforma'
    ],
    price: 'Desde $19.99/mes'
  },
  {
    id: 'substance-3d-collection',
    name: 'Adobe Substance 3D Collection',
    shortDescription: 'Modela, texturiza y renderiza activos y escenas en 3D',
    description: 'La colección completa de Substance 3D incluye todas las herramientas necesarias para crear, texturizar y renderizar activos y escenas 3D. Incluye acceso a miles de activos 3D.',
    logo: [
      '/img/Iconos SVG/substance-3d-modeler.svg',
      '/img/Iconos SVG/substance-3d-sampler.svg',
      '/img/Iconos SVG/substance-3d-designer.svg',
      '/img/Iconos SVG/substance-3d-painter.svg',
      '/img/Iconos SVG/substance-3d-stager.svg',
      '/img/Iconos SVG/substance-3d-assets.svg'
    ],
    category: '3D y Modelado',
    features: [
      'Modelado 3D profesional',
      'Texturizado avanzado',
      'Renderizado de alta calidad',
      'Miles de activos 3D',
      'Integración con Creative Cloud'
    ],
    price: 'Desde $49.99/mes',
    popular: true
  }
];
