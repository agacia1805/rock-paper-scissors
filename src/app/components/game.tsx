"use client";

import React, {useState, useEffect, useMemo} from "react";
import  useLocalStorage from '../hooks/useLocalStorage';
import {PlayOption} from './playOption';
import {GamePlayed} from './gamePlayed';
import { motion } from 'framer-motion';

type playOptions = 'rock' | 'paper' | 'scissors';

export const Game = () => {
    const [userChoice, setUserChoice] = useState<playOptions | null>(null);
    const [computerChoice, setComputerChoice] = useState<playOptions | null>(null);
    const [gameResult, setGameResult] = useState<'You won' | 'You lost' | 'Draw' | null>(null);
    const [isUserPlaying, setIsUserPlaying] = useState<boolean>(false);
    const [userScore, setUserScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);

    const playOptions: playOptions[] = ["rock", "paper", "scissors"];

    const playComputer = () => {
        const randomOption = playOptions[(Math.floor(Math.random() * playOptions.length))];
        setComputerChoice(randomOption);
    }

    const compareChoices = () => {
        if (!userChoice || !computerChoice) return null;

        switch(userChoice) {
            case "rock":
                if(computerChoice === "paper") {
                    setGameResult('You lost');
                    setComputerScore((prevScore) => prevScore + 1);
                } else if (computerChoice === "scissors") {
                    setGameResult('You won');
                    setUserScore((prevScore) => prevScore + 1);
                } else {
                    setGameResult('Draw');
                }
                break;
            case "paper":
                if(computerChoice === "scissors") {
                    setGameResult('You lost');
                    setComputerScore((prevScore) => prevScore + 1);
                } else if (computerChoice === "rock") {
                    setGameResult('You won');
                    setUserScore((prevScore) => prevScore + 1);
                } else {
                    setGameResult('Draw');
                }
                break;
            case "scissors":
                if(computerChoice === "rock") {
                    setGameResult('You lost');
                    setComputerScore((prevScore) => prevScore + 1);
                } else if (computerChoice === "paper") {
                    setGameResult('You won');
                    setUserScore((prevScore) => prevScore + 1);
                } else {
                    setGameResult('Draw');
                }
                break;
            default: break;
        }
    }

     const playUser = (choice: playOptions) => {
            setIsUserPlaying(true);
            setUserChoice(choice);
            const playComputerHandler = setTimeout(() => {
                playComputer();
            }, 1500);

            return () => {
                clearTimeout(playComputerHandler);
            }
     };

    const resetGame = () => {
        setIsUserPlaying(false);
        setComputerChoice(null);
        setUserChoice(null);
        setGameResult(null);
    }

     useEffect(() => {
         if (computerChoice && userChoice) {
            compareChoices();
         };
     }, [userChoice, computerChoice]);


   return (
         <div className="grid grid-rows-2 place-items-center gap-10 md:gap-32">
            { userChoice ?
                <GamePlayed userChoice={userChoice} computerChoice={computerChoice} gameResult={gameResult} onClick={() => resetGame()}/>
                :
                (
                <>
                 <PlayOption disabled={isUserPlaying} name={"rock"} onClick={() => playUser("rock")} />
                 <PlayOption disabled={isUserPlaying} name={"paper"} onClick={() => playUser("paper")} />
                 <PlayOption disabled={isUserPlaying} name={"scissors"} onClick={() => playUser("scissors")} className="row-start-2 col-start-1 col-span-2" />
                </>
                )
            }
         </div>
  );
};
