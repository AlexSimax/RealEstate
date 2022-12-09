import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Flex, Text, Spacer, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
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
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'product',
    'fields.slug': params.slug,
  })

  return {
    props: { product: items[0] },
  }
}

const ProductDetails = ({ product }) => {
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
  return (
    <Box maxWidth='1000px' margin='auto' p='4'>
      {featuredImage && <ImageSrollbar data={featuredImage} />}
      <Box w='full' p='6'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight='bold' fontSize='lg'>
              £ {rent === false ? price : price + ' ' + rentPay}
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
              .desc ul {
                margin: 10px 0 10px 15px;
              }
            `}
          </style>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductDetails
