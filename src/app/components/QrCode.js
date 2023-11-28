import React from 'react';
import QRCode from 'react-qr-code';

const QrCode = ({ className, titulo, text, url }) => {
    return (
      <div className={className}>
      <h1>{titulo}</h1>
      <div className={className}><QRCode className={className} value={url} /></div>
      <p>{text}</p>
      </div>
    );
  };
  
  export default QrCode;
