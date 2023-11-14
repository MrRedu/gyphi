import ProTypes from 'prop-types'

import { Toaster } from 'sonner'

import { Header } from './components/organisms/ui/header/Header'
import { Footer } from './components/organisms/ui/footer/Footer'
import { SearchBar } from './components/molecules/search-bar/SearchBar'

export const Layout = ({ addCategory, pathname, children }) => {
  return (
    <>
      <Header>
        <SearchBar addCategory={addCategory} pathname={pathname} />
      </Header>
      <main>{children}</main>
      <Toaster
        toastOptions={{
          className: 'my-toast',
          style: {
            fontFamily: 'Atkinson Hyperlegible',
            backgroundColor: 'var(--c-darkgray-800)',
          },
        }}
        theme="dark"
      />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  addCategory: ProTypes.func,
  pathname: ProTypes.string,
  children: ProTypes.node.isRequired,
}
