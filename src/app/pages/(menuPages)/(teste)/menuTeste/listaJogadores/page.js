
/*export default function TesteBack(){
    return (
    <>
      <Texto className={stylesTitulo.titulo} text='TESTE BACK-END' />
      <Button className={stylesButton.voltarButton} text="Criar Sala" href="host" id="host" />
    </>
    )
  }*/

'use client'
import api_client from '@/app/api/route'

import Texto from "@/app/components/Texto";
import stylesTitulo from "@/app/styles/Texto.module.css";
import CaixaDeTexto from '@/app/components/CaixaDeTexto';
import Button from '@/app/components/Button';
import voltarStyle from '@/app/styles/Button.module.css'
import stylesText from '@/app/styles/CaixaDeTexto.module.css'


export default async function TesteJogadores() {
  const usuarios = await api_client.get('https://falacia-game-backend-production.up.railway.app/usuarios', {cache:'no-store'});
  console.log(usuarios)
  const totalUsuarios = 8;
  // Criando um array de 8 espaços vazios
  const jogadoresPreenchidos = new Array(totalUsuarios).fill('Espaço Vazio');
  // Preenchendo o array de jogadores com os usuários existentes
  usuarios.forEach((usuario, index) => {
    if (index < totalUsuarios) {
      jogadoresPreenchidos[index] = usuario.apelido || 'Espaço Vazio';
    }
  });
  return (
    <>
    <Button className={voltarStyle.voltarButton} text='Voltar' href='/pages/menuTeste'/>
    <Texto className={stylesTitulo.titulo} text="TESTE BACK-END" />
    {jogadoresPreenchidos.map((apelido, index) => {
      const corFundo = apelido === 'Espaço Vazio' ? '#white' : '#39BA67';
      return (
        <CaixaDeTexto
          className={stylesText.caixaDeTextoDireita}
          style={{ backgroundColor: corFundo }}
          key={index}
          text={apelido}
        />
      );
    })}
  </>
  );
}
