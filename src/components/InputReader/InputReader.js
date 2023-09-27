import React, { useState } from 'react';
import styles from './InputReader.module.css';


function InputReader({addGuess}) {
  
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(guess);
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
      <input id='guessInput' type='text' 
        value={guess} onChange={(e) => handleChange(e.target.value)}
      required={true} minLength={5} maxLength={5}  />
    </form>
  );
}

export default InputReader;
