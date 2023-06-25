import Image from "next/image"
import { Quicksand } from 'next/font/google'
import Link from 'next/link'
//Logo
import Logo from '@/assets/react-quiz-logo.svg'
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
      <body className="bg-[#2b2737] p-4">
        <main className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}>
          <Link href='/'>
            <Image 
              className="h-[80px] sm:h-full cursor-pointer" 
              src={Logo} 
              alt="logo"
            />
          </Link>
          {children}
        </main>        
      </body>
    </html>
  )
}