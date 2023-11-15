import ProTypes from 'prop-types'

import { TrendingCarousel } from '@/components/organisms/trending-carousel/TrendingCarousel'
import { Category } from '@/components/molecules/category/Category'

export const HomePage = ({ gifsCategories }) => {
  return (
    <>
      <TrendingCarousel />
      {gifsCategories.map(gifsCategory => (
        <Category key={gifsCategory} gifsCategory={[gifsCategory]} />
      ))}
    </>
  )
}

HomePage.propTypes = {
  gifsCategories: ProTypes.array,
}
