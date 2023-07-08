import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hafiedz Mada',
  description: 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen mx-52 my-10 ${inter.className}`}>{children}</body>
    </html>
  )
}
