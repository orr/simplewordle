import React from 'react';
import styles from './GridItem.module.css'

function GridItem({children, status}) {

  function getStyle(status) {
    if( status === 'CORRECT')
      return styles.green;
    if( status === 'HALF_CORRECT')
      return styles.gray;
      if( status === 'WRONG')
      return styles.red;
    return styles.empty;
  }

  return (
    <div className={`${styles.item} ${getStyle(status)}` } >
      {children}
    </div>
  );
}

export default GridItem;
