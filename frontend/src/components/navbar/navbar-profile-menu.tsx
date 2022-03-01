/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppSelector } from 'app';

import { LogoFull } from 'assets';

interface NavbarPropfileType {
  isProfileMenuOpened: boolean;
  onClose: () => void;
}

export default function NavbarProfileMenu({
  isProfileMenuOpened,
  onClose,
}: NavbarPropfileType) {
  const { isAuthenticated } = useAppSelector(({ auth }) => auth);

  if (isAuthenticated) {
    return (
      <p>Lorem ipsum dolor sit amet.</p>
    );
  }

  return (
    <div className={`popup-bottom ${isProfileMenuOpened ? 'active' : ''}`} onClick={onClose}>
      <div className="popup-content max-w-[550px]" onClick={(e) => e.stopPropagation()}>
        <div className="py-2 px-4 flex justify-end items-center border-b border-l-custom-white-700 relative">
          <LogoFull className="w-auto h-[30px] absolute-center" />

          <button
            className="btn-default p-0 w-10 h-10 flex items-center justify-center text-xl"
            type="button"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, tempore.</p>
        </div>
      </div>
    </div>
  );
}
