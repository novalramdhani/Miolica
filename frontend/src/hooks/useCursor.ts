import React from 'react';

interface UseCursorPropTypes {
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement> | null;
  onMouseMove?: () => void;
}

/**
 *
 * Simple custom hook to handle cursor position
 *
 * @param {React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement> | null} ref - ref to the element
 * @param {() => void} onMouseMove - additional function to handle mouse move
 *
 */
export default function useCursor({
  ref,
  onMouseMove,
}: UseCursorPropTypes) {
  const mouseMove = (event: React.MouseEvent<HTMLElement> | any) => {
    const { clientX, clientY } = event;

    if (ref?.current) {
      ref?.current.style.setProperty('--x', `${clientX}px`);
      ref?.current.style.setProperty('--y', `${clientY}px`);
    }
    // eslint-disable-next-line no-unused-expressions
    onMouseMove && onMouseMove();
  };

  React.useEffect(() => {
    if (ref?.current) window.addEventListener('mousemove', mouseMove);

    return () => {
      if (ref?.current) window.removeEventListener('mousemove', mouseMove);
    };
  }, [ref]);

  return {
    ref,
  };
}
