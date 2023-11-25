import { useState, useEffect } from 'react'
import { getGifsByQuery } from '@/services/gifs'

export function useGifs({ category, numberGifsToRender }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getGifs = async ({ query }, { signal }) => {
    if (!query) return
    if (query.length < 3) return

    try {
      setLoading(true)
      const gifsByQuery = await getGifsByQuery(
        { query, numberGifsToRender },
        { signal }
      )
      setGifs(gifsByQuery)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    getGifs({ query: category }, { signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [category])

  return {
    gifs,
    error,
    loading,
  }
}
