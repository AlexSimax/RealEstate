import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Layout from '../comps/Layout'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    brandOrange: {
      100: '#f56c0e ',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
