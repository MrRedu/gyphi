import styles from './NavBar.module.css'
import { Menu, User, Plus } from 'lucide-react'
import { Action } from './Action'
import { Sector } from './Sector'

const actionsMobile = [
  {
    id: '1',
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
    id: '2',
    icon: <User />,
    subMenu: [
      {
        title: 'Account',
        routes: [
          {
            id: 1,
            // title: session ? 'Log Out' : 'Log In',
            title: 'Log In',
          },
          {
            id: 2,
            title: 'Sign Up',
          },
          {
            id: 3,
            title: 'Favorites',
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
    id: '3',
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

export const NavBar = () => {
  return (
    <>
      <nav>
        {/* <div className={styles['nav-desktop']}></div> */}
        <div className={styles['nav-mobile']}>
          {actionsMobile.map(({ id, icon, subMenu }) => (
            <Action key={id} id={id} icon={icon} subMenu={subMenu}>
              {subMenu.map(({ title, routes }) => (
                <Sector key={title} title={title} routes={routes} />
              ))}
            </Action>
          ))}
        </div>
      </nav>
    </>
  )
}
