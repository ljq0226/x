'use client'
import SidebarLink from './SideBarLink'
import { NavLinks } from './data'
import SideBarProfile from './SideBarProfile'
import useTranslate from '@/hooks/useI18n'
import useModal from '@/hooks/useModal'

export function Sidebar(): JSX.Element {
  const isMobile = false
  const t = useTranslate()

  const username = 'Lumos'
  const { setIsModalOpen } = useModal()
  const showModal = () => {
    setIsModalOpen(true)
  }
  return (
    <header className='flex '>
      <div className="">
        {
          NavLinks.map(linkData =>
            <SidebarLink {...linkData} key={linkData.href} />,
          )
        }
        <div className="flex-1"></div>
        <SideBarProfile />
      </div>

    </header>
  )
}
