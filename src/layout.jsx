import ProTypes from 'prop-types'

import { Toaster } from 'sonner'

import { Header } from '@/components/organisms/ui/header/Header'
import { Footer } from '@/components/organisms/ui/footer/Footer'
import { SearchBar } from '@/components/molecules/search-bar/SearchBar'

export const Layout = ({ handleSubmit, children }) => {
  return (
    <>
      <Header>
        <SearchBar onSubmit={handleSubmit} />
      </Header>
      <main>{children}</main>
      <Toaster
        toastOptions={{
          className: 'my-toast',
          style: {
            fontFamily: 'var(--f-main)',
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
  handleSubmit: ProTypes.func,
  children: ProTypes.node.isRequired,
}
