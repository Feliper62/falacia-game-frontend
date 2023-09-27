import './globals.css'

import Texto from './components/Texto'
import styles from './styles/Texto.module.css'


export default function RootLayout({ children }) {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Karantina' rel='stylesheet'></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <html lang="pt-br"/>
      {children}
      
        
       <footer><Texto className={styles.footer} text="
               LoboGuará Games &copy; 2023"/>
           </footer>
          
    </>
      
  )
      
  
}
