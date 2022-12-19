import Head from 'next/head'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'
import noresult from '../src/img/noresult.svg'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000), [router]
  })

  return (
    <>
      <Head>
        <title>QWERTY | Error</title>
      </Head>

      <Flex
        justifyContent='flex-end'
        alignItems='center'
        flexDirection='column'
        marginTop='2'
        marginBottom='5'
        height='75vh'
      >
        <Image alt='no result' src={noresult} />
        <Text fontSize='2xl' marginTop='3'>
          Ничего не найдено
        </Text>
      </Flex>
    </>
  )
}

export default Error
