"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type ScoreContextType = {
  score: number;
  setScore: (newValue: number | ((val: number) => number)) => void;
};

const ScoreContext = createContext<ScoreContextType>({
  score: 0,
  setScore: () => {},
});

export const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useLocalStorage<number>('score', 0);

  const updateScore = (newValue: number | ((val: number) => number)) => {
      setScore(prevScore => (typeof newValue === 'function' ? newValue(prevScore) : newValue));
  };

  return (
    <ScoreContext.Provider value={{ score, setScore: updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error('useScore must be used within a ScoreProvider');
    }
    return context;
};