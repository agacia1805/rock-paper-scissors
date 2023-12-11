// "use client";

import { Score } from './score';

export const Header = () => {
  return (
    <header className='glitter-border relative flex w-full max-w-2xl justify-between rounded-lg border p-6'>
      <h1 className='flex flex-col text-2xl font-extrabold leading-tight'>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h1>
      <Score />
    </header>
  );
};
