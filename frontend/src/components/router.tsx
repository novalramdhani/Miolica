/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as AppRoutes } from 'app';

import Error404 from 'pages/404';
import { Navbar } from 'components';

function Router() {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [showText, setShowText] = React.useState<string | null>(null);

  const cursorRef = React.useRef<any>(null);

  const { PublicRoutes } = AppRoutes;

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { current } = cursorRef;

    if (current) {
      current.style.left = `${clientX - 12.5}px`;
      current.style.top = `${clientY - 15}px`;
    }

    const link = document.querySelectorAll('#hover-link');

    link?.forEach((item: any) => {
      item.addEventListener('mouseenter', () => {
        if (item.classList.contains('active')) return;

        setShowText('click link');
        current.style.width = '5rem';
        current.style.height = '5rem';
        current.classList.remove('mix-blend-difference');
      });

      item.addEventListener('mouseleave', () => {
        setShowText(null);
        current.style.width = '2rem';
        current.style.height = '2rem';
        current.classList.add('mix-blend-difference');
      });
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 75) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar isScrolled={isScrolled} />
      <div className="custom-cursor mix-blend-difference" ref={cursorRef}>
        <div className="absolute-center text-center">{showText || ''}</div>
      </div>

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
