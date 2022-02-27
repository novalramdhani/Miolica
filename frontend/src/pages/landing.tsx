import React from 'react';

import { ReactComponent as Logo } from 'assets/img/logo.svg';

import {
  useAppDispatch, useAppSelector, increment, decrement, reset,
} from '../app';

function Landing() {
  const { count } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div id="appContainer" className="p-6 flex flex-col items-center justify-center min-h-screen">
      <Logo className="w-32 absolute top-0 md:top-6" />

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
  );
}

export default Landing;
