import { useState } from 'react'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { Layout } from './layout'

import { DetailsGif } from '@/components/organisms/details-gif/DetailsGif'
import {
  CategoryPage,
  HomePage,
  NotFoundPage,
  UserPage,
  LoginPage,
} from '@/components/pages'
import { ProtectedRoute } from './components/hoc/ProtectedRoute'
import { toast } from 'sonner'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [gifsCategories, setGifsCategories] = useState(['One Piece', 'Nami'])

  const addCategory = newGifsCategory => {
    if (gifsCategories.includes(newGifsCategory)) return
    setGifsCategories([newGifsCategory, ...gifsCategories])
  }

  const handleSubmit = (e, query) => {
    e.preventDefault()

    const strg = query.trim()
    if (strg.length < 3)
      return toast.error('Please enter at least 3 characters')

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
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route path="/gifs/:id" element={<DetailsGif />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
