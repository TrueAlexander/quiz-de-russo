import Image from "next/image"
import { Quicksand } from 'next/font/google'
import Link from 'next/link'
//Logo
import Logo from '@/assets/logo.png'
import "./globals.css"

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export const metadata = {
  title: 'Quiz do idioma Russo',
  description: 'Quiz do idioma russo. Bora praticar!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#2b2737] p-4 h-screen">
        <main className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center h-full`}>
          <Link href='/' className="h-[125px] flex-none">
            <div className="h-full w-[125px]  flex-none  cursor-pointer  rounded-[50%] bg-gradient-radial from-[#dcddd8]  to-[#9f50ac] border-4 border-[#9f50ac]">
              <Image 
                className="" 
                src={Logo} 
                alt="logo"
              />
            </div>     
          </Link>
          {children}
          <p className='text-white mt-7 p-4 text-[12px] flex-none'>
            Criado por <a href="https://www.eformaliza.com/" target="_blank" >e-Formaliza</a>
          </p>
        </main>        
      </body>
    </html>
  )
}