import styles from './NavBar.module.css'
import { Menu, User, Plus } from 'lucide-react'
import { Action } from './Action'

export const NavBar = () => {
  const actionsMobile = [
    {
      id: 1,
      icon: <Menu />,
      subMenu: [
        {
          title: 'Category',
          routes: [
            {
              id: 1,
              title: 'GYPHI Studios',
            },
            {
              id: 2,
              title: 'Animals',
            },
            {
              id: 3,
              title: 'Artists',
            },
          ],
        },
        {
          title: 'Stickers',
          routes: [
            {
              id: 1,
              title: 'Originals',
            },
            {
              id: 2,
              title: 'Trending',
            },
            {
              id: 3,
              title: 'Reactions',
            },
            {
              id: 4,
              title: 'Favorites',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: <User />,
      subMenu: [
        {
          title: 'Category',
          routes: [
            {
              id: 1,
              title: 'GYPHI Studios',
            },
            {
              id: 2,
              title: 'Animals',
            },
            {
              id: 3,
              title: 'Artists',
            },
          ],
        },
        {
          title: 'Stickers',
          routes: [
            {
              id: 1,
              title: 'Originals',
            },
            {
              id: 2,
              title: 'Trending',
            },
            {
              id: 3,
              title: 'Reactions',
            },
            {
              id: 4,
              title: 'Favorites',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: <Plus />,
      subMenu: [
        {
          title: 'Category',
          routes: [
            {
              id: 1,
              title: 'GYPHI Studios',
            },
            {
              id: 2,
              title: 'Animals',
            },
            {
              id: 3,
              title: 'Artists',
            },
          ],
        },
        {
          title: 'Stickers',
          routes: [
            {
              id: 1,
              title: 'Originals',
            },
            {
              id: 2,
              title: 'Trending',
            },
            {
              id: 3,
              title: 'Reactions',
            },
            {
              id: 4,
              title: 'Favorites',
            },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <nav>
        {/* <div className={styles['nav-desktop']}></div> */}
        <div className={styles['nav-mobile']}>
          {actionsMobile.map(({ id, icon, subMenu }) => (
            <Action key={id} icon={icon} subMenu={subMenu} />
          ))}
        </div>
      </nav>
    </>
  )
}
