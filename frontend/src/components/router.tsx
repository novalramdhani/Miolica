/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as AppRoutes } from 'app';

function Router() {
  const {
    PublicRoutes,
  } = AppRoutes;

  return (
    <BrowserRouter>
      <Routes>

        {PublicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
