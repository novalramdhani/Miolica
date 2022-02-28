/* eslint-disable no-use-before-define */
import React from 'react';
import { getBreakpoint } from 'utils';
import {
  Logo, LogoFull, IconUser, IconShoppingBag, IconLove,
} from 'assets';
import NavbarMenu from './navbar-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  const renderLogo = () => {
    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm' || getBreakpoint() === 'md') {
      return <Logo className="navbar-logo h-11 w-[auto] text-custom-black-900" />;
    }

    return <LogoFull className="navbar-logo h-11 w-[auto] text-custom-black-900" />;
  };

  const handleOpenMenu = () => {
    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm') {
      setIsOpen(!isOpen);
      return;
    }

    setIsOpen(false);
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {renderLogo()}

        <NavbarMenu state={isOpen} onClose={() => setIsOpen(false)} />

        <div className="flex items-center gap-5">
          {/* Icons */}
          <button
            type="button"
            className="flex items-center"
          >
            <IconShoppingBag className="w-5 h-5 text-custom-black-900" />
          </button>
          <button
            type="button"
            className="flex items-center"
          >
            <IconLove className="w-5 h-5 text-custom-black-900" />
          </button>
          <button
            type="button"
            className="flex items-center"
          >
            <IconUser className="w-5 h-5 text-custom-black-900" />
          </button>
          {/* End Icons */}

          <button
            onClick={() => handleOpenMenu()}
            type="button"
            className={`navbar-burger ${isOpen ? 'active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
