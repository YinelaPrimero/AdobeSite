export interface AdobeApp {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  logo: string;
  category: string;
  features: string[];
  price: string;
  popular?: boolean;
}

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
}
