/* eslint-disable no-self-compare */
import React from 'react';
import type { Ref } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { Fade } from 'react-awesome-reveal';

import {
  HeroImage1, HeroImage2, HeroImage3, IconChevronLeft, IconChevronRight,
} from 'assets';
import { ProductCard } from 'components/card';
import { useSlider } from 'hooks';
import { axios } from 'utils';

function Landing() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [sampleData, setSampleData] = React.useState<object[]>([]);
  // Refs
  const ref: Ref<any> = React.useRef<LoadingBarRef>(null);
  const HeroImage1Ref: Ref<HTMLImageElement> = React.useRef<HTMLImageElement>(null);
  const HeroImage2Ref: Ref<HTMLImageElement> = React.useRef<HTMLImageElement>(null);
  const HeroImage3Ref: Ref<HTMLImageElement> = React.useRef<HTMLImageElement>(null);
  const productSlideRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

  const {
    nextSlide, prevSlide, maxSlide, currentSlide,
  } = useSlider({ ref: productSlideRef, isLoadingData: isLoading });

  const handleScroll = () => {
    if (window.scrollY >= 500) return;

    HeroImage1Ref?.current?.style.setProperty('--translate-y', `${window.scrollY / 4}px`);
    HeroImage2Ref?.current?.style.setProperty('--translate-y', `${window.scrollY / 3.5}px`);
    HeroImage3Ref?.current?.style.setProperty('--translate-y', `${window.scrollY / 5}px`);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      ref?.current?.continuousStart();

      const response = await axios('https://random-data-api.com/api/restaurant/random_restaurant?size=15', {
        setTimeout: 2500,
      });

      setSampleData(response.data);
      ref?.current?.complete();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <LoadingBar
        color="#0a0c0f"
        height={5}
        shadowStyle={{
          boxShadow: '0 0 1rem #0a0c0f',
        }}
        ref={ref}
      />

      <div id="appContainer" className="bg-noise-white relative z-0">
        <div className="app-container flex flex-col items-center justify-center min-h-screen md:min-h-[unset] md:h-screen max-h-[768px] relative overflow-hidden">
          <Fade cascade triggerOnce duration={1000} direction="up">
            <h1 className="text-custom-black-900 mb-4 text-4xl md:text-5xl lg:text-7xl">
              <span className="font-syne font-semibold">Wear</span>
              {' '}
              <span className="font-neue-machina">Looks</span>
              ,
              <br />
              <span className="font-syne font-semibold">Not</span>
              {' '}
              <span className="font-neue-machina">Outfits</span>
              .
            </h1>

            <button
              className="btn px-8 tooltip"
              type="button"
            >
              <span>Shop now</span>
              <p className="tooltip-text-center">
                Shop now
              </p>
            </button>
          </Fade>

          <img
            src={HeroImage1}
            alt="Hero"
            className="absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] bottom-[5%] sm:bottom-[10%] z-[1] w-full max-w-[100px] sm:max-w-[125px] md:max-w-[175px] img-animation-load hero-image"
            ref={HeroImage1Ref}
          />
          <img
            src={HeroImage2}
            alt="Hero"
            className="absolute right-[-15%] sm:right-[5%] lg:right-[15%] top-[10%] sm:top-[10%] z-[1] w-full max-w-[125px] sm:max-w-[150px] md:max-w-[240px] img-animation-load hero-image"
            ref={HeroImage2Ref}
            style={{
              animationDelay: '1s',
            }}
          />
          <img
            src={HeroImage3}
            alt="Hero"
            className="absolute -left-[5%] sm:left-0 lg:left-[10%] md:left-[5%] top-[10%] sm:top-[30%] z-[2] w-full max-w-[100px] sm:max-w-[125px] md:max-w-[225px] img-animation-load hero-image"
            ref={HeroImage3Ref}
            style={{
              animationDelay: '1.5s',
            }}
          />
        </div>
      </div>

      <div className="bg-noise-black">
        <div className="app-container p-6 sm:py-12 md:py-20 min-h-screen sm:min-h-[unset] flex items-center justify-center">
          <Fade triggerOnce duration={1000} direction="up">
            <h2 className="text-center text-custom-white-900 text-3xl sm:text-4xl max-w-[500px] font-syne font-bold headline">
              No One
              {' '}
              <span className="font-neue-machina font-normal"> person is the same</span>
              {' '}
              So why do
              {' '}
              <span className="font-neue-machina font-normal">clothes</span>
              {' '}
              ‍HAVE TO BE
            </h2>
          </Fade>
        </div>
      </div>

      <div className="bg-custom-white-900 border-b border-custom-black-700">
        <div className="app-container py-4 overflow-x-hidden flex flex-row items-center flex-auto">
          <div className="marquee-root text-custom-black-700">
            <div className="flex items-center font-neue-machina text-base py-2 px-6 w-full gap-8 marquee">
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
            </div>
            <div className="flex items-center font-neue-machina text-base py-2 px-6 w-full gap-8 marquee">
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
              <span>Inspiration</span>
              {' '}
              /
              {' '}
              <span>Clothing</span>
              {' '}
              /
              {' '}
              <span>eCommerce</span>
              {' '}
              /
              {' '}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-noise-pink">
        <div className="app-container px-[0!important] md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between px-6">
            <div className="flex w-full flex-row my-6 mx-2 gap-6 items-center">
              <Fade triggerOnce duration={1000} direction="up">
                <h2 className="font-syne font-semibold text-4xl text-custom-black-900">Latest Product</h2>

                <button
                  className="btn whitespace-nowrap"
                  type="button"
                >
                  Notify me
                </button>
              </Fade>
            </div>

            <div className="flex w-full items-center my-2 justify-center sm:justify-end gap-6">
              <Fade triggerOnce duration={1000} direction="up">
                <button
                  className="btn-outline px-3 rounded-full"
                  type="button"
                  onClick={prevSlide}
                  disabled={currentSlide === 0 && true}
                >
                  <IconChevronLeft className="w-6 h-6" />
                </button>

                <button
                  className="btn-outline px-3 rounded-full"
                  type="button"
                  onClick={nextSlide}
                  disabled={currentSlide >= maxSlide && true}
                >
                  <IconChevronRight className="w-6 h-6" />
                </button>
              </Fade>
            </div>
          </div>

          <div className="product-slider-root w-full">
            <div className="product-slider-container h-[470px] w-full" ref={productSlideRef}>

              {isLoading && (
                <>
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                </>
              )}

              {!isLoading && sampleData.flatMap((item: any) => (
                <ProductCard
                  key={item.id}
                  productName={item.name}
                  productPrice={213.08}
                  productImage={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300`}
                />
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="bg-noise-black text-custom-white-900">
        <div className="app-container px-6 py-8 text-center min-h-screen md:min-h-[unset]">
          <h2 className="font-syne font-bold text-4xl max-w-[550px] mx-auto">
            all of
            {' '}
            <span className="font-neue-machina font-normal">our products</span>
            {' '}
            are available for
            {' '}
            <span className="font-neue-machina font-normal">men</span>
            {' '}
            and
            {' '}
            <span className="font-neue-machina font-normal">women</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Landing;
