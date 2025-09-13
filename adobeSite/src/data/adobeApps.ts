import type { AdobeApp } from '../types';

export const adobeApps: AdobeApp[] = [
  // Planes y Suites
  {
    id: 'creative-cloud-pro',
    name: 'Creative Cloud Pro',
    shortDescription: 'Más de 20 aplicaciones creativas profesionales',
  description: 'Creative Cloud Pro es la solución definitiva para creativos profesionales y equipos que buscan el máximo potencial en su flujo de trabajo. Incluye acceso a más de 20 aplicaciones líderes de Adobe, como Photoshop, Illustrator, Premiere Pro, After Effects y muchas más, todas integradas con potentes herramientas de IA generativa para acelerar la creatividad. Disfruta de almacenamiento en la nube de alta capacidad, acceso a recursos premium de Adobe Stock, actualizaciones automáticas y soporte técnico prioritario. Ideal para agencias, estudios de diseño, fotógrafos, videógrafos y cualquier profesional que requiera lo mejor en herramientas creativas, colaboración en tiempo real y máxima productividad en todos sus proyectos.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Planes Completos',
    features: [
      'Photoshop',
      'Illustrator',
      'Adobe Premiere Pro',
      'Acrobat Pro',
      'InDesign',
      'After Effects',
      'Lightroom',
      'Adobe XD',
      'Animate',
      'Lightroom Classic',
      'Dreamweaver',
      'Audition',
      'InCopy',
      'Character Animator',
      'Capture',
      'Adobe Fresco',
      'Bridge',
      'Adobe Express',
      'Photoshop Express',
      'Media Encoder',
      'Aero',
      'Adobe Scan',
      'Fill & Sign',
      'Acrobat Reader',
      'Adobe Firefly'
    ],
    extras: [
      '100GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '4,000 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Foto',
      'Diseño gráfico',
      'Video',
      'Ilustración',
      'IU y UX',
      'Acrobat y PDF',
      'Redes sociales'
    ],
    price: 'Desde $52.99/mes',
    popular: true
  },
  {
    id: 'creative-cloud-standard',
    name: 'Creative Cloud Standard',
    shortDescription: 'Las principales aplicaciones de Creative Cloud',
  description: 'Creative Cloud Standard es el punto de partida ideal para quienes desean iniciarse en el mundo creativo digital. Incluye las aplicaciones esenciales de Adobe, como Photoshop, Illustrator y Acrobat Pro, permitiendo editar imágenes, crear gráficos vectoriales y gestionar documentos PDF con facilidad. Este plan está diseñado para estudiantes, freelancers y usuarios ocasionales que buscan herramientas profesionales sin la complejidad de una suite completa. Disfruta de almacenamiento en la nube, sincronización automática entre dispositivos y actualizaciones regulares para mantenerte siempre a la vanguardia.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Planes Completos',
    features: [
      'Photoshop',
      'Illustrator',
      'Adobe Premiere Pro',
      'Acrobat Pro',
      'InDesign',
      '+ Ver más'
    ],
    extras: [
      '25 créditos generativos mensuales para funciones estándar para imágenes y vectores con IA creativa',
      'Tutoriales paso a paso',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      '100 GB de almacenamiento en la nube'
    ],
    recommendedFor: [
      'Foto, diseño, video y más',
      'Flujos de trabajo que usan varias aplicaciones creativas',
      'IA creativa básica'
    ],
    price: 'Desde $29.99/mes'
  },

  // Fotografía
  {
    id: 'fotografia',
    name: 'Fotografía',
    shortDescription: 'Lightroom, Lightroom Classic, Photoshop + 1TB almacenamiento',
  description: 'El plan de Fotografía de Adobe es la elección preferida por fotógrafos profesionales y entusiastas. Incluye Lightroom y Lightroom Classic para edición y organización avanzada de fotos, así como Photoshop para retoque y composición de imágenes a nivel profesional. Accede a tus fotos desde cualquier dispositivo, gracias a la sincronización en la nube y 1TB de almacenamiento seguro. Aprovecha herramientas de inteligencia artificial para mejorar tus imágenes, flujos de trabajo optimizados y compatibilidad total con archivos RAW. Ideal para quienes buscan calidad, flexibilidad y resultados espectaculares en cada proyecto fotográfico.',
    logo: ['/img/Iconos SVG/lightroom.svg', '/img/Iconos SVG/photoshop.svg'],
    category: 'Fotografía',
    features: [
      'Lightroom',
      'Lightroom Classic',
      'Photoshop',
      'Photoshop Express para dispositivos móviles',
      'Adobe Firefly'
    ],
    extras: [
      '1TB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Gestión de fotos',
      'Edición de fotos',
      'Composición'
    ],
    price: 'Desde $9.99/mes',
    popular: true
  },
  {
    id: 'lightroom',
    name: 'Lightroom',
    shortDescription: 'Edita, organiza, almacena y comparte fotos',
  description: 'Adobe Lightroom es la plataforma integral para fotógrafos que desean organizar, editar y compartir sus imágenes de manera eficiente. Con una interfaz intuitiva y potentes herramientas de edición no destructiva, puedes ajustar la exposición, el color, el contraste y aplicar presets profesionales en segundos. Lightroom facilita la gestión de grandes catálogos de fotos, la sincronización automática entre dispositivos y la exportación en múltiples formatos. Además, integra funciones de IA para mejorar fotos con un solo clic y compartir galerías en línea con clientes o redes sociales.',
    logo: '/img/Iconos SVG/lightroom.svg',
    category: 'Fotografía',
    features: [
      'Lightroom',
      'Lightroom Classic'
    ],
    extras: [
      '1 TB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Gestión de fotos',
      'Edición de fotos'
    ],
    price: 'Desde $9.99/mes'
  },

  // Diseño Gráfico
  {
    id: 'photoshop',
    name: 'Photoshop',
    shortDescription: 'Crea espectaculares gráficos, fotos e ilustraciones',
  description: 'Adobe Photoshop es el estándar mundial en edición de imágenes y diseño gráfico. Permite crear, retocar y transformar fotografías, ilustraciones y gráficos con precisión profesional. Sus herramientas avanzadas incluyen capas, máscaras, filtros inteligentes, pinceles personalizables y soporte para gráficos 3D. Photoshop es ideal para fotógrafos, diseñadores, ilustradores y creadores de contenido que buscan resultados impactantes, integración con otras apps de Adobe y acceso a recursos de IA para acelerar el proceso creativo.',
    logo: '/img/Iconos SVG/photoshop.svg',
    category: 'Diseño Gráfico',
    features: [
      'Photoshop',
      'Adobe Fresco',
      'Photoshop Express',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Edición de fotos',
      'Composición',
      'Dibujo y pintura',
      'Diseño gráfico'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    shortDescription: 'Crea diseños, ilustraciones y gráficos vectoriales',
  description: 'Adobe Illustrator es la aplicación líder para la creación de gráficos vectoriales escalables. Permite diseñar logotipos, iconos, ilustraciones y composiciones complejas que mantienen su calidad en cualquier tamaño o resolución. Sus herramientas de dibujo precisas, tipografía avanzada, efectos 3D y compatibilidad con otros productos de Adobe lo convierten en la opción preferida de diseñadores gráficos, ilustradores y creativos digitales. Ideal para branding, diseño editorial, packaging y más.',
    logo: '/img/Iconos SVG/illustrator.svg',
    category: 'Diseño Gráfico',
    features: [
      'Illustrator',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Ilustración',
      'Dibujo y pintura',
      'Tipografía',
      'Diseño gráfico'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },

  // Video
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    shortDescription: 'Edición profesional de video y películas',
  description: 'Adobe Premiere Pro es el software de edición de video profesional más utilizado en la industria. Ofrece una línea de tiempo multicapa, edición precisa de audio y video, efectos visuales avanzados, corrección de color profesional y compatibilidad con una amplia gama de formatos. Su integración con After Effects y otras apps de Adobe permite flujos de trabajo colaborativos y eficientes. Ideal para cineastas, creadores de contenido, agencias y cualquier persona que busque producir videos de alta calidad para cualquier plataforma.',
    logo: '/img/Iconos SVG/premiere.svg',
    category: 'Video',
    features: [
      'Adobe Premiere Pro',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Edición de video',
      'Producción de video'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    shortDescription: 'Crea gráficos animados y efectos visuales',
  description: 'Adobe After Effects es la referencia mundial en motion graphics y efectos visuales. Permite crear animaciones, títulos, transiciones y efectos especiales para cine, televisión y redes sociales. Sus potentes herramientas incluyen composición 3D, efectos de partículas, expresiones y scripting para automatizar tareas, así como integración directa con Premiere Pro y Cinema 4D. Es la herramienta imprescindible para animadores, editores de video y creativos que buscan resultados espectaculares.',
    logo: '/img/Iconos SVG/after-effects.svg',
    category: 'Video',
    features: [
      'After Effects',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Efectos visuales',
      'Gráficos animados',
      'Diseño de IU y UX'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },

  // Diseño Editorial
  {
    id: 'indesign',
    name: 'InDesign',
    shortDescription: 'Diseño y maquetación para medios digitales e impresos',
  description: 'Adobe InDesign es la solución profesional para diseño editorial y maquetación de publicaciones impresas y digitales. Permite crear revistas, libros, folletos, catálogos y documentos interactivos con precisión tipográfica y control total sobre el diseño. Sus funciones avanzadas incluyen estilos de párrafo, tablas, exportación a PDF interactivo y compatibilidad con flujos de trabajo colaborativos. Es la herramienta preferida por editoriales, agencias y diseñadores gráficos.',
    logo: '/img/Iconos SVG/indesign.svg',
    category: 'Diseño Editorial',
    features: [
      'InDesign',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Diseño de páginas',
      'Diseño de impresión'
    ],
    price: 'Desde $20.99/mes',
    popular: true
  },
  {
    id: 'incopy',
    name: 'InCopy',
    shortDescription: 'Modifica el texto y la maquetación sin afectar los diseños',
  description: 'Adobe InCopy es la herramienta ideal para editores y redactores que colaboran en proyectos de diseño editorial. Permite modificar textos y realizar correcciones en documentos de InDesign sin alterar el diseño original. Ofrece control de versiones, flujos de trabajo colaborativos y compatibilidad total con InDesign, facilitando la producción de revistas, periódicos y libros en equipos multidisciplinarios.',
    logo: '/img/Iconos SVG/incopy.svg',
    category: 'Diseño Editorial',
    features: [
      'InCopy'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Redacción de contenidos',
      'Corrección de contenidos'
    ],
    price: 'Desde $20.99/mes'
  },

  // Productividad
  {
    id: 'acrobat-pro',
    name: 'Acrobat Pro',
    shortDescription: 'Crea, edita, firma y gestiona archivos PDF',
  description: 'Adobe Acrobat Pro es la solución más completa para la gestión profesional de documentos PDF. Permite crear, editar, convertir, firmar y proteger archivos PDF con herramientas avanzadas. Facilita la colaboración en tiempo real, la integración con servicios en la nube y la automatización de flujos de trabajo documentales. Es esencial para empresas, abogados, educadores y cualquier usuario que requiera máxima seguridad y eficiencia en el manejo de documentos digitales.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productividad',
    features: [
      'Acrobat Pro',
      'Acrobat Reader',
      'Adobe Scan',
      'Fill & Sign'
    ],
    extras: [
      '100GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Fonts',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Flujos de trabajo de PDF avanzados',
      'Documentos digitales',
      'Funciones de firma avanzadas'
    ],
    price: 'Desde $14.99/mes',
    popular: true
  },
  {
    id: 'acrobat-ai-assistant',
    name: 'Asistente de IA para Acrobat',
    shortDescription: 'Haz preguntas a tus documentos para obtener respuestas rápidas',
  description: 'El Asistente de IA para Acrobat es una herramienta innovadora que utiliza inteligencia artificial para analizar, resumir y responder preguntas sobre documentos PDF. Compatible con Acrobat Pro, Standard y Reader, permite extraer información clave, generar resúmenes automáticos y realizar búsquedas avanzadas en segundos. Es ideal para profesionales que manejan grandes volúmenes de información y necesitan respuestas rápidas y precisas.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productividad',
    features: [
      'Asistente de IA para Acrobat'
    ],
    recommendedFor: [
      'Flujos de trabajo de PDF',
      'Documentos digitales'
    ],
    price: 'Desde $4.99/mes'
  },

  // Audio
  {
    id: 'audition',
    name: 'Audition',
    shortDescription: 'Grabación, mezcla y restauración de audio',
  description: 'Adobe Audition es la estación de trabajo de audio profesional para grabación, edición, mezcla y restauración de sonido. Ofrece herramientas avanzadas para producción musical, postproducción de video, podcasts y restauración de audio antiguo. Incluye efectos, plugins, edición multipista y compatibilidad con otros productos de Adobe, convirtiéndolo en la opción preferida de ingenieros de sonido, músicos y creadores de contenido.',
    logo: '/img/Iconos SVG/audition.svg',
    category: 'Audio',
    features: [
      'Audition',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Edición de audio',
      'Efectos sonoros'
    ],
    price: 'Desde $20.99/mes'
  },

  // Desarrollo Web
  {
    id: 'dreamweaver',
    name: 'Dreamweaver',
    shortDescription: 'Diseña y desarrolla sitios web modernos',
  description: 'Adobe Dreamweaver es la plataforma integral para diseño y desarrollo web moderno. Combina un editor visual intuitivo con potentes herramientas de codificación para HTML, CSS, JavaScript y más. Permite crear sitios web responsivos, integrarse con sistemas de control de versiones como Git y previsualizar cambios en tiempo real. Es ideal para diseñadores, desarrolladores y agencias que buscan eficiencia y flexibilidad en la creación de sitios web.',
    logo: '/img/Iconos SVG/dreamweaver.svg',
    category: 'Desarrollo Web',
    features: [
      'Dreamweaver',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Diseño sitio web',
      'Desarrollo Sitio web'
    ],
    price: 'Desde $20.99/mes'
  },

  // Animación
  {
    id: 'animate',
    name: 'Animate',
    shortDescription: 'Diseña animaciones vectoriales interactivas',
  description: 'Adobe Animate es la herramienta líder para crear animaciones vectoriales interactivas en 2D. Permite diseñar personajes, escenarios y efectos para web, apps y videojuegos, integrando herramientas de dibujo avanzadas y soporte para scripting con JavaScript. Exporta animaciones en múltiples formatos, incluyendo HTML5, GIF y videos, y se integra con Creative Cloud para flujos de trabajo colaborativos.',
    logo: '/img/Iconos SVG/animate.svg',
    category: 'Animación',
    features: [
      'Animate',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB de espacio en la nube',
      'Tutoriales paso a paso',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Bibliotecas Creative Cloud',
      'Acceso a las funciones más recientes',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Animación'
    ],
    price: 'Desde $20.99/mes'
  },

  // Contenido Rápido
  {
    id: 'express-premium',
    name: 'Adobe Express Premium',
    shortDescription: 'Diseña folletos, videos de TikTok, currículums y reels',
  description: 'Adobe Express Premium es la solución todo en uno para crear contenido visual de alto impacto en minutos. Ofrece plantillas profesionales, herramientas de IA para diseño automático, edición de video, creación de reels y recursos para redes sociales. Es ideal para emprendedores, creadores de contenido y equipos de marketing que buscan rapidez, calidad y facilidad de uso en sus proyectos visuales.',
    logo: '/img/Iconos SVG/cc-express.svg',
    category: 'Contenido Rápido',
    features: [
      'Adobe Express',
      'Photoshop Express',
      'Adobe Firefly'
    ],
    extras: [
      'Plantillas y elementos de diseño premium',
      'Funciones premium como las de cambio de tamaño y eliminación del fondo del video',
      'Más de 195 millones de fotografías, videos y archivos de música de Adobe Stock',
      'Acciones rápidas de PDF ilimitadas',
      'Programación ilimitada con Planificador de contenido',
      '100 GB de espacio en la nube',
      'Adobe Fonts',
      'Bibliotecas Creative Cloud',
      '250 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Edición de fotos',
      'Edición de video',
      'Diseño gráfico',
      'Exportación en PDF',
      'Redes sociales'
    ],
    price: 'Desde $9.99/mes',
    popular: true
  },

  // IA Generativa
  {
    id: 'firefly-standard',
    name: 'Adobe Firefly Standard',
    shortDescription: 'Explora la IA creativa con 2,000 créditos mensuales',
  description: 'Adobe Firefly Standard abre las puertas a la creatividad impulsada por IA, ofreciendo 2,000 créditos mensuales para funciones premium de generación de imágenes, video y audio. Accede a herramientas de IA para transformar ideas en contenido visual, experimentar con efectos avanzados y disfrutar de acceso ilimitado a funciones estándar. Es perfecto para creativos que desean explorar nuevas posibilidades y optimizar su flujo de trabajo.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '2,000 créditos generativos mensuales para funciones prémium de video y audio',
      'Acceso ilimitado a funciones estándar de imágenes y vectores'
    ],
    extras: [
      '100GB de espacio en la nube',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideación',
      'Conceptualización',
      'Creación de video',
      'Traducción de audio',
      'Traducción de video',
      'Creación de imágenes'
    ],
    price: 'Desde $4.99/mes'
  },
  {
    id: 'firefly-pro',
    name: 'Adobe Firefly Pro',
    shortDescription: 'Descubre la IA creativa con 7,000 créditos mensuales',
  description: 'Adobe Firefly Pro lleva la creatividad con IA al siguiente nivel, proporcionando 7,000 créditos mensuales para funciones premium de generación de imágenes, video y audio. Incluye herramientas profesionales para creadores avanzados, integración con otras apps de Adobe y soporte prioritario. Es la opción ideal para equipos creativos, agencias y profesionales que buscan innovación y resultados de alto nivel.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '7,000 créditos generativos mensuales para funciones prémium de video y audio',
      'Acceso ilimitado a funciones estándar de imágenes y vectores'
    ],
    extras: [
      '100GB de espacio en la nube',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideación',
      'Conceptualización',
      'Creación de video',
      'Doblaje de audio',
      'Creación de imágenes'
    ],
    price: 'Desde $9.99/mes'
  },
  {
    id: 'firefly-premium',
    name: 'Adobe Firefly Premium',
    shortDescription: 'Crea a escala con 50,000 créditos mensuales',
  description: 'Adobe Firefly Premium es la solución empresarial definitiva para creación de contenido a gran escala con IA. Ofrece 50,000 créditos mensuales, acceso prioritario a funciones premium y soporte empresarial dedicado. Permite a equipos y empresas producir imágenes, videos y audios de alta calidad de manera eficiente, optimizando recursos y acelerando la innovación.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'IA Generativa',
    features: [
      '50,000 créditos generativos mensuales para funciones prémium de video y audio',
      'Acceso ilimitado a funciones estándar de imágenes y vectores'
    ],
    extras: [
      '100GB de espacio en la nube',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideación',
      'Conceptualización',
      'Creación de video',
      'Traducción de audio',
      'Traducción de video',
      'Creación de imágenes'
    ],
    price: 'Desde $19.99/mes'
  },

 

  // Recursos
  {
    id: 'adobe-stock',
    name: 'Adobe Stock',
    shortDescription: 'Accede a millones de imágenes, videos 4K y plantillas',
    description: 'Adobe Stock es la biblioteca de recursos creativos más completa del mercado, con millones de imágenes, videos 4K y HD, plantillas, ilustraciones y elementos gráficos libres de derechos. Permite a creativos, agencias y empresas acceder a contenido de alta calidad para sus proyectos, integrándose perfectamente con las aplicaciones de Adobe Creative Cloud. Facilita la búsqueda, descarga y uso de recursos profesionales en cualquier tipo de producción visual.',
    logo: '/img/Iconos SVG/stock.svg',
    category: 'Recursos',
    features: [
      '10 activos al mes',
      '500 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Imágenes e ilustraciones de archivo',
      'Videos 4k y HD sin derechos de autor',
      'Plantillas diseñadas por artistas',
      'Pistas de audio y música de archivo'
    ],
    price: 'Desde $29.99/mes'
  },
   // 3D y Modelado
   {
    id: 'substance-3d-texturing',
    name: 'Texturizados 3D con Adobe Substance',
    shortDescription: 'Crea, captura y pinta materiales en 3D',
    description: 'Adobe Substance para texturizado 3D es la suite profesional para crear, capturar y pintar materiales realistas en entornos tridimensionales. Incluye herramientas especializadas como Sampler, Designer y Painter, permitiendo a artistas y diseñadores desarrollar texturas únicas, simular materiales complejos y exportar resultados a cualquier motor de renderizado. Es esencial para la industria de videojuegos, animación y diseño industrial.',
    logo: [
      '/img/Iconos SVG/substance-3d-sampler.svg',
      '/img/Iconos SVG/substance-3d-designer.svg',
      '/img/Iconos SVG/substance-3d-painter.svg'
    ],
    category: '3D y Modelado',
    features: [
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Assets'
    ],
    extras: [
      'Miles de activos en 3D',
      '100 GB de espacio en la nube',
      '25 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Texturizado 3D'
    ],
    price: 'Desde $19.99/mes'
  },
  {
    id: 'substance-3d-collection',
    name: 'Adobe Substance 3D Collection',
    shortDescription: 'Modela, texturiza y renderiza activos y escenas en 3D',
    description: 'Adobe Substance 3D Collection es el paquete más completo para modelado, texturizado y renderizado de activos y escenas en 3D. Incluye Modeler, Sampler, Designer, Painter, Stager y una vasta biblioteca de activos 3D listos para usar. Permite a artistas, diseñadores y estudios crear proyectos 3D de principio a fin, con integración total en el ecosistema de Adobe y compatibilidad con los principales motores de renderizado y plataformas de realidad aumentada.',
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
      'Adobe Substance 3D Modeler',
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Stager',
      'Adobe Substance 3D Assets'
    ],
    extras: [
      'Miles de activos en 3D',
      '100 GB de espacio en la nube',
      '100 créditos generativos mensuales'
    ],
    recommendedFor: [
      'Modelado en 3D',
      'Texturizado 3D'
    ],
    price: 'Desde $49.99/mes',
    popular: true
  }
];
