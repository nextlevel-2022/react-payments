import React from 'react';
import styles from './card_number_input.module.css';

const Dash = ({id, numbers}) => {
  
  function getVisible(id, numbers) {
    if (numbers.hasOwnProperty(id) && numbers[id].length === 4) {
      return styles.visible;
    } else {
      return styles.hidden;
    }
  }

  return (
    <span className={`${styles.inputBar} ${getVisible(id, numbers)}`} >-</span>
  );
};

export default Dash;