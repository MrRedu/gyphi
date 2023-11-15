import ProTypes from 'prop-types'

import { GifsGrid } from '@/components/organisms/gifs-grid/GifsGrid'
import { useGifs } from '@/hooks/useGifs'

export const Category = ({ gifsCategory }) => {
  const { gifs, loading } = useGifs({
    category: gifsCategory[0],
    numberGifsToRender: 12,
  })

  return (
    <>
      {gifsCategory.map(category => (
        <GifsGrid
          key={category}
          category={category}
          gifs={gifs}
          loading={loading}
        />
      ))}
    </>
  )
}

Category.propTypes = {
  gifsCategory: ProTypes.arrayOf(ProTypes.string).isRequired,
}
