import './globals.css'

import Texto from './components/Texto'
import styles from './styles/Texto.module.css'
import { IoBedOutline } from 'react-icons/io5'


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      <body>
      <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Karantina' rel='stylesheet'></link>
      {children}
      <footer><Texto className={styles.footer} text="
               LoboGuará Games &copy; 2023"/>
       </footer>
       </body>
       
       </html>
      
         
    </>
      
  )
      
  
}
