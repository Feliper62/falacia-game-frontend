import React from 'react';
import styles from '../styles/Button.module.css'; // Importe os estilos do CSS aqui

// O componente Button aceita props como text, href e id
const Button = ({ text, href, id }) => {
  return (
    <a className={styles.Button} href={href} id={id}>
      {text}
    </a>
  );
};

export default Button;
