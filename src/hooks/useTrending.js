import { useState, useEffect } from 'react'
import { getTrendingGifs } from '@/services/gifs'

export function useTrending() {
  const [trending, setTrending] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getTrending = async ({ signal }) => {
    try {
      setLoading(true)
      const trendingGifs = await getTrendingGifs({ signal })
      setTrending(trendingGifs)
    } catch (error) {
      setError('No se pudieron conseguir los gifs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    getTrending({ signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [])

  return {
    trending,
    error,
    loading,
  }
}
