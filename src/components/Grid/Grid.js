import React from 'react';
import GridItem from '../GridItem/GridItem';
import styles from './Grid.module.css'

function Grid({cols, rows, guesses, answer}) {
  
  const colsArray = Array(cols).fill('x');
  const rowsArray = Array(rows).fill('3');
  
  function getStatus(rIndex, cIndex) {
    if ( guesses.length === 0 || guesses.length - rIndex <= 0  ) 
      return 'WRONG';
    if( (guesses[rIndex].value).charAt(cIndex) === answer.charAt(cIndex))
      return "CORRECT";
    return "HALF_CORRECT";
  }

  return (
    
  <div className={styles.gridWrapper}>
      
      {
        
        rowsArray.map( (r, rIndex) => (
          <div key={rIndex} className={styles.row}>
            {
              colsArray.map( (c, cIndex) => (
                <GridItem key={cIndex} status={getStatus(rIndex, cIndex)}>
                  { (guesses.length >= 0 && guesses.length - rIndex > 0  ) && (guesses[rIndex].value).charAt(cIndex)} 
                </GridItem> 
              ))
            }
          </div>
        ))
      }
      
  </div>
  );
}

export default Grid;
