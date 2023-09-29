import React from 'react';
import styles from './GridItem.module.css'

function GridItem({children, status, gameStatus}) {

  function getStyle(status) {
    if( status === 'CORRECT')
      return styles.green;
    if( status === 'HALF_CORRECT')
      return styles.gray;
      if( status === 'WRONG')
      return styles.red ;
    return styles.empty;
  }

  function getRotateStyle(gameStatus, status) {
   console.log(status)
    return gameStatus === 'WON' &&  status=== 'CORRECT' ? styles.rotate : '';
  }


  return (
    <div className={styles.wrapper}>
    <div className={`${styles.item} ${getStyle(status)}  ` } >
      
      <div className={styles.back}>
        {children}
      </div>
      <div className={styles.front}>
         {children}
      </div>
    </div>
    </div>
  );
}

export default GridItem;
