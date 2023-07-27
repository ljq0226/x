import {
  Bars3BottomLeftIcon,
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import {
  Bars3BottomLeftIcon as Bars3BottomLeftIconSolid,
  BellIcon as BellIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  EllipsisHorizontalIcon as EllipsisHorizontalIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  HashtagIcon as HashtagIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from '@heroicons/react/24/solid'

export type IconName = 'EllipsisHorizontalIcon' | 'HomeIcon' | 'UserIcon' | 'HashtagIcon' | 'EnvelopeIcon' | 'Bars3BottomLeftIcon' | 'BellIcon' | 'BookmarkIcon'
const SolidIcons = {
  HomeIcon: HomeIconSolid,
  HashtagIcon: HashtagIconSolid,
  EnvelopeIcon: EnvelopeIconSolid,
  BellIcon: BellIconSolid,
  BookmarkIcon: BookmarkIconSolid,
  UserIcon: UserIconSolid,
  Bars3BottomLeftIcon: Bars3BottomLeftIconSolid,
  EllipsisHorizontalIcon: EllipsisHorizontalIconSolid,
}
const OutlineIcons = {
  HomeIcon,
  UserIcon,
  HashtagIcon,
  EnvelopeIcon,
  BellIcon,
  BookmarkIcon,
  Bars3BottomLeftIcon,
  EllipsisHorizontalIcon,
}
interface HeroIconProps {
  solid?: boolean
  iconName: IconName
  className?: string
}

export function HeroIcon({
  solid,
  iconName,
  className,
}: HeroIconProps): JSX.Element {
  const Icon = solid ? SolidIcons[iconName] : OutlineIcons[iconName]

  return <Icon className={className ?? 'h-6 w-6'} />
}
