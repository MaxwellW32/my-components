import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AtomLoader from './utility/AtomLoader'
import NavClientWrapper from './utility/NavClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All MyComponents',
  description: 'Created By Max',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AtomLoader />
        <NavClientWrapper />
        {children}
      </body>
    </html>
  )
}
