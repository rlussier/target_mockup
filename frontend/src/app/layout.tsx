import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar'
import  Banner  from './components/Banner'
import  Footer  from './components/Footer/Footer'
import  Subfooter  from './components/Footer/Subfooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Target Mockup',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
        <Subfooter />
      </body>
    </html>
  )
}