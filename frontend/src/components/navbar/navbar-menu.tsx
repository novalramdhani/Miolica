/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React from 'react';
import { NavLink } from 'react-router-dom';

type NavbarMenuType = {
  state?: boolean;
  onClose?: () => void;
}

export default function NavbarMenu({ state, onClose }: NavbarMenuType) {
  const menuItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <div
      className={`navbar-menu ${state ? 'active' : ''}`}
      onClick={onClose}
    >
      <ul className={state ? 'active' : ''} onClick={(e) => e.stopPropagation()}>

        {menuItems.flatMap((menu) => (
          <li key={menu.title}>
            <NavLink id="hover-link" onClick={onClose} to={menu.href}>{menu.title}</NavLink>
          </li>
        ))}

      </ul>
    </div>
  );
}
