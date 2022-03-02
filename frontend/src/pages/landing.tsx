import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Fade } from 'react-awesome-reveal';

import { useGetExampleDataQuery } from 'services';

import { HeroImage1, HeroImage2, HeroImage3 } from 'assets';

function Landing() {
  const ref: any = React.useRef(null);
  const HeroImage1Ref: any | null = React.useRef(null);
  const HeroImage2Ref: any | null = React.useRef(null);
  const HeroImage3Ref: any | null = React.useRef(null);

  const { data } = useGetExampleDataQuery();

  const handleScroll = () => {
    if (window.scrollY <= 768) {
      HeroImage1Ref.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      HeroImage2Ref.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      HeroImage3Ref.current.style.transform = `translateY(${window.scrollY * 0.175}px)`;
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <LoadingBar color="#0a0c0f" height={5} shadow={false} ref={ref} />

      <div id="appContainer" className="bg-noise-white relative z-0">
        <div className="app-container flex flex-col items-center justify-center min-h-screen md:min-h-[unset] md:h-screen max-h-[768px] relative overflow-hidden">
          <Fade cascade triggerOnce duration={1000} direction="up">
            <h1 className="text-custom-black-900 mb-4 text-4xl md:text-5xl lg:text-6xl">
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
            className="absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] bottom-[5%] sm:bottom-[10%] z-[1] w-full max-w-[100px] sm:max-w-[125px] md:max-w-[150px] img-animation-load "
            ref={HeroImage1Ref}
          />
          <img
            src={HeroImage2}
            alt="Hero"
            className="absolute right-[-15%] sm:right-[5%] lg:right-[15%] top-[10%] sm:top-[10%] z-[1] w-full max-w-[125px] sm:max-w-[150px] md:max-w-[200px] img-animation-load"
            ref={HeroImage2Ref}
            style={{
              animationDelay: '1s',
            }}
          />
          <img
            src={HeroImage3}
            alt="Hero"
            className="absolute -left-[5%] sm:left-0 lg:left-[10%] md:left-[5%] top-[10%] sm:top-[30%] z-[2] w-full max-w-[100px] sm:max-w-[125px] md:max-w-[175px] img-animation-load "
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

      <div className="app-container p-6 flex items-center justify-center">
        {/* Only show this if the data is loaded */}
        {data && (
          <pre className="bg-slate-100 w-full max-w-sm overflow-y-auto text-xs text-slate-800">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </>
  );
}

export default Landing;
