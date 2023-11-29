'use client';
//split code so that only leave children are client components
import React, {useState} from "react";

type playOptions = 'rock' | 'paper' | 'scissors';

export const Game = () => {
    const [userChoice, setUserChoice] = useState<playOptions>();
    const [computerChoice, setComputerChoice] = useState<playOptions | null>(null);
    const [gameResult, setGameResult] = useState<'You won' | 'You lost' | 'Draw'>();
    const playOptions: playOptions[] = ["rock", "paper", "scissors"];

    const playComputer = () => {
        const randomOption = playOptions[(Math.floor(Math.random() * playOptions.length))];
        setComputerChoice(randomOption);
    }

    const compareChoices = () => {
        if (!userChoice) return null;

        switch(userChoice) {

        case "rock":
            if(computerChoice === "paper") {
                setGameResult('You lost');
            } else if (computerChoice === "scissors") {
                setGameResult('You won');
            } else {
                setGameResult('Draw');
            }
        case "paper":
            if(computerChoice === "scissors") {
                setGameResult('You lost');
            } else if (computerChoice === "rock") {
                setGameResult('You won');
            } else {
                setGameResult('Draw');
            }
        case "scissors":
            if(computerChoice === "paper") {
                setGameResult('You lost');
            } else if (computerChoice === "scissors") {
                setGameResult('You won');
            } else {
                setGameResult('Draw');
            }
        break;
        default: break;
        }
    }


   return (
   <>
         <button onClick={playComputer}>Click me button play computer</button>
         <button onClick={setUserChoice("rock")}>Rock</button>
         <button onClick={setUserChoice("paper")}>Paper</button>
         <button onClick={setUserChoice("scissors")}>Scissors</button>

         <div>{computerChoice}</div>
         <div>{gameResult}</div>

         </>
  );
};
