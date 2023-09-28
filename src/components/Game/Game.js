import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputReader from '../InputReader/InputReader';
import Grid from '../Grid/Grid';
import GameMessage from '../GameMessage/GameMessage';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info( answer );

function Game() {
  
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('PLAYING')
  
  function addGuess(guess) {
    if( guesses.length < 6 ) {
      let newGuess = {id: Math.random(), value: guess};
      setGuesses(oldArray => [...guesses, newGuess]);
      if( answer === guess )
        setGameStatus('WON');
      else if( guesses.length === 5)
        setGameStatus('LOST');
    } 
  }

  return <>
  
  <Grid cols={5} rows={6} guesses={guesses} answer={answer}/>
  
  
    <InputReader addGuess={addGuess} gameStatus={gameStatus}>
     <GameMessage gameStatus={gameStatus} guesses={guesses }/>
    </InputReader>
  </>;
}

export default Game;
