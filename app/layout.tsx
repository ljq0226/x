import '@/styles/globals.css'
import '@/lib'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <head>
        <title>X</title>
        <meta name="description" content="x twitter social" />
        <link rel="icon" href="/x-icon.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
