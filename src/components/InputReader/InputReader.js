import React, { useState } from 'react';
import styles from './InputReader.module.css';


function InputReader({addGuess, gameStatus, children}) {
  
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(guess.toUpperCase());
    setGuess('');
  }

  function handleChange(text) {
    setGuess(text.replace(/[^a-zA-Z]/g,''));
  }
  
  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='guessInput'>
        Enter Guess:
      </label>
      <input id='guessInput' type='text' autoFocus 
        value={guess} onChange={(e) => handleChange(e.target.value)}
      required={true}  maxLength={5}  minLength={5}
        disabled={gameStatus !== 'PLAYING'}
      />
      {children}
    </form>
  );
}

export default InputReader;
