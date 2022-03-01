import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Fade } from 'react-awesome-reveal';

function Landing() {
  const ref: any = React.useRef(null);

  React.useEffect(() => {
    ref?.current?.continuousStart();

    setTimeout(() => ref?.current?.complete(), 1000);
  }, []);

  return (
    <>
      <LoadingBar color="#0a0c0f" height={5} shadow={false} ref={ref} />

      <div id="appContainer" className="p-6 flex flex-col items-center justify-center min-h-screen md:min-h-[unset] md:h-screen max-h-[992px] bg-noise-white">
        <Fade cascade triggerOnce direction="up">

          <h1 className="text-custom-black-900 mb-4">
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
            Shop now
          </button>
        </Fade>
      </div>

      <div className="min-h-screen">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis praesentium non est illum eius!</p>
      </div>

      <div className="min-h-screen">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis praesentium non est illum eius!</p>
      </div>
    </>
  );
}

export default Landing;
