export interface AdobeApp {
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
}

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
}
