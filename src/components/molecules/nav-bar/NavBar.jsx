import styles from './NavBar.module.css'
import { Menu, LogOut } from 'lucide-react'
import { Action } from './Action'
import { Sector } from './Sector'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { LoginButton } from '../login-button/LoginButton'
import { rightChevron } from '@/libs/lucide'

export const NavBar = () => {
  const [isOpenActionId, setIsOpenActionId] = useState()

  const handleActionId = actionId => {
    setIsOpenActionId(prev => (prev === actionId ? null : actionId))
  }

  const { user, logout } = useAuth0()

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }

  const navBarMobile = [
    {
      id: '1',
      icon: <Menu />,
      category: [
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
          {user ? (
            <>
              <Link to="/profile" className={styles['picture-link']}>
                <img
                  src={user.picture}
                  className={styles.picture}
                  alt="User picture"
                />
                <span className={styles['user-name']}>{user.name}</span>
              </Link>
              <button
                className={styles['logout-button']}
                onClick={handleLogout}
              >
                <LogOut size={rightChevron.size} />
              </button>
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>

        <div className={styles['nav-mobile']}>
          {user && (
            <Link to="/profile" className={styles['picture-link']}>
              <img
                src={user.picture}
                className={styles.picture}
                alt="User picture"
              />
            </Link>
          )}
          {navBarMobile.map(({ id, icon, category }) => (
            <Action
              key={id}
              id={id}
              icon={icon}
              isOpen={isOpenActionId === id}
              onClick={() => handleActionId(id)}
            >
              {category.map(({ title, routes, path }) => (
                <Sector key={title} title={title} routes={routes} path={path} />
              ))}
            </Action>
          ))}
        </div>
      </nav>
    </>
  )
}
