import Link from 'next/link';
import React from 'react';

const Button = ({ text,className, href, id }) => {
  return (
    <Link className={className} href={href} id={id}>
      {text}
    </Link>
  );
};

export default Button;
