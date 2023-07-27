'use client'
import { Button } from '../ui/Button'
import { CustomIcon } from '../ui/CustomIcon'
import SidebarLink from './SideBarLink'
import { NavLinks } from './data'
import SideBarProfile from './SideBarProfile'
import useTranslate from '@/hooks/useTranslate'

// import { MoreSettings } from './more-settings'

export function Sidebar(): JSX.Element {
  const isMobile = false
  const t = useTranslate()

  const username = 'Lumos'

  return (
    <header className='flex'>
      <div className="z-10 flex flex-col justify-between w-full py-0 border-t border-light-border dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">
        <CustomIcon className='ml-2 h-7 w-7' iconName='TwitterIcon' />
        {
          NavLinks.map(linkData =>
            <SidebarLink {...linkData} key={linkData.href} />,
          )
        }
        <Button
          className='w-10 text-lg font-bold text-white transition outline-none accent-tab right-4 bg-main-accent hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12'
        >
          <div className='block w-6 h-6 rounded-full xl:hidden flex-center'>
            <CustomIcon
              className=''
              iconName='FeatherIcon'
            />
          </div>

          <p className='hidden xl:block'>{t('Tweet')}</p>
        </Button>
        <div className="flex-1"></div>
        <SideBarProfile />
      </div>

    </header>
  )
}
