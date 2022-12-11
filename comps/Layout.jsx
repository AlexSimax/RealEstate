import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Qwerty Real Estate</title>
      </Head>
      <Box m='auto'>
        <Box maxWidth='1920px' m='auto'>
          <header>
            <Navbar />
          </header>
        </Box>
        <Box maxWidth='1280px' m='auto'>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </Box>
    </>
  )
}
