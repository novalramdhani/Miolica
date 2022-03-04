/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React from 'react';
import { getBreakpoint } from 'utils';
import {
  Logo, LogoFull, IconUser, IconShoppingBag, IconLove,
} from 'assets';
import NavbarMenu from './navbar-menu';
import NavbarProfileMenu from './navbar-profile-menu';

interface NavbarPropsType {
  isScrolled: boolean;
}

export default function Navbar({
  isScrolled,
}: NavbarPropsType) {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
  const [isProfileMenuOpened, setIsProfileMenuOpened] = React.useState<boolean>(false);

  const renderLogo = () => {
    const logoClassName = 'navbar-logo h-11 w-[auto] text-custom-black-900';
    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm' || getBreakpoint() === 'md') {
      return <Logo className={logoClassName} />;
    }

    return <LogoFull className={logoClassName} />;
  };

  const toggleBodyScroll = (isOpen: boolean) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  const handleOpenMenu = () => {
    if (isProfileMenuOpened) setIsProfileMenuOpened(false);

    if (getBreakpoint() === 'xs' || getBreakpoint() === 'sm') {
      setIsMenuOpened(!isMenuOpened);
      toggleBodyScroll(!isMenuOpened);
      return;
    }

    setIsMenuOpened(false);
  };

  const handleOpenProfileMenu = () => {
    if (isMenuOpened) setIsMenuOpened(false);

    setIsProfileMenuOpened(!isProfileMenuOpened);
    toggleBodyScroll(!isProfileMenuOpened);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {renderLogo()}

        <NavbarMenu state={isMenuOpened} onClose={handleOpenMenu} />

        <div className="flex items-center gap-5">
          {/* Icons */}
          <button
            type="button"
            className="flex items-center tooltip"
          >
            <IconShoppingBag className="w-5 h-5 text-custom-black-900" />
            <p className="tooltip-text-left">
              Shopping bag
            </p>
          </button>
          <button
            type="button"
            className="flex items-center tooltip"
          >
            <IconLove className="w-5 h-5 text-custom-black-900" />
            <p className="tooltip-text-center">
              Liked Product
            </p>
          </button>
          <button
            type="button"
            className="flex items-center tooltip"
            onClick={handleOpenProfileMenu}
          >
            <IconUser className="w-5 h-5 text-custom-black-900" />
            <p className="tooltip-text">
              Profile
            </p>
          </button>
          {/* End Icons */}

          <button
            onClick={handleOpenMenu}
            type="button"
            className={`navbar-burger ${isMenuOpened ? 'active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <NavbarProfileMenu
          isProfileMenuOpened={isProfileMenuOpened}
          onClose={handleOpenProfileMenu}
        />
      </div>
    </nav>
  );
}
