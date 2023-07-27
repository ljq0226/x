import type { IconName } from '../ui/HeroIcon'

export interface NavLink {
  href: string
  linkName: string
  iconName: IconName
  disabled?: boolean
  canBeHidden?: boolean
}

export const NavLinks: Readonly<NavLink[]> = [
  {
    href: '/home',
    linkName: 'Home',
    iconName: 'HomeIcon',
  },
  {
    href: '/explore',
    linkName: 'Explore',
    iconName: 'HashtagIcon',
    canBeHidden: true,
  },
  {
    href: '/notifications',
    linkName: 'Notifications',
    iconName: 'BellIcon',
  },
  {
    href: '/messages',
    linkName: 'Messages',
    iconName: 'EnvelopeIcon',
  },
  {
    href: '/bookmarks',
    linkName: 'Bookmarks',
    iconName: 'BookmarkIcon',
    canBeHidden: true,
  },
  {
    href: '/lists',
    linkName: 'Lists',
    iconName: 'Bars3BottomLeftIcon',
    canBeHidden: true,
  },
]
