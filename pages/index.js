import Link from 'next/link'
import Image from 'next/image'
import BannerPicture from '../src/img/banner_image.jpg'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
// import { Property } from '../comps/Property'
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
  buttonText,
  linkName,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
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
      <Button fontSize='x1' bg='blue.400' color='white'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export async function getStaticProps() {
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
    },
  }
}

export default function Home({ products }) {
  // console.log(products)
  return (
    <Box>
      <Banner
        purpose='КУПИТЬ НЕДВИЖИМОСТЬ'
        title1='Найти, Купить и владеть'
        title2='Своим Домом Мечты'
        desc1='Смотреть Квартиры, Дома'
        desc2='и другое'
        buttonText='Поиск'
        linkName='/search'
        imageUrl={BannerPicture}
      />
      <Flex flexWrap='wrap'>
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </Flex>
      {/* <hr /> */}
    </Box>
  )
}
