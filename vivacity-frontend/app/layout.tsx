import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Gorriceta',
  description: 'A FullStack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="./icon.png"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
