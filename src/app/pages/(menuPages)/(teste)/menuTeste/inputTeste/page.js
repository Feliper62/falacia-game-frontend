import Texto from "@/app/components/Texto"
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
};