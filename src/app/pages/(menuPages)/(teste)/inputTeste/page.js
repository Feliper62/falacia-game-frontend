import Texto from "@/app/components/Texto"
import Button from "@/app/components/Button"
import styles from '@/app/styles/Texto.module.css'
import voltarStyle from '@/app/styles/Button.module.css'


export default function InputTeste(){
    return (
        <>
        <Button className={voltarStyle.voltarButton} text='Voltar' href='menuTeste'/>
        <Texto className={styles.titulo} text='teste de input backend'></Texto>
        <Texto text='alo'></Texto>
        </>
    )
};