import Link from 'next/link'
import Image from 'next/image'
import MainPicture from '../src/img/banner_image.jpg'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

// export default function Layout({ children }) {
//   return (
//     <div className='layout'>
//       <header>
//         <Link href='/'>
//           <a>
//             <h1>
//               <span>Hello</span>
//             </h1>
//             <h2>World</h2>
//           </a>
//         </Link>
//       </header>

//       <div className='page-content'>{children}</div>

//       <hr />
//       <footer>
//         <p>Copyright 2022 TartisHomes</p>
//       </footer>
//     </div>
//   )
// }

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  )
}
