
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
      <html lang="pt-br"/>
      
       <div>
          {children}
        </div>
        <Footer/>
    </>
      
  )
      
  
}
