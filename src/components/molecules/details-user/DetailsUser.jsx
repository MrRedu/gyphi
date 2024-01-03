import ProTypes from 'prop-types'

import styles from './DetailsUser.module.css'

import { ShieldCheck, ShieldOff } from 'lucide-react'

export const DetailsUser = ({ user }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={user.avatar || 'https://i.pravatar.cc/400?img=41'}
        alt={`Avatar: ${user.name || 'Anonymous'}`}
      />
      <div className={styles['user-info']}>
        <div className={styles['user-header']}>
          <h3 className={styles['user-name']}>{user.name || 'Anonymous'}</h3>
          {user.is_verified ? (
            <ShieldCheck size={20} strokeWidth={2} color="white" />
          ) : (
            <ShieldOff size={20} strokeWidth={2} color="white" />
          )}
        </div>
        <p className={styles['user-description']}>
          {user.description || 'No description'}
        </p>
      </div>
    </div>
  )
}

DetailsUser.propTypes = {
  user: ProTypes.shape({
    name: ProTypes.string,
    description: ProTypes.string,
    avatar: ProTypes.string,
    is_verified: ProTypes.bool,
  }),
}
