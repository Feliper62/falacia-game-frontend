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
/*
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputTeste() {
    const [apelido, setApelido] = useState('');
    const router = useRouter();
  
      const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('https://falacia-game-backend-production.up.railway.app/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apelido }),
      });
      if (response.ok) {
        const user = await response.json();
        setApelidos([...apelidos, user.apelido]); // Adicionando o apelido à lista de apelidos
        setApelido(''); // Limpando o campo de input após a submissão
      } else {
        console.error('Failed to create user:', response.status);
      }
      console.log(apelido)
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
*/
/*
'use client'
import { api_usuarios } from '@/app/api/route';
export default function InputTeste(){
const handleSubmit = async (e) => {
 e.preventDefault();

 const { apelido } = e.target;

 try {
    const response = await api_usuarios.criar({
      apelido: api_usuarios.value,
      mentira: '',
      pontuacao: 1,
      voto: 1,
      tipo: 'JOGADOR',
      sessao: '8BXCF4',
    });

    console.log(response);
 } catch (error) {
    console.error(error);
 }
};

return (
 <form onSubmit={handleSubmit}>
    <input name="apelido" type="text" placeholder="Digite seu apelido" />
    <button type="submit">Enviar</button>
 </form>
);
}*/
'use client';
import { api_usuarios } from '@/app/api/route';
import React from 'react';

export default function Formulario() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      apelido: formData.get('apelido'),
      // Adicione outros campos do formulário, se houver
    };

    try {
      const response = await api_usuarios.criar({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        // Aqui você pode lidar com o sucesso do envio, redirecionamento, etc.
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="apelido" placeholder="Apelido" />
      {/* Adicione outros campos do formulário, se houver */}
      <button type="submit">Enviar</button>
    </form>
  );
}
