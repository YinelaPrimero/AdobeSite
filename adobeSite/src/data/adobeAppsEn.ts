
import type { AdobeApp } from '../types';

export const adobeAppsEn: AdobeApp[] = [
  // Plans and Suites
  {
    id: 'creative-cloud-pro',
    name: 'Creative Cloud Pro',
    shortDescription: '20+ professional creative apps',
    description: 'Creative Cloud Pro is the ultimate solution for creative professionals and teams seeking maximum potential in their workflow. It includes access to over 20 leading Adobe applications such as Photoshop, Illustrator, Premiere Pro, After Effects, and many more, all integrated with powerful generative AI tools to accelerate creativity. Enjoy high-capacity cloud storage, access to premium Adobe Stock resources, automatic updates, and priority technical support. Ideal for agencies, design studios, photographers, videographers, and any professional requiring the best creative tools, real-time collaboration, and maximum productivity across all their projects.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Complete Plans',
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
      '100GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '4,000 monthly generative credits'
    ],
    recommendedFor: [
      'Photo',
      'Graphic design',
      'Video',
      'Illustration',
      'UI & UX',
      'Acrobat & PDF',
      'Social media'
    ],
    price: 'From $52.99/month',
    popular: true
  },
  {
    id: 'creative-cloud-standard',
    name: 'Creative Cloud Standard',
    shortDescription: 'Key Creative Cloud apps',
    description: 'Creative Cloud Standard is the ideal starting point for those looking to enter the digital creative world. It includes essential Adobe applications such as Photoshop, Illustrator, and Acrobat Pro, allowing you to easily edit images, create vector graphics, and manage PDF documents. This plan is designed for students, freelancers, and occasional users who seek professional tools without the complexity of a full suite. Enjoy cloud storage, automatic synchronization across devices, and regular updates to stay at the forefront.',
    logo: '/img/Iconos SVG/creative-cloud.svg',
    category: 'Complete Plans',
    features: [
      'Photoshop',
      'Illustrator',
      'Adobe Premiere Pro',
      'Acrobat Pro',
      'InDesign',
      '+ See more'
    ],
    extras: [
      '25 monthly generative credits for standard features for images and vectors with creative AI',
      'Step-by-step tutorials',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      '100 GB cloud storage'
    ],
    recommendedFor: [
      'Photo, design, video and more',
      'Workflows that use multiple creative applications',
      'Basic creative AI'
    ],
    price: 'From $29.99/month'
  },

  // Photography
  {
    id: 'fotografia',
    name: 'Photography',
    shortDescription: 'Lightroom, Lightroom Classic, Photoshop + 1TB storage',
    description: 'Adobe Photography plan is the preferred choice for professional photographers and enthusiasts. It includes Lightroom and Lightroom Classic for advanced photo editing and organization, as well as Photoshop for professional-level image retouching and composition. Access your photos from any device, thanks to cloud synchronization and 1TB of secure storage. Leverage artificial intelligence tools to enhance your images, optimized workflows, and full RAW file compatibility. Ideal for those seeking quality, flexibility, and spectacular results in every photographic project.',
    logo: ['/img/Iconos SVG/lightroom.svg', '/img/Iconos SVG/photoshop.svg'],
    category: 'Photography',
    features: [
      'Lightroom',
      'Lightroom Classic',
      'Photoshop',
      'Photoshop Express for mobile devices',
      'Adobe Firefly'
    ],
    extras: [
      '1TB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Photo management',
      'Photo editing',
      'Composition'
    ],
    price: 'From $9.99/month',
    popular: true
  },
  {
    id: 'lightroom',
    name: 'Lightroom',
    shortDescription: 'Edit, organize, store, and share photos',
    description: 'Adobe Lightroom is the comprehensive platform for photographers who want to efficiently organize, edit, and share their images. With an intuitive interface and powerful non-destructive editing tools, you can adjust exposure, color, contrast, and apply professional presets in seconds. Lightroom facilitates the management of large photo catalogs, automatic synchronization across devices, and export in multiple formats. Additionally, it integrates AI functions to enhance photos with a single click and share online galleries with clients or social media.',
    logo: '/img/Iconos SVG/lightroom.svg',
    category: 'Photography',
    features: [
      'Lightroom',
      'Lightroom Classic'
    ],
    extras: [
      '1 TB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Photo management',
      'Photo editing'
    ],
    price: 'From $9.99/month'
  },

  // Graphic Design
  {
    id: 'photoshop',
    name: 'Photoshop',
    shortDescription: 'Create stunning graphics, photos, and illustrations',
    description: 'Adobe Photoshop is the global standard in image editing and graphic design. It allows you to create, retouch, and transform photographs, illustrations, and graphics with professional precision. Its advanced tools include layers, masks, smart filters, customizable brushes, and support for 3D graphics. Photoshop is ideal for photographers, designers, illustrators, and content creators seeking impactful results, integration with other Adobe apps, and access to AI resources to accelerate the creative process.',
    logo: '/img/Iconos SVG/photoshop.svg',
    category: 'Graphic Design',
    features: [
      'Photoshop',
      'Adobe Fresco',
      'Photoshop Express',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Photo editing',
      'Composition',
      'Drawing and painting',
      'Graphic design'
    ],
    price: 'From $20.99/month',
    popular: true
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    shortDescription: 'Create designs, illustrations, and vector graphics',
    description: 'Adobe Illustrator is the leading application for creating scalable vector graphics. It allows you to design logos, icons, illustrations, and complex compositions that maintain their quality at any size or resolution. Its precise drawing tools, advanced typography, 3D effects, and compatibility with other Adobe products make it the preferred choice for graphic designers, illustrators, and digital creatives. Ideal for branding, editorial design, packaging, and more.',
    logo: '/img/Iconos SVG/illustrator.svg',
    category: 'Graphic Design',
    features: [
      'Illustrator',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Illustration',
      'Drawing and painting',
      'Typography',
      'Graphic design'
    ],
    price: 'From $20.99/month',
    popular: true
  },

  // Video
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    shortDescription: 'Professional video and film editing',
    description: 'Adobe Premiere Pro is the most widely used professional video editing software in the industry. It offers a multi-layer timeline, precise audio and video editing, advanced visual effects, professional color correction, and compatibility with a wide range of formats. Its integration with After Effects and other Adobe apps allows for collaborative and efficient workflows. Ideal for filmmakers, content creators, agencies, and anyone looking to produce high-quality videos for any platform.',
    logo: '/img/Iconos SVG/premiere.svg',
    category: 'Video',
    features: [
      'Adobe Premiere Pro',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Video editing',
      'Video production'
    ],
    price: 'From $20.99/month',
    popular: true
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    shortDescription: 'Create motion graphics and visual effects',
    description: 'Adobe After Effects is the global benchmark for motion graphics and visual effects. It allows you to create animations, titles, transitions, and special effects for film, television, and social media. Its powerful tools include 3D composition, particle effects, expressions, and scripting for automating tasks, as well as direct integration with Premiere Pro and Cinema 4D. It is the essential tool for animators, video editors, and creatives seeking spectacular results.',
    logo: '/img/Iconos SVG/after-effects.svg',
    category: 'Video',
    features: [
      'After Effects',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Visual effects',
      'Motion graphics',
      'UI & UX design'
    ],
    price: 'From $20.99/month',
    popular: true
  },

  // Editorial Design
  {
    id: 'indesign',
    name: 'InDesign',
    shortDescription: 'Design and layout for digital and print media',
    description: 'Adobe InDesign is the professional solution for editorial design and layout of print and digital publications. It allows you to create magazines, books, brochures, catalogs, and interactive documents with typographic precision and total control over the design. Its advanced features include paragraph styles, tables, interactive PDF export, and compatibility with collaborative workflows. It is the preferred tool for publishers, agencies, and graphic designers.',
    logo: '/img/Iconos SVG/indesign.svg',
    category: 'Editorial Design',
    features: [
      'InDesign',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Page design',
      'Print design'
    ],
    price: 'From $20.99/month',
    popular: true
  },
  {
    id: 'incopy',
    name: 'InCopy',
    shortDescription: 'Modify text and layout without affecting designs',
    description: 'Adobe InCopy is the ideal tool for editors and writers collaborating on editorial design projects. It allows you to modify texts and make corrections in InDesign documents without altering the original design. It offers version control, collaborative workflows, and full compatibility with InDesign, facilitating the production of magazines, newspapers, and books in multidisciplinary teams.',
    logo: '/img/Iconos SVG/incopy.svg',
    category: 'Editorial Design',
    features: [
      'InCopy'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Content writing',
      'Content proofreading'
    ],
    price: 'From $20.99/month'
  },

  // Productivity
  {
    id: 'acrobat-pro',
    name: 'Acrobat Pro',
    shortDescription: 'Create, edit, sign, and manage PDF files',
    description: 'Adobe Acrobat Pro is the most complete solution for professional PDF document management. It allows you to create, edit, convert, sign, and protect PDF files with advanced tools. It facilitates real-time collaboration, integration with cloud services, and automation of document workflows. It is essential for businesses, lawyers, educators, and any user requiring maximum security and efficiency in handling digital documents.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productivity',
    features: [
      'Acrobat Pro',
      'Acrobat Reader',
      'Adobe Scan',
      'Fill & Sign'
    ],
    extras: [
      '100GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Fonts',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Advanced PDF workflows',
      'Digital documents',
      'Advanced signature features'
    ],
    price: 'From $14.99/month',
    popular: true
  },
  {
    id: 'acrobat-ai-assistant',
    name: 'Acrobat AI Assistant',
    shortDescription: 'Ask your documents questions for quick answers',
    description: 'The Acrobat AI Assistant is an innovative tool that uses artificial intelligence to analyze, summarize, and answer questions about PDF documents. Compatible with Acrobat Pro, Standard, and Reader, it allows you to extract key information, generate automatic summaries, and perform advanced searches in seconds. It is ideal for professionals who handle large volumes of information and need quick and accurate answers.',
    logo: '/img/Iconos SVG/acrobat.svg',
    category: 'Productivity',
    features: [
      'Acrobat AI Assistant'
    ],
    recommendedFor: [
      'PDF workflows',
      'Digital documents'
    ],
    price: 'From $4.99/month'
  },

  // Audio
  {
    id: 'audition',
    name: 'Audition',
    shortDescription: 'Audio recording, mixing, and restoration',
    description: 'Adobe Audition is the professional audio workstation for recording, editing, mixing, and restoring sound. It offers advanced tools for music production, video post-production, podcasts, and old audio restoration. It includes effects, plugins, multi-track editing, and compatibility with other Adobe products, making it the preferred choice for sound engineers, musicians, and content creators.',
    logo: '/img/Iconos SVG/audition.svg',
    category: 'Audio',
    features: [
      'Audition',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Audio editing',
      'Sound effects'
    ],
    price: 'From $20.99/month'
  },

  // Web Development
  {
    id: 'dreamweaver',
    name: 'Dreamweaver',
    shortDescription: 'Design and develop modern websites',
    description: 'Adobe Dreamweaver is the comprehensive platform for modern web design and development. It combines an intuitive visual editor with powerful coding tools for HTML, CSS, JavaScript, and more. It allows you to create responsive websites, integrate with version control systems like Git, and preview changes in real-time. It is ideal for designers, developers, and agencies seeking efficiency and flexibility in website creation.',
    logo: '/img/Iconos SVG/dreamweaver.svg',
    category: 'Web Development',
    features: [
      'Dreamweaver',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Website design',
      'Website development'
    ],
    price: 'From $20.99/month'
  },

  // Animation
  {
    id: 'animate',
    name: 'Animate',
    shortDescription: 'Design interactive vector animations',
    description: 'Adobe Animate is the leading tool for creating interactive 2D vector animations. It allows you to design characters, scenarios, and effects for web, apps, and video games, integrating advanced drawing tools and support for JavaScript scripting. It exports animations in multiple formats, including HTML5, GIF, and videos, and integrates with Creative Cloud for collaborative workflows.',
    logo: '/img/Iconos SVG/animate.svg',
    category: 'Animation',
    features: [
      'Animate',
      'Adobe Express',
      'Adobe Firefly'
    ],
    extras: [
      '100 GB cloud storage',
      'Step-by-step tutorials',
      'Adobe Portfolio',
      'Adobe Fonts',
      'Behance',
      'Creative Cloud Libraries',
      'Access to the latest features',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      'Animation'
    ],
    price: 'From $20.99/month'
  },

  // Quick Content
  {
    id: 'express-premium',
    name: 'Adobe Express Premium',
    shortDescription: 'Design flyers, TikTok videos, resumes, and reels',
    description: 'Adobe Express Premium is the all-in-one solution for creating high-impact visual content in minutes. It offers professional templates, AI tools for automatic design, video editing, reel creation, and social media resources. It is ideal for entrepreneurs, content creators, and marketing teams seeking speed, quality, and ease of use in their visual projects.',
    logo: '/img/Iconos SVG/cc-express.svg',
    category: 'Quick Content',
    features: [
      'Adobe Express',
      'Photoshop Express',
      'Adobe Firefly'
    ],
    extras: [
      'Premium templates and design elements',
      'Premium features like video resizing and background removal',
      'Over 195 million Adobe Stock photos, videos, and music files',
      'Unlimited PDF quick actions',
      'Unlimited scheduling with Content Planner',
      '100 GB cloud storage',
      'Adobe Fonts',
      'Creative Cloud Libraries',
      '250 monthly generative credits'
    ],
    recommendedFor: [
      'Photo editing',
      'Video editing',
      'Graphic design',
      'PDF export',
      'Social media'
    ],
    price: 'From $9.99/month',
    popular: true
  },

  // Generative AI
  {
    id: 'firefly-standard',
    name: 'Adobe Firefly Standard',
    shortDescription: 'Explore creative AI with 2,000 monthly credits',
    description: 'Adobe Firefly Standard opens the doors to AI-powered creativity, offering 2,000 monthly credits for premium image, video, and audio generation features. Access AI tools to transform ideas into visual content, experiment with advanced effects, and enjoy unlimited access to standard features. It is perfect for creatives who want to explore new possibilities and optimize their workflow.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'Generative AI',
    features: [
      '2,000 monthly generative credits for premium video and audio features',
      'Unlimited access to standard image and vector features'
    ],
    extras: [
      '100GB cloud storage',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideation',
      'Conceptualization',
      'Video creation',
      'Audio translation',
      'Video translation',
      'Image creation'
    ],
    price: 'From $4.99/month'
  },
  {
    id: 'firefly-pro',
    name: 'Adobe Firefly Pro',
    shortDescription: 'Discover creative AI with 7,000 monthly credits',
    description: 'Adobe Firefly Pro takes AI creativity to the next level, providing 7,000 monthly credits for premium image, video, and audio generation features. It includes professional tools for advanced creators, integration with other Adobe apps, and priority support. It is the ideal choice for creative teams, agencies, and professionals seeking innovation and high-level results.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'Generative AI',
    features: [
      '7,000 monthly generative credits for premium video and audio features',
      'Unlimited access to standard image and vector features'
    ],
    extras: [
      '100GB cloud storage',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideation',
      'Conceptualization',
      'Video creation',
      'Audio dubbing',
      'Image creation'
    ],
    price: 'From $9.99/month'
  },
  {
    id: 'firefly-premium',
    name: 'Adobe Firefly Premium',
    shortDescription: 'Create at scale with 50,000 monthly credits',
    description: 'Adobe Firefly Premium is the ultimate enterprise solution for large-scale AI-powered content creation. It offers 50,000 monthly credits, priority access to premium features, and dedicated enterprise support. It enables teams and businesses to efficiently produce high-quality images, videos, and audio, optimizing resources and accelerating innovation.',
    logo: '/img/Iconos SVG/firefly.svg',
    category: 'Generative AI',
    features: [
      '50,000 monthly generative credits for premium video and audio features',
      'Unlimited access to standard image and vector features'
    ],
    extras: [
      '100GB cloud storage',
      'Adobe Fonts'
    ],
    recommendedFor: [
      'Ideation',
      'Conceptualization',
      'Video creation',
      'Audio translation',
      'Video translation',
      'Image creation'
    ],
    price: 'From $19.99/month'
  },

 

  // Resources
  {
    id: 'adobe-stock',
    name: 'Adobe Stock',
    shortDescription: 'Access millions of images, 4K videos, and templates',
    description: 'Adobe Stock is the most comprehensive creative resource library on the market, with millions of royalty-free images, 4K and HD videos, templates, illustrations, and graphic elements. It allows creatives, agencies, and businesses to access high-quality content for their projects, integrating seamlessly with Adobe Creative Cloud applications. It facilitates the search, download, and use of professional resources in any type of visual production.',
    logo: '/img/Iconos SVG/stock.svg',
    category: 'Resources',
    features: [
      '10 assets per month',
      '500 monthly generative credits'
    ],
    recommendedFor: [
      'Stock images and illustrations',
      'Royalty-free 4K and HD videos',
      'Artist-designed templates',
      'Stock audio and music tracks'
    ],
    price: 'From $29.99/month'
  },
   // 3D and Modeling
   {
    id: 'substance-3d-texturing',
    name: '3D Texturing with Adobe Substance',
    shortDescription: 'Create, capture, and paint 3D materials',
    description: 'Adobe Substance for 3D texturing is the professional suite for creating, capturing, and painting realistic materials in three-dimensional environments. It includes specialized tools such as Sampler, Designer, and Painter, allowing artists and designers to develop unique textures, simulate complex materials, and export results to any rendering engine. It is essential for the video game, animation, and industrial design industries.',
    logo: [
      '/img/Iconos SVG/substance-3d-sampler.svg',
      '/img/Iconos SVG/substance-3d-designer.svg',
      '/img/Iconos SVG/substance-3d-painter.svg'
    ],
    category: '3D & Modeling',
    features: [
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Assets'
    ],
    extras: [
      'Thousands of 3D assets',
      '100 GB cloud storage',
      '25 monthly generative credits'
    ],
    recommendedFor: [
      '3D Texturing'
    ],
    price: 'From $19.99/month'
  },
  {
    id: 'substance-3d-collection',
    name: 'Adobe Substance 3D Collection',
    shortDescription: 'Model, texture, and render 3D assets and scenes',
    description: 'Adobe Substance 3D Collection is the most complete package for modeling, texturing, and rendering 3D assets and scenes. It includes Modeler, Sampler, Designer, Painter, Stager, and a vast library of ready-to-use 3D assets. It allows artists, designers, and studios to create 3D projects from start to finish, with full integration into the Adobe ecosystem and compatibility with major rendering engines and augmented reality platforms.',
    logo: [
      '/img/Iconos SVG/substance-3d-modeler.svg',
      '/img/Iconos SVG/substance-3d-sampler.svg',
      '/img/Iconos SVG/substance-3d-designer.svg',
      '/img/Iconos SVG/substance-3d-painter.svg',
      '/img/Iconos SVG/substance-3d-stager.svg',
      '/img/Iconos SVG/substance-3d-assets.svg'
    ],
    category: '3D & Modeling',
    features: [
      'Adobe Substance 3D Modeler',
      'Adobe Substance 3D Sampler',
      'Adobe Substance 3D Designer',
      'Adobe Substance 3D Painter',
      'Adobe Substance 3D Stager',
      'Adobe Substance 3D Assets'
    ],
    extras: [
      'Thousands of 3D assets',
      '100 GB cloud storage',
      '100 monthly generative credits'
    ],
    recommendedFor: [
      '3D Modeling',
      '3D Texturing'
    ],
    price: 'From $49.99/month',
    popular: true
  }
];
