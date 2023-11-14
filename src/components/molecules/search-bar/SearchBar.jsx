import ProTypes from 'prop-types'

import { useState } from 'react'
import styles from './SearchBar.module.css'
import { Search } from 'lucide-react'

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    const strg = e.target.value
    setQuery(strg)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit(e, query)
    setQuery('')
  }

  return (
    <form action="" onSubmit={handleFormSubmit} className={styles['form']}>
      <div className={styles['container']}>
        <input
          className={styles['input']}
          type="text"
          placeholder="Search all the GIFs"
          value={query}
          name="query"
          onChange={handleChange}
          autoComplete="off" /* ?? */
        />
        <button
          className={styles['button']}
          type="button"
          onClick={handleFormSubmit}
        >
          <Search icon="search" />
        </button>
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  onSubmit: ProTypes.func,
}
