import React from 'react';
import styles from './GameMessage.module.css'

function GameMessage({gameStatus , guesses}) {
  return (
    <div className={ `${gameStatus == 'WON' ? styles.won:''} ${gameStatus == 'LOST' ? styles.lost:''} ${styles.wrapper}  ${gameStatus != 'PLAYING' ? styles.show:''} ` }>
      {
        gameStatus == 'WON' ? `Congratulations! You won in ${guesses.length } guess${guesses.length >1?'es':''} `: 'You lost'
      }
    </div>
  );
}

export default GameMessage;
