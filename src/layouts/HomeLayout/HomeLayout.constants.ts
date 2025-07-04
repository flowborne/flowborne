import { MetricItem, FeatureItem } from "~types/home";

// Constants
const METRICS: MetricItem[] = [
  { 
    value: 'metrics.projectsDelivered.value', 
    label: 'metrics.projectsDelivered.label' 
  },
  { 
    value: 'metrics.clientSatisfaction.value', 
    label: 'metrics.clientSatisfaction.label' 
  },
  { 
    value: 'metrics.enterpriseClients.value', 
    label: 'metrics.enterpriseClients.label' 
  },
  { 
    value: 'metrics.supportAvailable.value', 
    label: 'metrics.supportAvailable.label' 
  },
];

const FEATURES: FeatureItem[] = [
  {
    icon: 'FlashOn',
    title: 'industryLeaders.features.lightningFast.title',
    description: 'industryLeaders.features.lightningFast.description',
  },
  {
    icon: 'Security',
    title: 'industryLeaders.features.enterpriseSecurity.title',
    description: 'industryLeaders.features.enterpriseSecurity.description',
  },
  {
    icon: 'TrendingUp',
    title: 'industryLeaders.features.scalableArchitecture.title',
    description: 'industryLeaders.features.scalableArchitecture.description',
  },
  {
    icon: 'GpsFixed',
    title: 'industryLeaders.features.resultsDriven.title',
    description: 'industryLeaders.features.resultsDriven.description',
  },
];

const DEVOPS_FEATURES = 'solutions.devopsCloud.features';
const SOFTWARE_FEATURES = 'solutions.softwareDev.features';

export { METRICS, FEATURES, DEVOPS_FEATURES, SOFTWARE_FEATURES };
