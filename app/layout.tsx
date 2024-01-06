import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/app/_components/Nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Nav/>
      <div className='p-5 container mx-auto'>
        {children}
      </div>
      {/*<style jsx global>{`
        .btn-yellow{
          color:yellow
        }
      `}</style>*/}
      </body>
      </html>
  )
}
