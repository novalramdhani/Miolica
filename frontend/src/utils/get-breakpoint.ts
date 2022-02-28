/* eslint-disable import/prefer-default-export */
export const getBreakpoint = () => {
  const breakpoints = [
    {
      name: 'xs',
      min: 0,
      max: 575,
    },
    {
      name: 'sm',
      min: 576,
      max: 767,
    },
    {
      name: 'md',
      min: 768,
      max: 991,
    },
    {
      name: 'lg',
      min: 992,
      max: 1199,
    },
    {
      name: 'xl',
      min: 1200,
      max: Infinity,
    },
  ];

  const { innerWidth } = window;

  const breakpoint = breakpoints.find((item) => innerWidth >= item.min && innerWidth <= item.max);

  return breakpoint ? breakpoint.name : 'xl';
};
