import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar/SideBar'
import Aside from '@/components/aside/Aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Social App',
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
        <meta name="description" content="x twitter social" />
        <link rel="icon" href="/x-icon.svg" />
      </head>
      <body className={inter.className}>
        <div className="flex justify-center w-full h-screen gap-0 lg:gap-4">
          <Sidebar />
          {children}
          <Aside />
        </div>

      </body>
    </html>
  )
}
