import React from 'react';
import GridItem from '../GridItem/GridItem';
import styles from './Grid.module.css'

function Grid({cols, rows, guesses, answer}) {
  
  const colsArray = Array(cols).fill('x');
  const rowsArray = Array(rows).fill('3');
  
  function getStatus(rIndex, cIndex) {
    if ( guesses.length === 0 || guesses.length - rIndex <= 0  )  {
     //console.log(rIndex +" "+ cIndex  +"empty");
      return 'EMPTY';
    }
    if( (guesses[rIndex].value).charAt(cIndex) === answer.charAt(cIndex)) {
      //console.log(rIndex +" "+ cIndex  +"corret "+ (guesses[rIndex].value).charAt(cIndex) + " "+ answer.charAt(cIndex) );
      return "CORRECT";
    }
    else if( answer.indexOf((guesses[rIndex].value).charAt(cIndex)) >= 0 ){
      //console.log(rIndex +" "+ cIndex  +"half");
      return "HALF_CORRECT"
    }
    //console.log(rIndex +" "+ cIndex  +"wrong");
    return "WRONG";
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
