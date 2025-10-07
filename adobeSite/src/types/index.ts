export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  logo: string | string[];
  category: string;
  features: string[];
  price: string;
  popular?: boolean;
  extras?: string[];
  recommendedFor?: string[];
  website?: string;
  serviceType: 'adobe' | 'cloudways' | 'dext' | 'proton' | '800com' | 'krisp' | 'streamily' | 'aiseesoft' | 'sider' | 'weblium' | 'brevo' | 'pinata' | 'picsart' | 'fileforms' | 'doodle' | 'easyship' | 'gusto';
}

// Mantener compatibilidad con el código existente
export interface AdobeApp extends Service {
  serviceType: 'adobe';
}

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
}
