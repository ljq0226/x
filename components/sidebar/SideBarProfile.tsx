import React from 'react'
import { HeroIcon } from '../ui/HeroIcon'

function SideBarProfile() {
  const username = 'Lumos'
  const aliasName = '@luorom001'
  const style = {
    transform: 'translateY(-15px)',
  }
  return (
    <div
      className='flex w-full p-2 rounded-full hover:bg-light-primary/10 dark:hover:bg-dark-primary/10'
      style={style}
    >
      <div className='flex flex-center'>
        <img className='w-6 h-6' src="x.svg" alt="" />
      </div>
      <div className="flex flex-col mx-2">
        <p>{username}</p>
        <p>{aliasName}</p>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-center">
        <HeroIcon
          className='hidden w-6 h-6 xl:block'
          iconName='EllipsisHorizontalIcon'
        />
      </div>

    </div>
  )
}

export default SideBarProfile
