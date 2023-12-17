import { toast } from 'sonner'

const LOCAL_STORAGE = window.localStorage

// TODO: Estandarizar
export const addIdGifToLocalStorage = id => {
  const favourite = id
  const favouritesGifs = JSON.parse(LOCAL_STORAGE.getItem('favourites'))

  if (LOCAL_STORAGE.length === 0) {
    LOCAL_STORAGE.setItem('favourites', JSON.stringify([favourite]))
  } else {
    if (favouritesGifs.includes(favourite)) {
      const filteredGifs = favouritesGifs.filter(gif => gif !== favourite)
      LOCAL_STORAGE.setItem('favourites', JSON.stringify(filteredGifs))
      toast.error('Deleted from favourites')
    } else {
      favouritesGifs.push(favourite)
      LOCAL_STORAGE.setItem('favourites', JSON.stringify(favouritesGifs))
      toast.success('Added to favourites')
    }
  }
}
