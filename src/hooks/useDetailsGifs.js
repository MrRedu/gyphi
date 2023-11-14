import { useState, useEffect } from 'react'
import { getGifById } from '@/services/gifs'

export function useDetailsGifs({ id }) {
  const [gif, setGif] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getDetailtsGif = async ({ id }, { signal }) => {
    try {
      setLoading(true)
      const gifById = await getGifById({ id }, { signal })
      setGif(gifById)
    } catch (error) {
      setError('No se pudo conseguir los detalles del gif')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    getDetailtsGif({ id }, { signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [])

  return {
    gif,
    error,
    loading,
  }
}
