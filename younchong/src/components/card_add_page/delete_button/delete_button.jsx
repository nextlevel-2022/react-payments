import React from 'react';
import styles from "./delete_button.module.css";

const DeleteButton = ({setNewCard, navigate}) => {
  const onClick = (e) => {
    e.preventDefault();
    setNewCard(null);
    navigate("/list");
  }
  return (
    <button className={styles.button} onClick={onClick}>
      X
    </button>
  );
};

export default DeleteButton;