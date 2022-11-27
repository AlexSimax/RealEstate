import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'



function ProductCard({ product }) {
  const {
    title,
    slug,
    thumbnail,
    price,
    beds,
    bathrooms,
    area,
    isVerified = true,
  } = product.fields
  return (
    <Link href={'/products/' + slug} passHref>
      <Flex
        flexWrap='wrap'
        w='420px'
        p='5'
        paddingTop='0'
        justifyContent='flex-start'
        cursor='pointer'
      >
        <Box>
          <Image
            src={'https:' + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            alt='real-estate'
          />
        </Box>
        <Box w='full'>
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
                £ {price}
              </Text>
            </Flex>
          </Flex>
          <Text fontSize='lg'>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
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
        </Box>
      </Flex>
    </Link>
  )
}

export default ProductCard
