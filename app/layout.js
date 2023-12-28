import Header from '@/components/HeaderMain'
import './globals.css'
import { Inter } from 'next/font/google'
import HeaderMain from '@/components/HeaderMain'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tungteiya Dahamani Foundation',
  description: 'This is about the Tung Teiya Dahamani Foundation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <HeaderMain />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
