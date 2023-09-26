import React from 'react';
import Texto from '@/app/components/Texto';
import styles from '../../../styles/Texto.module.css'

export default function Testes() {
    return (
        <div>
            <h1>Exemplo de Renderização de HTML</h1>
            {/* Usando o componente HTMLText para renderizar texto com tags HTML */}
            <Texto className={styles.textoComum} text="<p>Este é um parágrafo.</p><br/><p>Outro parágrafo.</p>" />


        </div>
    );
}
