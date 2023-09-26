import './globals.css'
import styles from './styles/Texto.module.css'
import Texto from './components/Texto'

export default function RootLayout({ children }) {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Karantina' rel='stylesheet'></link>
      <html lang="pt-br"/>
      
          
          {children}
       
        
        <Texto className={styles.footer} text="
                LoboGuará Games &copy; 2023"/>
    </>
      
  )
      
  
}
