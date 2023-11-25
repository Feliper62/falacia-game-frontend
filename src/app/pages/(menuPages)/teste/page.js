
/*export default function TesteBack(){
    return (
    <>
      <Texto className={stylesTitulo.titulo} text='TESTE BACK-END' />
      <Button className={stylesButton.voltarButton} text="Criar Sala" href="host" id="host" />
    </>
    )
  }*/

import api_client from '../../../api/route'

import Texto from "@/app/components/Texto";
import stylesTitulo from "../../../styles/Texto.module.css";
import CaixaDeTexto from '@/app/components/CaixaDeTexto';
import stylesText from '../../../styles/CaixaDeTexto.module.css'

export default async function TesteBack() {
  const usuarios = await api_client.get('http://127.0.0.1:8000/usuarios/');
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
    /*<>
      <Texto className={stylesTitulo.titulo} text="TESTE BACK-END" />
      {usuarios.map((usuario) => 

      
      <CaixaDeTexto className={stylesCaixa.caixaDeTextoDireita} 
      key={usuario.id}>
        {usuario.apelido}
      </CaixaDeTexto>
        
        
        )}
      
    </>*/
    <>
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
