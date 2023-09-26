import React from 'react';
import styles from '../styles/Button.module.css'; // Importe os estilos do CSS aqui

// O componente Button aceita props como text, href e id
const Button = ({ text,className, href, id }) => {
  return (
    <a className={className} href={href} id={id}>
      {text}
    </a>
  );
};

export default Button;
