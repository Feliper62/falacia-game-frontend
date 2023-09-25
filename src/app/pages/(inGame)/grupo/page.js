import Button from "@/app/components/Button"
import Titulo from "@/app/components/Titulo"
import CaixaTexto from '../../../components/CaixaTexto'

export default function Grupo(){
    return (
    <>
      <inGameLayout>
      <Titulo text='falácia'></Titulo>
        </inGameLayout>
      
    </>
    )
  }
  Grupo.getLayout = function getLayout(page) {
    return <inGameLayout>{page}</inGameLayout>; // Substitua 'RootLayout' pelo seu layout personalizado, se necessário
  };