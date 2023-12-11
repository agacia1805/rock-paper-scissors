'use client';

import { useEffect } from 'react';
import { useScore } from './scoreProvider';

export const Score = () => {
  const { score } = useScore();

  return (
    <div className='glitter-border flex flex-col items-center justify-center rounded-lg border bg-pink-200 bg-opacity-10 bg-clip-padding px-4 py-2 backdrop-blur-md backdrop-filter'>
      <p className='text-xl font-semibold'>Score</p>
      <p className='text-2xl font-extrabold'>{score}</p>
    </div>
  );
};
