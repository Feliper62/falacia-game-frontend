import Link from 'next/link';
import React from 'react';

export default function CaixaDeTexto({ className, text }) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: text }}/>
  }