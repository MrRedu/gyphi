import ProTypes from 'prop-types'

import { Toaster } from 'sonner'

import { Header } from '@/components/organisms/ui/header/Header'
import { Footer } from '@/components/organisms/ui/footer/Footer'
import { SearchBar } from '@/components/molecules/search-bar/SearchBar'
import { LoginButton } from './components/molecules/login-button/LoginButton'

export const Layout = ({ handleSubmit, children }) => {
  return (
    <>
      <Header>
        <SearchBar onSubmit={handleSubmit} />
      </Header>
      <LoginButton />
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
