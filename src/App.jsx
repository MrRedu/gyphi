import { useState } from 'react'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { Layout } from './layout'

import { DetailsGif } from '@/components/organisms/details-gif/DetailsGif'
import {
  CategoryPage,
  HomePage,
  NotFoundPage,
  UserPage,
} from '@/components/pages'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [gifsCategories, setGifsCategories] = useState(['One Piece'])

  const addCategory = newGifsCategory => {
    if (gifsCategories.includes(newGifsCategory)) return
    setGifsCategories([newGifsCategory, ...gifsCategories])
  }

  const handleSubmit = (e, query) => {
    e.preventDefault()

    const strg = query.trim()
    if (strg.length < 2) return

    if (pathname === '/') {
      addCategory(strg)
    } else {
      navigate(`/category/${strg}`)
    }
  }

  return (
    <>
      <Layout handleSubmit={handleSubmit}>
        <Routes>
          <Route
            path="/"
            element={<HomePage gifsCategories={gifsCategories} />}
          />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/gifs/:id" element={<DetailsGif />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
