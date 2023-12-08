"use client";

import {useEffect} from "react";
import { useScore } from './scoreProvider';

export const Score = () => {
    const { score } = useScore();

   return (
       <div className="border glitter-border rounded-lg px-4 py-2 flex flex-col justify-center items-center bg-pink-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
           <p className="font-semibold text-xl">Score</p>
           <p className="font-extrabold text-2xl">{score}</p>
       </div>
  );
};
