import React from 'react';

interface UseSliderPropTypes {
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement> | null;
  isLoadingData?: boolean;
}

/**
 *
 * Simple slider hook
 * @param {React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement> | null} ref - ref to the element
 *
 */
export default function useSlider({
  ref,
  isLoadingData = true,
}: UseSliderPropTypes) {
  const [sliderPositionX, setSliderPositionX] = React.useState<number>(0);
  const [sliderScrollWidth, setSliderScrollWidth] = React.useState<number>(0);

  const scrollNumber = window.innerWidth / 2 + 250;

  /**
   * function to slide the slider to the right
   */
  const next = () => {
    const slider = ref?.current;

    if (slider) {
      if (sliderPositionX <= sliderScrollWidth) {
        setSliderPositionX(sliderPositionX + scrollNumber);
        slider.scrollTo(sliderPositionX + scrollNumber, 0);
      }

      if (slider.scrollLeft + scrollNumber >= sliderScrollWidth) {
        setSliderPositionX(slider.scrollWidth - slider.clientWidth);
        slider.scrollTo(slider.scrollWidth, 0);
      }
    }
  };

  /**
   * function to slide the slider to the left
   */
  const prev = () => {
    const slider = ref?.current;

    if (slider) {
      if (sliderPositionX >= 0) {
        setSliderPositionX(sliderPositionX - scrollNumber);
        slider.scrollTo(sliderPositionX - scrollNumber, 0);
      }

      if (slider.scrollLeft - scrollNumber < 0) {
        setSliderPositionX(0);
        slider.scrollTo(0, 0);
      }
    }
  };

  /**
   * function to set the slider scroll width
   */
  const handleScroll = () => {
    const slider = ref?.current;

    if (slider) setSliderPositionX(slider.scrollLeft);
  };

  React.useEffect(() => {
    const slider = ref?.current;

    if (slider) {
      slider.removeEventListener('scroll', handleScroll);
      setSliderScrollWidth(slider.scrollWidth - slider.clientWidth);
    }

    return () => {
      ref?.current?.removeEventListener('scroll', handleScroll);
    };
  }, [isLoadingData]);

  return {
    nextSlide: next,
    prevSlide: prev,
    currentSlide: sliderPositionX,
    maxSlide: sliderScrollWidth,
  };
}
