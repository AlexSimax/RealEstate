import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../comps/SearchFiltersRent'
import ProductCard from '../comps/ProductCard'
import noresult from '../src/img/noresult.svg'
import { createClient } from 'contentful'

const Search = ({ products }) => {
  // console.log(query)
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()
  return (
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
        <Text>Поиск аренды по параметрам</Text>
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
  )
}

export default Search

export async function getServerSideProps({ query }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const minPrice = query.minPrice || 0
  const maxPrice = query.maxPrice || 10000000000
  const bedsMin = query.bedsMin || 0
  const bathsMin = query.bathsMin || 0
  const sort = query.sort || '-sys.updatedAt'
  const areaMax = query.areaMax || 10000000000

  // const data = await fetchApi(
  //   `${baseUrl}/properties/list?bathsMin=${bathsMin}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  // )
  const res = await client.getEntries({
    content_type: 'reRent',
    'fields.price[gte]': minPrice,
    'fields.price[lte]': maxPrice,
    'fields.beds[gte]': bedsMin,
    'fields.bathrooms[gte]': bathsMin,
    order: sort,
  })

  return {
    props: {
      products: res?.items,
    },
  }
}
