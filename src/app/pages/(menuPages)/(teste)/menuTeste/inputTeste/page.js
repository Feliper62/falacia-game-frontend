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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api_usuarios } from '@/app/api/route';

export default function InputTeste(){
  const [apelido, setApelido] = useState('');
  const router = useRouter();
  const handleSubmit = async (event, nickname) => {
  event.preventDefault();
  try {
      console.log('SEU APELIDO: '+ nickname);
      const response = await api_usuarios.criar({
        apelido: nickname,
        mentira: "mentira",
        pontuacao: 0,
        voto: "1",
        tipo: 'JOGADOR',
        sessao: 'NILJG8',
      });

      console.log(response);
      router.push('/pages/menuTeste/listaJogadores')
  } catch (error) {
      console.error(error);
  }
};

return (
  <form onSubmit={(e) => handleSubmit(e, apelido)}>
    <label>
      Digite seu apelido:
      <input
        type="text"
        value={apelido}
        onChange={(e) => setApelido(e.target.value)}
        placeholder="Seu apelido"
      />
    </label>
    <button type="submit">Registrar Apelido</button>
  </form>
);
}
/*
import axios from 'axios';

export default async function cadastroUsuario(apelido, mentira, pontuacao, voto, tipo, sessao) {
    try {
        const response = await axios.post('https://falacia-game-backend-production.up.railway.app/usuarios/', {
          apelido,
          mentira,
          pontuacao,
          voto,
          tipo,
          sessao,
        });
        console.log('Dados enviados com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
    }
} 
cadastroUsuario('exemplojogador765', 'é verdade ?', 0, '1', 'JOGADOR', 'NILJG8');*/
/*
import axios from 'axios';
import readlineSync from 'readline-sync';

export default async function cadastroUsuario(apelido, mentira, pontuacao, voto, tipo, sessao) {
    try {
        const response = await axios.post('https://falacia-game-backend-production.up.railway.app/usuarios/', {
          apelido,
          mentira,
          pontuacao,
          voto,
          tipo,
          sessao,
        });
        console.log('Dados enviados com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
    }
}*/
