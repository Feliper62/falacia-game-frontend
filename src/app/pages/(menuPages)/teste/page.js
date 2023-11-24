
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

export default async function TesteBack() {
  const usuarios = await api_client.get('http://127.0.0.1:8000/usuarios/');
  console.log(usuarios)
  return (
    <>
      <Texto className={stylesTitulo.titulo} text="TESTE BACK-END" />
      <p>{usuarios.map((usuario) => 
      <li key={usuario.id}>
        {usuario.apelido}
      </li>
        
        
        )}</p>
      
    </>
  );
}
