/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ToolItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  url: string;
  accentColor: 'teal' | 'slate';
  category: string;
  features: string[];
}

export const G25_TOOLS: ToolItem[] = [
  {
    id: 'mapping',
    title: 'Genetic Mapper',
    badge: 'Spatial Analysis',
    subtitle: 'Surface & Distance Mapping',
    description:
      'Place reference populations, choose a source, and render a genetic-distance or admixture surface clipped to land.',
    url: 'https://hubg25.github.io/HubG25/mapping',
    accentColor: 'teal',
    category: 'MAPPING',
    features: [
      'Euclidean genetic distance projection',
      'Admixture surface interpolation',
      'Customizable terrain & water relief',
      'High-res vector/raster map export',
    ],
  },
  {
    id: 'calculator',
    title: 'G25 Calculator',
    badge: 'Statistical Modeling',
    subtitle: 'Distance & Admixture Engine',
    description:
      'Compute multi-dimensional population coordinates, run target-to-source distance matrices, and model ancestral components.',
    url: 'https://hubg25.github.io/HubG25/calculator',
    accentColor: 'slate',
    category: 'CALCULATOR',
    features: [
      '25-dimensional PCA distance metrics',
      'Single & multi-source breakdown',
      'Custom target coordinate loading',
      'Instant population affinity sorting',
    ],
  },
];
