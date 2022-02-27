/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

export interface HttpResponse<T> {
  data?: T;
  statusCode: number;
  status: 'Success' | 'Error/Failed';
}

export interface PrivateRouteBaseType {
  path: string;
  element: () => JSX.Element;
}

export interface PrivateRouteType extends PrivateRouteBaseType {
  routes?: PrivateRouteBaseType[];
}

export interface PublicRouteType {
  path: string;
  element: () => JSX.Element;
}
