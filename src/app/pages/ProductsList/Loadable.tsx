/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const ProductsList = lazyLoad(
  () => import('./index'),
  module => module.ProductsList,
  {
    fallback: <LoadingIndicator />,
  },
);
