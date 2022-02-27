/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import Landing from 'pages/landing';

import { PrivateRouteType, PublicRouteType } from './types';

// Add your private routes here
const PrivateRoutes: PrivateRouteType[] = [];

// Add your public routes here
const PublicRoutes: PublicRouteType[] = [
  {
    path: '/',
    element: Landing,
  },
];

export const routes = {
  PrivateRoutes,
  PublicRoutes,
};
