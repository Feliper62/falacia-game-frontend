import React from 'react';
// const TextoComum = ({ children}) => {
//     return (
//       <div className={styles.textoComum}>
//         {children}
//       </div>
//     );
//   };
  
//   export default TextoComum;



// Componente que aceita texto como propriedade e renderiza como JSX
export default function Texto({ className, text }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: text }}/>
}

