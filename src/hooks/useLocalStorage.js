import { useState } from 'react'
import { toast } from 'sonner'

export function useLocalStorage({ key, initialValue }) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = value => {
    const actualLocalStorage = JSON.parse(localStorage.getItem(key))

    try {
      if (!actualLocalStorage) {
        localStorage.setItem(key, JSON.stringify([value]))
        setStoredValue([value])
        return
      }

      if (actualLocalStorage.includes(value)) {
        const filteredStorage = actualLocalStorage.filter(
          item => item !== value
        )

        localStorage.setItem(key, JSON.stringify(filteredStorage))
        setStoredValue(filteredStorage)
        toast.error(`Deleted from ${key}`)
      } else {
        localStorage.setItem(
          key,
          JSON.stringify([...actualLocalStorage, value])
        )
        setStoredValue([...actualLocalStorage, value])
        toast.success(`Added to ${key}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
