import React from 'react';

const Button = ({ text,className, href, id }) => {
  return (
    <a className={className} href={href} id={id}>
      {text}
    </a>
  );
};

export default Button;
