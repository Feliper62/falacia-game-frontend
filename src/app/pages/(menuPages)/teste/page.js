/*import Texto from "@/app/components/Texto"
import Button from "@/app/components/Button"
import stylesTitulo from '../../../styles/Texto.module.css'
import stylesButton from  '../../../styles/Button.module.css'

export default function TesteBack(){
    return (
    <>
      <Texto className={stylesTitulo.titulo} text='TESTE BACK-END' />
      <Button className={stylesButton.voltarButton} text="Criar Sala" href="host" id="host" />
    </>
    )
  }*/
"use client";
import Texto from "@/app/components/Texto";
import stylesTitulo from "../../../styles/Texto.module.css";

export default function TesteBack() {
  return (
    <>
      <Texto className={stylesTitulo.titulo} text="TESTE BACK-END" />
    </>
  );
}
