import { NavItem, ServiceSection } from "~types/navbar";

export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.aboutUs', path: '/about-us' },
  { label: 'nav.caseStudies', path: '/case-studies' },
  { label: 'nav.blog', path: '/blog' },
  { label: 'nav.contact', path: '/contact' },
];

export const SERVICE_ITEMS: ServiceSection[] = [
  {
    category: 'services.devopsCloud',
    items: [
      {
        label: 'services.cloudMigration',
        path: '/services-dev-ops',
        description: 'services.cloudMigrationDesc',
      },
      {
        label: 'services.devOpsService',
        path: '/services-dev-ops',
        description: 'services.devOpsServiceDesc',
      },
      {
        label: 'services.devOpsConsulting',
        path: '/services-dev-ops',
        description: 'services.devOpsConsultingDesc',
      },
    ],
  },
  {
    category: 'services.softwareDev',
    items: [
      {
        label: 'services.webAppDev',
        path: '/services-development',
        description: 'services.webAppDevDesc',
      },
      {
        label: 'services.mobileAppDev',
        path: '/services-development',
        description: 'services.mobileAppDevDesc',
      },
      {
        label: 'services.mvpDev',
        path: '/services-development',
        description: 'services.mvpDevDesc',
      },
      {
        label: 'services.saasDev',
        path: '/services-development',
        description: 'services.saasDevDesc',
      },
    ],
  },
];
