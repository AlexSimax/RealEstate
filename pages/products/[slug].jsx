import Head from 'next/head'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import ImageSrollbar from '../../comps/ImageScrollbar'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'product',
  })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

// export async function getServerSideProps({ params }) {
//   const { items } = await client.getEntries({
//     content_type: 'product',
//     'fields.slug': params.slug,
//   })

//   return {
//     props: { product: items[0] },
//   }
// }
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'product',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { product: items[0] },
    revalidate: 1,
  }
}

const ProductDetails = ({ product }) => {
  if (!product) return <div>Загрузка контента ...</div>
  const {
    title,
    featuredImage,
    beds,
    bathrooms,
    price,
    area,
    description,
    rent,
    isVerified = true,
  } = product.fields
  const rentPay = '/ в мес.'
  const priceRu = new Intl.NumberFormat('ru').format(price)
  return (
    <>
      <Head>
        <title>QWERTY | Недвижимость в Северном Кипре</title>
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='Северный кипр, недвижимость на Северном кипре, недвижимость Северного Кипра, недвижимость Кипра,  недвижимость Северного Кипра от застройщика, Северный Кипр инвестиции, аренда квартиры на Северном Кипре'
        />
        <meta
          name='description'
          content='Недвижимость Северного Кипра и покупка апартаменты, виллы, квартиры, дома.'
        />
      </Head>
      <Box maxWidth='1000px' margin='auto' p='4'>
        {featuredImage && <ImageSrollbar data={featuredImage} />}
        <Box w='full' p='6'>
          <Flex
            paddingTop='2'
            alignItems='center'
            justifyContent='space-between'
          >
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight='bold' fontSize='lg'>
                £ {rent === false ? priceRu : priceRu + ' ' + rentPay}
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems='center'
            p='1'
            justifyContent='space-between'
            w='250px'
            color='blue.400'
          >
            {beds} <FaBed /> | &nbsp; &nbsp; &nbsp;{bathrooms} <FaBath /> |
            <div>
              &nbsp;{area} м
              <sup>
                <small>2</small>
              </sup>
            </div>
            <BsGridFill />
          </Flex>
          <Box marginTop='2'>
            <Text fontSize={['md', 'lg']} marginBottom='2' fontWeight='bold'>
              {title}
            </Text>
            <Text
              className='desc'
              lineHeight='2'
              color='gray.600'
              fontSize={['sm', 'md', 'lg']}
            >
              {documentToReactComponents(description)}
            </Text>
            <style jsx>
              {`
                h2,
                h3 {
                  text-transform: uppercase;
                }
                .desc ul {
                  margin: 10px 0 10px 15px;
                }
                .desc li {
                  margin-left: 10px;
                }
              `}
            </style>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProductDetails
