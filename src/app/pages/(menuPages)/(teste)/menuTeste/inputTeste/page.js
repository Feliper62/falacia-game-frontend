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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api_usuarios } from '@/app/api/route';

export default function InputTeste(){
  const [apelido, setApelido] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await api_usuarios.criar({
        apelido: apelido,
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
  <form onSubmit={handleSubmit}>
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
}*/

/*import axios from 'axios';

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
}

// Obtenha o valor do apelido a partir da entrada do usuário no Node.js
const apelidoUsuario = readlineSync.question('Digite o apelido do usuário:');

cadastroUsuario(apelidoUsuario, 'é verdade ?', 0, '1', 'JOGADOR', 'NILJG8');*/
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function CadastroUsuarioForm() {
  const [dadosFormulario, setDadosFormulario] = useState({
    apelido: ' ',
    mentira: 'é verdade ?',
    pontuacao: 0,
    voto: '1',
    tipo: 'JOGADOR',
    sessao: 'NILJG8',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Tratando o submit do formulário. Dados:', dadosFormulario);

      // Chamar a função cadastroUsuario passando os dados do formulário
      await cadastroUsuario(
        dadosFormulario.apelido,
        dadosFormulario.mentira,
        dadosFormulario.pontuacao,
        dadosFormulario.voto,
        dadosFormulario.tipo,
        dadosFormulario.sessao
      );

      // Outras ações após o envio bem-sucedido, se necessário

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Apelido:
          <input
            type="text"
            name="apelido"
            value={dadosFormulario.apelido}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar Cadastro</button>
      </form>
    </div>
  );
}

async function cadastroUsuario(apelido, mentira, pontuacao, voto, tipo, sessao) {
  try {
    const response = await axios.post(
      'https://falacia-game-backend-production.up.railway.app/usuarios/',
      {
        apelido,
        mentira,
        pontuacao,
        voto,
        tipo,
        sessao,
      }
    );
    console.log('Dados enviados com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
  }
}
