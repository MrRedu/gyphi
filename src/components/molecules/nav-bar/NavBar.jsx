import styles from './NavBar.module.css'
import { Menu } from 'lucide-react'
import { Action } from './Action'
import { Sector } from './Sector'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { LoginButton } from '../login-button/LoginButton'

export const NavBar = () => {
  const [isOpenActionId, setIsOpenActionId] = useState()

  const handleActionId = actionId => {
    setIsOpenActionId(prev => (prev === actionId ? null : actionId))
  }

  const { user } = useAuth0()

  const actionsMobile = [
    {
      id: '2',
      icon: <Menu />,
      subMenu: [
        {
          title: 'Account',
          routes: [
            {
              id: 2,
              title: user ? 'Profile' : 'LogIn',
              path: user ? '/profile' : '/login',
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
  ]

  return (
    <>
      <nav>
        <div className={styles['nav-desktop']}>
          {!user ? (
            <LoginButton />
          ) : (
            user && (
              <Link to="/user" className={styles['picture-link']}>
                <img
                  src={user.picture}
                  className={styles.picture}
                  alt="User picture"
                />
                <span className={styles['user-name']}>{user.name}</span>
              </Link>
            )
          )}
        </div>
        <div className={styles['nav-mobile']}>
          {user && (
            <Link to="/user" className={styles['picture-link']}>
              <img
                src={user.picture}
                className={styles.picture}
                alt="User picture"
              />
            </Link>
          )}
          {actionsMobile.map(({ id, icon, subMenu }) => (
            <Action
              key={id}
              id={id}
              icon={icon}
              isOpen={isOpenActionId === id}
              onClick={() => handleActionId(id)}
            >
              {subMenu.map(({ title, routes, path }) => (
                <Sector key={title} title={title} routes={routes} path={path} />
              ))}
            </Action>
          ))}
        </div>
      </nav>
    </>
  )
}
