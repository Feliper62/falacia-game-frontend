import Link from 'next/link';
import React from 'react';

const IconButton = ({ text, className, href, id, icon }) => {
    return (
      <Link href={href} className={className} id={id}>
          {icon && <span className="icon">{icon}</span>} {text}
      </Link>
    );
  };
  
  export default IconButton;