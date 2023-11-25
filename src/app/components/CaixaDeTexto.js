import Link from 'next/link';
import React from 'react';

export default function CaixaDeTexto({ className, text, style }) {
    return <div className={className} style={style}>{text}</div>
  }