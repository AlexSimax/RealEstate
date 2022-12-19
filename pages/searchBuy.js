import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../comps/SearchFiltersSale'
import ProductCard from '../comps/ProductCard'
import noresult from '../src/img/noresult.svg'
import { createClient } from 'contentful'

const Search = ({ products }) => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()
  return (
    <>
      <Head>
        <title>QWERTY | Поиск дома, квартиры</title>
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
      <Box>
        <Flex
          cursor='pointer'
          bg='gray.100'
          borderBottom='1px'
          borderColor='gray.200'
          p='2'
          fontWeight='black'
          fontSize='lg'
          justifyContent='center'
          alignItems='center'
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Text>Поиск по параметрам</Text>
          <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
        </Flex>
        {searchFilters && <SearchFilters />}
        <Text fontSize='2xl' p='4' fontWeight='bold'>
          {' '}
        </Text>
        <Flex flexWrap='wrap'>
          {products.map((product) => (
            <ProductCard product={product} key={product.sys.id} />
          ))}
        </Flex>
        {products.length === 0 && (
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            flexDirection='column'
            marginTop='5'
            marginBottom='5'
          >
            <Image alt='no result' src={noresult} />
            <Text fontSize='2xl' marginTop='3'>
              Ничего не найдено
            </Text>
          </Flex>
        )}
      </Box>
    </>
  )
}

export default Search

export async function getServerSideProps({ query }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const purpose = query.purpose || 'for-sale'
  const minPrice = query.minPrice || 0
  const maxPrice = query.maxPrice || 10000000000
  const bedsMin = query.bedsMin || 0
  const bathsMin = query.bathsMin || 0
  const sort = query.sort || '-sys.updatedAt'
  const areaMax = query.areaMax || 10000000000

  const res = await client.getEntries({
    content_type: 'product',
    'fields.price[gte]': minPrice,
    'fields.price[lte]': maxPrice,
    'fields.beds[gte]': bedsMin,
    'fields.bathrooms[gte]': bathsMin,
    'fields.rent': purpose === 'for-sale' ? false : true,
    order: sort,
  })

  return {
    props: {
      products: res?.items,
    },
  }
}
