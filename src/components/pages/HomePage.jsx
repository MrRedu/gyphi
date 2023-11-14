import ProTypes from 'prop-types'

import { TrendingCarousel } from '@/components/organisms/trending-carousel/TrendingCarousel'
import { Category } from '@/components/molecules/category/Category'

export const HomePage = ({ gifs }) => {
  return (
    <>
      <TrendingCarousel />
      <Category gifsCategory={gifs} numberGifsToRender={12} />
    </>
  )
}

HomePage.propTypes = {
  gifs: ProTypes.array,
}
