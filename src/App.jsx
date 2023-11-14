import { useState } from 'react'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { Layout } from './layout'

import { DetailsGif } from '@/components/organisms/details-gif/DetailsGif'
import { CategoryPage, HomePage, NotFoundPage } from '@/components/pages'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [gifsCategory, setGifsCategory] = useState(['One Piece'])

  const addCategory = newGifsCategory => {
    if (gifsCategory.includes(newGifsCategory)) return
    setGifsCategory([newGifsCategory, ...gifsCategory])
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
          <Route path="/" element={<HomePage gifs={gifsCategory} />} />
          <Route path="/gifs/:id" element={<DetailsGif />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
