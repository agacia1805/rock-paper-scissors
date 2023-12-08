"use client";

import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ScoreContext = createContext({
  score: 0,
  setScore: (score: number) => {},
});

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useLocalStorage<number>('score', 0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
