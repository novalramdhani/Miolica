/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Ref } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes as AppRoutes } from 'app';
import { useCursor } from 'hooks';

import Error404 from 'pages/404';
import { Navbar } from 'components';

function Router() {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [showText, setShowText] = React.useState<string | null>(null);

  const { PublicRoutes } = AppRoutes;

  const cursorRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const onEnter = (text: string | any) => {
      setShowText(text);
      cursorRef.current?.style.setProperty('--w', '5rem');
      cursorRef.current?.style.setProperty('--h', '5rem');
      cursorRef.current?.classList.remove('mix-blend-difference');
      cursorRef.current?.classList.add('hover');
    };

    const onLeave = () => {
      setShowText(null);
      cursorRef.current?.style.setProperty('--w', '3rem');
      cursorRef.current?.style.setProperty('--h', '3rem');
      cursorRef.current?.classList.add('mix-blend-difference');
      cursorRef.current?.classList.remove('hover');
    };

    const link = document.querySelectorAll('a[href]:not(#product-card)');
    const productCards = document.querySelectorAll('#product-card');

    link?.forEach((item) => {
      item.addEventListener('mouseenter', () => onEnter('Click link'));
      item.addEventListener('mouseleave', onLeave);
    });

    productCards?.forEach((item) => {
      item.addEventListener('mouseenter', () => onEnter('View Product'));
      item.addEventListener('mouseleave', onLeave);
    });
  };

  useCursor({
    ref: cursorRef,
    onMouseMove: handleMouseEnter,
  });

  const handleScroll = () => {
    if (window.scrollY > 75) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar isScrolled={isScrolled} />
      <div className="custom-cursor mix-blend-difference" ref={cursorRef}>
        <span className="absolute-center text-center">{showText || ''}</span>
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
