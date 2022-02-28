import React from 'react';
import LoadingBar from 'react-top-loading-bar';

import {
  useAppDispatch, useAppSelector, increment, decrement, reset,
} from '../app';

function Landing() {
  const { count } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  const ref: any = React.useRef(null);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  React.useEffect(() => {
    ref?.current?.continuousStart();

    setTimeout(() => ref?.current?.complete(), 2000);
  }, []);

  return (
    <>
      <LoadingBar color="#0a0c0f" height={5} shadow={false} ref={ref} />

      <div id="appContainer" className="p-6 flex flex-col items-center justify-center min-h-screen">

        <h1 className="font-syne font-bold text-4xl text-center mb-6">Counter</h1>
        <p className="text-xl mb-8">
          {count}
        </p>

        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <button
            type="button"
            title="Increment"
            onClick={handleIncrement}
            className="btn"
          >
            +1
          </button>

          <button
            type="button"
            title="Decrement"
            onClick={handleDecrement}
            className="btn"
          >
            -1
          </button>

          <button
            type="button"
            title="Decrement"
            onClick={handleReset}
            className="btn-outline"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
