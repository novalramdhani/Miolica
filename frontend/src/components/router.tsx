/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as AppRoutes } from 'app';

import Error404 from 'pages/404';
import { Navbar } from 'components';

function Router() {
  const { PublicRoutes } = AppRoutes;

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {PublicRoutes.flatMap((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
