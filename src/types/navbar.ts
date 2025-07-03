export interface NavItem {
  label: string; 
  path: string;
}

export interface ServiceItem {
  label: string; 
  path: string;
  description: string; 
}

export interface ServiceSection {
  category: string; 
  items: ServiceItem[];
}