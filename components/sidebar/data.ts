export interface NavLink {
  href: string
  linkName: string
  iconName: string
  disabled?: boolean
  canBeHidden?: boolean
  addPadding?: boolean
}

export const NavLinks: Readonly<NavLink[]> = [
  {
    href: '/home',
    linkName: 'nav.home',
    iconName: 'ri:home-5-line',
  },
  {
    href: '/notifications',
    linkName: 'nav.notifications',
    iconName: 'ri:notification-4-line',
  },
  {
    href: '/conversations',
    linkName: 'nav.conversations',
    iconName: 'ri:at-line',
  },
  {
    href: '/favorites',
    linkName: 'nav.favourites',
    iconName: 'ri:star-line',
  },
  {
    href: '/bookmarks',
    linkName: 'nav.bookmarks',
    iconName: 'ri:bookmark-line',
  },
  {
    href: '/compose',
    linkName: 'nav.compose',
    iconName: 'ri:quill-pen-line',
    addPadding: true,
  },
  {
    href: '/explore',
    linkName: 'nav.explore',
    iconName: 'line-md:hash-small',
    canBeHidden: true,
  },
  {
    href: '/lists',
    linkName: 'nav.lists',
    iconName: 'ri:list-unordered',
    canBeHidden: true,
  },
  {
    href: '/settings',
    linkName: 'nav.settings',
    iconName: 'ri:settings-3-line',
    addPadding: true,
  },
]
