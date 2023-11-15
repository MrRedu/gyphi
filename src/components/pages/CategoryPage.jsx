import { GifsGrid } from '@/components/organisms/gifs-grid/GifsGrid'
import { useGifs } from '@/hooks/useGifs'
import { useParams } from 'react-router-dom'

export const CategoryPage = () => {
  const { category } = useParams()
  const { gifs, loading } = useGifs({ category, numberGifsToRender: 24 })

  return (
    <>
      <GifsGrid category={category} gifs={gifs} loading={loading} />
    </>
  )
}
