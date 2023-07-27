import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'clsx'
import type { NavLink } from './data'
import { HeroIcon } from '@/components/ui/HeroIcon'
import useTranslate from '@/hooks/useTranslate'

type SidebarLinkProps = NavLink & {
  username?: string
}
function SideBarLink({
  href,
  username,
  iconName,
  linkName,
  disabled,
  canBeHidden,
}: SidebarLinkProps) {
  const asPath = usePathname()
  const isActive = false
  const t = useTranslate()
  return (
    <Link href={href}>
      <div
        className={cn(
          'flex group py-1 outline-none',
          // canBeHidden ? 'hidden xs:flex' : 'flex',
          disabled && 'cursor-not-allowed',
        )}
      // onClick={disabled ? preventBubbling() : undefined}
      >
        <div
          className={cn(
            `custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
            duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
            group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
            dark:group-focus-visible:ring-white xs:p-3 xl:pr-5`,
            isActive && 'font-bold',
          )}
        >
          <HeroIcon
            className={cn(
              'h-7 w-7',
              isActive
              && ['Explore', 'Lists'].includes(linkName)
              && 'stroke-white',
            )}
            iconName={iconName}
            solid={isActive}
          />
          <p className='hidden xl:block'>{t(linkName)}</p>
        </div>
      </div>
    </Link>
  )
}

export default SideBarLink
