import propTypes from 'prop-types'

import { Loader } from '@/components/atoms/loader/Loader'
import { useGif } from '@/hooks/useGifs'
import { Gif } from '@/components/atoms/gif/Gif'

export const FavoriteGif = ({ id }) => {
  const { gif, loading } = useGif({ id })

  return (
    <>
      {loading && <Loader />}
      {gif && <Gif {...gif} />}
    </>
  )
}

FavoriteGif.propTypes = {
  id: propTypes.string,
  handleAddFavourite: propTypes.func,
}
