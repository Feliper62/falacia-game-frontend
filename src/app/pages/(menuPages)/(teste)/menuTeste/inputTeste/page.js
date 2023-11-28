/*import Texto from "@/app/components/Texto"
import Button from "@/app/components/Button"
import InputText from "@/app/components/InputText"
import styles from '@/app/styles/Texto.module.css'
import voltarStyle from '@/app/styles/Button.module.css'

export default function InputTeste(){
    return (
        <>
        <Button className={voltarStyle.voltarButton} text='Voltar' href='/pages/menuTeste'/>
        <Texto className={styles.titulo} text='teste de input backend'></Texto>
        <InputText text="Digite o Apelido:" placeholder="Digite seu apelido"/>
        </>
    )
};*/

'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputTeste() {
    const [apelido, setApelido] = useState('');
    const router = useRouter();
  
    const handleSubmit = async () => {
      const response = await fetch('https://falacia-game-backend-production.up.railway.app/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apelido }),
      });
      console.log(response)
  
      if (response.ok) {
        // Se a requisição foi bem-sucedida, navegue para a tela de jogadores
        router.push('pages/menuTeste/listaJogadores');
      } else {
        console.error('Erro ao criar usuário');
      }
    };

    return (
    
    <>
    <form onSubmit={handleSubmit}>
        <label>
          Digite o Apelido:
          <input type="text" value={apelido} onChange={(e) => setApelido(e.target.value)} />
        </label>
        <button type="submit">Submeter</button>
      </form>
    </>
      
    );
  }

  