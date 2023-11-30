'use client';
//split code so that only leaf children are client components
import React, {useState, useEffect} from "react";

type playOptions = 'rock' | 'paper' | 'scissors';

export const Game = () => {
    const [userChoice, setUserChoice] = useState<playOptions | null>(null);
    const [computerChoice, setComputerChoice] = useState<playOptions | null>(null);
    const [gameResult, setGameResult] = useState<'You won' | 'You lost' | 'Draw'>();
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

    const resetGame = () => {
        setIsUserPlaying(false);
        setComputerChoice(null);
        setUserChoice(null);
        setGameResult(null);
    }

     const playUser = (choice: playOptions) => {
            setIsUserPlaying(true);
            setUserChoice(choice);
            const playComputerHandler = setTimeout(() => {
                playComputer();
            }, 100);

            return () => {
                clearTimeout(playComputerHandler);
            }
     };

     useEffect(() => {
         if (computerChoice && userChoice) {
            compareChoices();
         };
         const resetGameHandler = setTimeout(() => {
              resetGame();
         }, 3000);

         return () => {
               clearTimeout(resetGameHandler);
         }
     }, [userChoice, computerChoice]);



   return (
   <>
         <button disabled={isUserPlaying} type="button" name={"rock"} onClick={() => playUser("rock")}>Rock</button>
         <button disabled={isUserPlaying} type="button" name={"paper"} onClick={() => playUser("paper")}>Paper</button>
         <button disabled={isUserPlaying} type="button" name={"scissors"} onClick={() => playUser("scissors")}>Scissors</button>

         <div>User choice: {userChoice}</div>
         <div>Computer choice: {computerChoice}</div>
         <div>Game result: {gameResult}</div>
         <div>User score: {userScore}</div>
         <div>Computer score: {computerScore}</div>

   </>
  );
};
