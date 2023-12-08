// "use client";

import {Score} from './score';

export const Header = () => {
   return (
         <header className="flex p-6 max-w-2xl w-full rounded-lg border glitter-border relative justify-between">
            <h1 className="flex flex-col leading-tight font-extrabold text-2xl">
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </h1>
            <Score />
         </header>
  );
};
