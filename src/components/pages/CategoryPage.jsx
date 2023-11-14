import { GifsGrid } from '@/components/organisms/gifs-grid/GifsGrid'
import { useParams } from 'react-router-dom'

export const CategoryPage = () => {
  const { category } = useParams()

  return (
    <>
      <GifsGrid category={category} numberGifsToRender={24} />
    </>
  )
}
