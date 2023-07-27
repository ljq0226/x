'use client'
import { Sidebar } from '@/components/sidebar/SideBar'
import Home from '@/components/home/Home'
import Aside from '@/components/aside/Aside'

export default function App() {
  return (
    <div className="flex justify-center w-full h-screen gap-0 lg:gap-4">
      <Sidebar />
      <Home />
      <Aside />

    </div>
  )
}
