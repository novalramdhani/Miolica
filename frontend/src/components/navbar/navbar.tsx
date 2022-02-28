/* eslint-disable no-use-before-define */
import React from 'react';
import { getBreakpoint } from 'utils';
import { Logo, LogoFull } from 'assets';
import NavbarMenu from './navbar-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const renderLogo = () => {
    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm' || getBreakpoint() === 'md') {
      return <Logo className="navbar-logo h-11 w-[auto]" />;
    }

    return <LogoFull className="navbar-logo h-11 w-[auto]" />;
  };

  const handleOpenMenu = () => {
    console.log(getBreakpoint());

    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm') {
      setIsOpen(!isOpen);
      return;
    }

    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {renderLogo()}

        <NavbarMenu state={isOpen} onClose={() => setIsOpen(false)} />

        <button
          onClick={() => handleOpenMenu()}
          type="button"
          className="navbar-burger w-11 h-11 bg-custom-white-500"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
