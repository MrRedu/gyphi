import { useState, useEffect } from 'react'
import { getGifsByQuery } from '@/services/gifs'

export function useGifs({ category, numberGifsToRender }) {
  const [gifs, setGifs] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
      setError('No se pudieron conseguir los gifs')
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
  }, [])

  return {
    gifs,
    error,
    loading,
  }
}
