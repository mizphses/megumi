'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import style from './index.module.scss'
import { IconClose, IconMenu } from '../../../components/Icons/generated'

type MenuContent = {
  title: string
  link: string
  icon?: React.ReactNode
}

type NavbarProps = {
  showContent?: boolean
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const { showContent } = props

  const menuContent: MenuContent[] = [
    {
      title: 'ホーム',
      link: '/',
    },
  ]

  return (
    <>
      <div className={style.wrap}>
        <div className={style.inde}>
          <Link href="/" className={style.logo}>
            <h1>Title</h1>
          </Link>
          <nav className={style.menuItems}>
            <div className={style.invisibleOnMob}>
              {menuContent.map((menu, index) => {
                return (
                  <Link href={menu.link} key={index} className={style.topLink}>
                    <div className={style.topItem}>
                      {menu.icon}
                      <span>{menu.title}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
            <button
              className={clsx(style.topLink, isOpenMenu && style.active)}
              onClick={handleToggleMenu}
            >
              <div className={style.topItem}>
                {isOpenMenu ? <IconClose size={20} /> : <IconMenu size={20} />}
                <span>メニュー</span>
              </div>
            </button>
          </nav>
        </div>
      </div>
      {isOpenMenu && (
        <div>
          <PopupInde menuContent={menuContent} buttonClick={handleToggleMenu} />
        </div>
      )}
      {showContent && <div className={style.inter} />}
    </>
  )
}

type DetailedMenuProps = {
  menuContent: MenuContent[]
  buttonClick: () => void
}

const PopupInde: React.FC<DetailedMenuProps> = (props) => {
  const { menuContent } = props
  return (
    <div className={style.popWrap}>
      <div className={style.popInde}>
        {menuContent.map((menu, index) => {
          return (
            <Link
              href={menu.link}
              key={index}
              className={style.topLink}
              onClick={props.buttonClick}
            >
              <div>
                {menu.icon}
                <span>{menu.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
