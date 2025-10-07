import type { Service } from '../types';

export const allServices: Service[] = [
  // ADOBE SERVICES - Planes y Suites
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
    popular: true,
    serviceType: 'adobe'
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
    price: 'Desde $29.99/mes',
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    price: 'Desde $9.99/mes',
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    price: 'Desde $20.99/mes',
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    price: 'Desde $4.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $20.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $20.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $20.99/mes',
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
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
    price: 'Desde $4.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $9.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $19.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $29.99/mes',
    serviceType: 'adobe'
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
    price: 'Desde $19.99/mes',
    serviceType: 'adobe'
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
    popular: true,
    serviceType: 'adobe'
  },

  // CLOUDWAYS SERVICES
  {
    id: 'cloudways-hosting',
    name: 'Cloudways Hosting',
    shortDescription: 'Hosting en la nube de alto rendimiento',
    description: 'Cloudways ofrece hosting en la nube de alto rendimiento con servidores optimizados para WordPress, Magento, Laravel y más. Con infraestructura de AWS, Google Cloud, DigitalOcean y otros proveedores líderes, garantiza velocidad, seguridad y escalabilidad para tu sitio web o aplicación.',
    logo: '/img/newsServices/cloudways.svg',
    category: 'Hosting y Servidores',
    features: [
      'Servidores en la nube de AWS, Google Cloud, DigitalOcean',
      'Optimización automática para WordPress',
      'CDN global incluido',
      'SSL gratuito',
      'Backups automáticos',
      'Monitoreo 24/7',
      'Soporte técnico especializado'
    ],
    extras: [
      'Panel de control intuitivo',
      'Escalabilidad automática',
      'Seguridad avanzada',
      'Migración gratuita'
    ],
    recommendedFor: [
      'Sitios web de alto tráfico',
      'Aplicaciones web',
      'E-commerce',
      'Agencias digitales'
    ],
    price: 'Desde $10/mes',
    popular: true,
    serviceType: 'cloudways',
    website: 'https://www.cloudways.com/en/'
  },

  // DEXT SERVICES
  {
    id: 'dext-accounting',
    name: 'Dext Accounting',
    shortDescription: 'Software de contabilidad y gestión financiera',
    description: 'Dext es una plataforma integral de contabilidad que automatiza la captura y procesamiento de documentos financieros. Con tecnología OCR avanzada, categoriza automáticamente gastos, genera reportes financieros y se integra con los principales sistemas contables.',
    logo: '/img/newsServices/dext.svg',
    category: 'Contabilidad y Finanzas',
    features: [
      'Captura automática de recibos',
      'Reconocimiento óptico de caracteres (OCR)',
      'Categorización automática de gastos',
      'Integración con sistemas contables',
      'Reportes financieros automáticos',
      'Backup en la nube',
      'Multi-moneda'
    ],
    extras: [
      'API para integraciones',
      'Soporte multi-usuario',
      'Cumplimiento fiscal',
      'Auditoría completa'
    ],
    recommendedFor: [
      'Contadores y asesores fiscales',
      'Empresas pequeñas y medianas',
      'Freelancers',
      'Startups'
    ],
    price: 'Desde $15/mes',
    popular: true,
    serviceType: 'dext',
    website: 'https://dext.com/us'
  },

  // PROTON SERVICES
  {
    id: 'proton-pass',
    name: 'Proton Pass',
    shortDescription: 'Gestor de contraseñas seguro y privado',
    description: 'Proton Pass es un gestor de contraseñas de código abierto que prioriza la privacidad y seguridad. Desarrollado por los creadores de ProtonMail, ofrece encriptación de extremo a extremo, autenticación de dos factores y sincronización segura entre dispositivos.',
    logo: '/img/newsServices/proton.svg',
    category: 'Seguridad y Privacidad',
    features: [
      'Encriptación de extremo a extremo',
      'Generador de contraseñas seguras',
      'Autenticación de dos factores',
      'Sincronización entre dispositivos',
      'Código abierto y auditable',
      'Sin seguimiento de usuarios',
      'Compatibilidad con navegadores'
    ],
    extras: [
      'Almacenamiento seguro de notas',
      'Compartir contraseñas de forma segura',
      'API para desarrolladores',
      'Soporte para hardware security keys'
    ],
    recommendedFor: [
      'Usuarios preocupados por la privacidad',
      'Empresas que requieren seguridad máxima',
      'Desarrolladores',
      'Usuarios de código abierto'
    ],
    price: 'Desde $3.99/mes',
    popular: true,
    serviceType: 'proton',
    website: 'https://proton.me/l/pass/shorter-flow'
  },

  // 800.COM SERVICES
  {
    id: '800-call-forwarding',
    name: '800.com Call Forwarding',
    shortDescription: 'Servicio de desvío de llamadas empresarial',
    description: '800.com ofrece servicios de números 800 y desvío de llamadas para empresas. Permite establecer presencia nacional con números gratuitos, gestionar llamadas entrantes y mejorar la imagen profesional de tu negocio.',
    logo: '/img/newsServices/800.svg',
    category: 'Telecomunicaciones',
    features: [
      'Números 800 gratuitos',
      'Desvío de llamadas inteligente',
      'Grabación de llamadas',
      'Estadísticas detalladas',
      'Horarios de atención personalizados',
      'Mensajes de bienvenida',
      'Integración con CRM'
    ],
    extras: [
      'Soporte 24/7',
      'Configuración en minutos',
      'Portabilidad de números',
      'API para desarrolladores'
    ],
    recommendedFor: [
      'Empresas con atención al cliente',
      'Servicios de emergencia',
      'Centros de llamadas',
      'Negocios con múltiples ubicaciones'
    ],
    price: 'Desde $9.95/mes',
    serviceType: '800com',
    website: 'https://www.800.com/call-forwarding-lp-partners'
  },

  // KRISP SERVICES
  {
    id: 'krisp-ai',
    name: 'Krisp AI',
    shortDescription: 'Eliminación de ruido de fondo en tiempo real',
    description: 'Krisp utiliza inteligencia artificial para eliminar ruido de fondo, ecos y reverberación en llamadas de voz y video. Compatible con más de 800 aplicaciones, mejora la calidad de audio en reuniones, grabaciones y transmisiones en vivo.',
    logo: '/img/newsServices/krisp.svg',
    category: 'Audio y Comunicación',
    features: [
      'Eliminación de ruido en tiempo real',
      'Cancelación de eco',
      'Mejora de voz con IA',
      'Compatibilidad con 800+ apps',
      'Funciona en cualquier micrófono',
      'Baja latencia',
      'Privacidad local (sin envío de datos)'
    ],
    extras: [
      'Grabación de alta calidad',
      'Transcripción automática',
      'Métricas de audio',
      'Integración con hardware'
    ],
    recommendedFor: [
      'Profesionales remotos',
      'Streamers y creadores de contenido',
      'Equipos de trabajo distribuidos',
      'Educadores en línea'
    ],
    price: 'Desde $5/mes',
    popular: true,
    serviceType: 'krisp',
    website: 'https://krisp.ai/'
  },

  // STREAMILY SERVICES
  {
    id: 'streamily-live',
    name: 'Streamily Live',
    shortDescription: 'Plataforma de streaming y transmisión en vivo',
    description: 'Streamily es una plataforma integral para streaming y transmisión en vivo que permite crear, gestionar y monetizar contenido en tiempo real. Incluye herramientas de producción, análisis avanzados y múltiples opciones de monetización.',
    logo: '/img/newsServices/streamily.png',
    category: 'Streaming y Video',
    features: [
      'Transmisión en vivo HD/4K',
      'Chat interactivo',
      'Monetización integrada',
      'Analytics avanzados',
      'Grabación automática',
      'Transcodificación en tiempo real',
      'CDN global'
    ],
    extras: [
      'API para desarrolladores',
      'Widgets personalizables',
      'Integración con redes sociales',
      'Soporte para múltiples idiomas'
    ],
    recommendedFor: [
      'Streamers y creadores de contenido',
      'Empresas de entretenimiento',
      'Educadores en línea',
      'Eventos corporativos'
    ],
    price: 'Desde $19/mes',
    serviceType: 'streamily',
    website: 'https://www.streamily.com/'
  },

  // AISEESOFT SERVICES
  {
    id: 'aiseesoft-converter',
    name: 'Aiseesoft Converter',
    shortDescription: 'Conversión de video y audio de alta calidad',
    description: 'Aiseesoft ofrece herramientas profesionales para conversión, edición y optimización de archivos multimedia. Con tecnología de IA, permite convertir videos y audios entre más de 1000 formatos manteniendo la máxima calidad.',
    logo: '/img/newsServices/aiseesoft.png',
    category: 'Multimedia y Conversión',
    features: [
      'Conversión entre 1000+ formatos',
      'Tecnología de IA para optimización',
      'Preservación de calidad 4K',
      'Procesamiento por lotes',
      'Edición básica de video',
      'Extracción de audio',
      'Compresión inteligente'
    ],
    extras: [
      'Aceleración por GPU',
      'Plantillas de conversión',
      'Soporte para metadatos',
      'Interfaz intuitiva'
    ],
    recommendedFor: [
      'Editores de video',
      'Creadores de contenido',
      'Profesionales multimedia',
      'Usuarios que necesitan conversión frecuente'
    ],
    price: 'Desde $29.95/año',
    serviceType: 'aiseesoft',
    website: 'https://www.aiseesoft.com/'
  },

  // SIDER SERVICES
  {
    id: 'sider-ai',
    name: 'Sider AI',
    shortDescription: 'Asistente de IA para navegación web',
    description: 'Sider es un asistente de inteligencia artificial que se integra directamente en tu navegador para ayudarte con tareas de investigación, escritura, análisis de contenido y automatización de flujos de trabajo web.',
    logo: '/img/newsServices/sider.png',
    category: 'IA y Automatización',
    features: [
      'Asistente de IA integrado en navegador',
      'Análisis de contenido web',
      'Generación de texto con IA',
      'Búsqueda inteligente',
      'Automatización de tareas',
      'Integración con ChatGPT',
      'Soporte multi-idioma'
    ],
    extras: [
      'API para desarrolladores',
      'Templates personalizables',
      'Historial de conversaciones',
      'Exportación de resultados'
    ],
    recommendedFor: [
      'Investigadores y académicos',
      'Escritores y redactores',
      'Desarrolladores',
      'Profesionales que usan mucho el navegador'
    ],
    price: 'Desde $9.99/mes',
    popular: true,
    serviceType: 'sider',
    website: 'https://sider.ai/es'
  },

  // WEBLIUM SERVICES
  {
    id: 'weblium-website',
    name: 'Weblium Website Builder',
    shortDescription: 'Constructor de sitios web con IA',
    description: 'Weblium es un constructor de sitios web impulsado por IA que permite crear sitios profesionales sin conocimientos técnicos. Con diseño adaptativo automático, optimización SEO integrada y herramientas de e-commerce.',
    logo: '/img/newsServices/weblium.svg',
    category: 'Desarrollo Web',
    features: [
      'Constructor visual con IA',
      'Diseño adaptativo automático',
      'Optimización SEO integrada',
      'E-commerce integrado',
      'Templates profesionales',
      'Editor de código',
      'CDN global'
    ],
    extras: [
      'Dominio personalizado',
      'SSL gratuito',
      'Analytics integrado',
      'Soporte 24/7'
    ],
    recommendedFor: [
      'Pequeñas empresas',
      'Freelancers',
      'Agencias de marketing',
      'Emprendedores'
    ],
    price: 'Desde $8.25/mes',
    serviceType: 'weblium',
    website: 'https://weblium.com/'
  },

  // BREVO SERVICES
  {
    id: 'brevo-marketing',
    name: 'Brevo Marketing',
    shortDescription: 'Plataforma de marketing por email y SMS',
    description: 'Brevo (anteriormente Sendinblue) es una plataforma integral de marketing digital que combina email marketing, SMS, chat en vivo y automatización de marketing. Ideal para empresas que buscan gestionar todas sus comunicaciones desde una sola plataforma.',
    logo: '/img/newsServices/brevo.png',
    category: 'Marketing Digital',
    features: [
      'Email marketing avanzado',
      'SMS marketing',
      'Chat en vivo',
      'Automatización de marketing',
      'CRM integrado',
      'Analytics detallados',
      'A/B testing'
    ],
    extras: [
      'Templates profesionales',
      'Segmentación avanzada',
      'Integración con e-commerce',
      'API completa'
    ],
    recommendedFor: [
      'Empresas de e-commerce',
      'Agencias de marketing',
      'Startups',
      'Negocios locales'
    ],
    price: 'Desde €25/mes',
    popular: true,
    serviceType: 'brevo',
    website: 'https://www.brevo.com/es/'
  },

  // PINATA SERVICES
  {
    id: 'pinata-renters',
    name: 'Pinata Renters',
    shortDescription: 'Plataforma de alquiler para inquilinos',
    description: 'Pinata es una plataforma que conecta inquilinos con propiedades de alquiler, ofreciendo herramientas para gestionar pagos, comunicación con propietarios y servicios adicionales como seguros y mantenimiento.',
    logo: '/img/newsServices/pinata.webp',
    category: 'Bienes Raíces',
    features: [
      'Búsqueda de propiedades',
      'Gestión de pagos',
      'Comunicación con propietarios',
      'Seguros integrados',
      'Servicios de mantenimiento',
      'Contratos digitales',
      'Soporte al inquilino'
    ],
    extras: [
      'App móvil',
      'Notificaciones automáticas',
      'Historial de pagos',
      'Soporte 24/7'
    ],
    recommendedFor: [
      'Inquilinos activos',
      'Estudiantes',
      'Profesionales jóvenes',
      'Familias en búsqueda de hogar'
    ],
    price: 'Gratis para inquilinos',
    serviceType: 'pinata',
    website: 'https://www.pinata.ai/renters'
  },

  // PICSART SERVICES
  {
    id: 'picsart-creative',
    name: 'PicsArt Creative',
    shortDescription: 'Editor de fotos y videos con IA',
    description: 'PicsArt es una plataforma creativa que combina edición de fotos, videos y herramientas de diseño con inteligencia artificial. Ofrece miles de filtros, efectos, stickers y herramientas de diseño para creadores de contenido.',
    logo: '/img/newsServices/picsart.svg',
    category: 'Diseño y Edición',
    features: [
      'Editor de fotos avanzado',
      'Herramientas de video',
      'IA para edición automática',
      'Miles de filtros y efectos',
      'Stickers y elementos gráficos',
      'Colaboración en tiempo real',
      'Exportación en alta calidad'
    ],
    extras: [
      'Templates profesionales',
      'Fuentes premium',
      'Stock de imágenes',
      'Red social integrada'
    ],
    recommendedFor: [
      'Creadores de contenido',
      'Influencers',
      'Diseñadores gráficos',
      'Empresas de marketing'
    ],
    price: 'Desde $4.99/mes',
    popular: true,
    serviceType: 'picsart',
    website: 'https://picsart.com/'
  },

  // FILEFORMS SERVICES
  {
    id: 'fileforms-document',
    name: 'FileForms Document',
    shortDescription: 'Gestión y procesamiento de documentos',
    description: 'FileForms es una plataforma para la gestión, procesamiento y automatización de documentos. Utiliza IA para extraer datos, clasificar documentos y automatizar flujos de trabajo documentales.',
    logo: '/img/newsServices/fileforms.svg',
    category: 'Gestión de Documentos',
    features: [
      'Procesamiento de documentos con IA',
      'Extracción automática de datos',
      'Clasificación inteligente',
      'Automatización de flujos de trabajo',
      'Integración con sistemas existentes',
      'OCR avanzado',
      'Almacenamiento seguro'
    ],
    extras: [
      'API para desarrolladores',
      'Templates personalizables',
      'Auditoría completa',
      'Cumplimiento GDPR'
    ],
    recommendedFor: [
      'Empresas con alto volumen de documentos',
      'Sector legal',
      'Recursos humanos',
      'Contabilidad'
    ],
    price: 'Desde $29/mes',
    serviceType: 'fileforms',
    website: 'https://fileforms.com/'
  },

  // DOODLE SERVICES
  {
    id: 'doodle-scheduling',
    name: 'Doodle Scheduling',
    shortDescription: 'Herramienta de programación de reuniones',
    description: 'Doodle simplifica la programación de reuniones permitiendo a los participantes votar por sus horarios preferidos. Elimina el back-and-forth de emails y automatiza el proceso de coordinación de equipos.',
    logo: '/img/newsServices/doodle.png',
    category: 'Productividad',
    features: [
      'Programación de reuniones',
      'Encuestas de disponibilidad',
      'Integración con calendarios',
      'Recordatorios automáticos',
      'Sincronización con Google/Outlook',
      'Reuniones virtuales integradas',
      'Estadísticas de participación'
    ],
    extras: [
      'Personalización de marca',
      'API para desarrolladores',
      'Integración con Zoom/Teams',
      'Soporte multi-idioma'
    ],
    recommendedFor: [
      'Equipos distribuidos',
      'Coordinadores de eventos',
      'Profesionales de RRHH',
      'Consultores'
    ],
    price: 'Desde €3.95/mes',
    popular: true,
    serviceType: 'doodle',
    website: 'https://doodle.com/en/'
  },

  // EASYSHIP SERVICES
  {
    id: 'easyship-shipping',
    name: 'EasyShip Shipping',
    shortDescription: 'Plataforma de envíos y logística',
    description: 'EasyShip es una plataforma integral de envíos que conecta empresas con más de 250 transportistas globales. Ofrece comparación de precios, gestión de inventario y automatización de procesos logísticos.',
    logo: '/img/newsServices/easyship.svg',
    category: 'Logística y Envíos',
    features: [
      'Comparación de 250+ transportistas',
      'Gestión de inventario',
      'Automatización de envíos',
      'Seguimiento en tiempo real',
      'Etiquetas de envío automáticas',
      'Gestión de devoluciones',
      'Analytics de logística'
    ],
    extras: [
      'API para e-commerce',
      'Integración con Shopify/WooCommerce',
      'Soporte multi-almacén',
      'Cálculo automático de impuestos'
    ],
    recommendedFor: [
      'E-commerce',
      'Empresas de retail',
      'Dropshippers',
      'Importadores/Exportadores'
    ],
    price: 'Desde $29/mes',
    serviceType: 'easyship',
    website: 'https://www.easyship.com'
  },

  // GUSTO SERVICES
  {
    id: 'gusto-payroll',
    name: 'Gusto Payroll',
    shortDescription: 'Software de nómina y recursos humanos',
    description: 'Gusto es una plataforma integral de recursos humanos que automatiza nóminas, beneficios, cumplimiento fiscal y gestión de empleados. Diseñado para pequeñas y medianas empresas que buscan simplificar la administración de personal.',
    logo: '/img/newsServices/gusto.svg',
    category: 'Recursos Humanos',
    features: [
      'Nómina automatizada',
      'Gestión de beneficios',
      'Cumplimiento fiscal',
      'Onboarding de empleados',
      'Tiempo y asistencia',
      'Reportes de RRHH',
      'Integración con contabilidad'
    ],
    extras: [
      'Soporte de expertos en RRHH',
      'Cumplimiento estatal y federal',
      'App móvil para empleados',
      'API para integraciones'
    ],
    recommendedFor: [
      'Pequeñas y medianas empresas',
      'Startups en crecimiento',
      'Empresas con empleados remotos',
      'Negocios familiares'
    ],
    price: 'Desde $39/mes',
    popular: true,
    serviceType: 'gusto',
    website: 'https://gusto.com/'
  }
];
