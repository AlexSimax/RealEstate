import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BannerPicture from '../src/img/banner_image.jpg'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import ProductCard from '../comps/ProductCard'
import { createClient } from 'contentful'

export const baseUrl = 'https://cdn.contentful.com'

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  buttonText1,
  linkName1,
  // buttonText2,
  // linkName2,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image
      src={imageUrl}
      width={500}
      height={300}
      alt='banner'
      placeholder='blur'
    />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3x1' fontWeight='bold'>
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize='x1'
        bg='blue.400'
        color='white'
        transition='all 0.5s'
        _hover={{ bg: '#f56c0e ' }}
      >
        <Link href={linkName1}>{buttonText1}</Link>
      </Button>
      {/* <Button
        fontSize='x1'
        bg='blue.400'
        color='white'
        marginLeft='15px'
        transition='all 0.5s'
        _hover={{ bg: '#f56c0e' }}
      >
        <Link href={linkName2}>{buttonText2}</Link>
      </Button> */}
    </Box>
  </Flex>
)

// JS master does through getServerSideProps()
export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: 'product',
  })

  return {
    props: {
      products: res.items,
      revalidate: 1,
    },
  }
}

//  Shaun does this way: through getStaticProps()
// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   })

//   const res = await client.getEntries({
//     content_type: 'product',
//   })

//   return {
//     props: {
//       products: res.items,
//       revalidate: 1, // in seconds
//     },
//   }
// }

export default function Home({ products }) {
  // console.log(products)

  return (
    <>
      <Head>
        <title>QWERTY | Дома в Северном Кипре</title>
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='Северный кипр, недвижимость на Северном кипре, недвижимость Северного Кипра, недвижимость Кипра,  недвижимость Северного Кипра от застройщика, Северный Кипр инвестиции, аренда квартиры на Северном Кипре'
        />
        <meta
          name='description'
          content='Недвижимость Северного Кипра и покупка апартаменты, виллы, квартиры, дома.'
        />
        <meta
          name='google-site-verification'
          content='6KJSOb-zGKOjKe_DqI8FzCjXwIEZ6WW0pDm3Kvnz5to'
        />
      </Head>
      <Box>
        <Banner
          purpose='КУПИТЬ ИЛИ АРЕНДОВАТЬ НЕДВИЖИМОСТЬ'
          title1='в Северном Кипре'
          // title2='Владеть Своим Домом Мечты'
          desc1='Смотреть квартиры, дома'
          desc2='и другое'
          buttonText1='Поиск'
          linkName1='/searchBuy'
          // buttonText2='Арендовать'
          // linkName2='/searchRent'
          imageUrl={BannerPicture}
        />
        <Flex flexWrap='wrap'>
          {products.map((product) => (
            <ProductCard key={product.sys.id} product={product} />
          ))}
        </Flex>
        {/* <hr /> */}
      </Box>
    </>
  )
}
