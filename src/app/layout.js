
import Footer from './components/Footer'
import './globals.css'


/*import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tela Inicial',
  description: 'Generated by create next app',
}*/
import Titulo from './components/Titulo'

export default function RootLayout({ children }) {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Karantina' rel='stylesheet'></link>
      <html lang="pt-br"/>
      
          
          {children}
       
        
        <Footer/>
    </>
      
  )
      
  
}
