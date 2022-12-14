import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import Image from 'next/image'
import aboutPicture from '../src/img/Home-key.jpg'
import { BsCheckLg } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <Head>
        <title>QWERTY | Контакты</title>
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

      <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
        <Image src={aboutPicture} width={480} height={360} alt='home' />
        <Box mt='10' p='5' bg='gray.50'>
          <Flex
            flexWrap='wrap'
            justifyContent='space-between'
            alignItems='center'
            m={['0', '0', '0', '10']}
          >
            <Box w={['100%', '70%', '45%']}>
              <Text
                color='gray.300'
                fontSize={['2xl', '2xl', '5xl']}
                // fontSize='[5xl]'
                fontWeight='medium'
                marginBottom='25'
              >
                Почему мы?
              </Text>
              <Text
                color='gray.600'
                fontSize={['sm', 'lg', '3xl']}
                fontWeight='thin'
              >
                Мы — агентство, работающее на рынке Северного Кипра более 5 лет,
                и предоставляем различный спектр услуг:
              </Text>
            </Box>
            <Box>
              <List
                spacing={3}
                fontSize={['sm', ' xl']}
                color='gray.600'
                marginTop={['10', '10', '16']}
              >
                <ListItem borderColor='gray.500'>
                  <ListIcon as={BsCheckLg} color='#f56c0e' />
                  Помощь в приобретении и оформлении недвижимости
                </ListItem>
                <ListItem>
                  <ListIcon as={BsCheckLg} color='#f56c0e' />
                  Оформление ВНЖ на Северном Кипре
                </ListItem>
                <ListItem>
                  <ListIcon as={BsCheckLg} color='#f56c0e' />
                  Обмен водительских прав
                </ListItem>
                <ListItem>
                  <ListIcon as={BsCheckLg} color='#f56c0e' />
                  Оформление документов
                </ListItem>
                <ListItem>
                  <ListIcon as={BsCheckLg} color='#f56c0e' />
                  Сопровождение в государственных учреждениях
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
        <Box p={5} marginTop='20' borderTop='2px' borderColor='#f56c0e'>
          <Text
            color='gray.300'
            fontSize={['2xl', '2xl', '5xl']}
            fontWeight='medium'
            marginBottom='5'
          >
            Контакты
          </Text>
          <List fontSize={['12px', '12px', '2xl']}>
            <ListItem marginBottom='3'>
              <Link href='tel:+905338724681'>
                <ListIcon
                  as={FiPhone}
                  color='gray.600'
                  fontSize={['18px', '18px', '2xl']}
                  cursor='pointer'
                />
              </Link>
              <Link href='https://wa.me/+905338724681'>
                <ListIcon
                  as={FaWhatsapp}
                  color='#7ad06d'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              <Link href='tg://resolve?domain=sofya527'>
                <ListIcon
                  as={FaTelegram}
                  color='#2fa7de'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              +90 (533) 872 4681 Софья
            </ListItem>
            <ListItem marginBottom='3'>
              <Link href='tel:+905338483837'>
                <ListIcon
                  as={FiPhone}
                  color='gray.600'
                  fontSize={['18px', '18px', '2xl']}
                  cursor='pointer'
                />
              </Link>
              <Link href='https://wa.me/+905338483837'>
                <ListIcon
                  as={FaWhatsapp}
                  color='#7ad06d'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              <Link href='tg://resolve?domain=qwertyrusosp'>
                <ListIcon
                  as={FaTelegram}
                  color='#2fa7de'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              +90 (533) 848 3837 Руслан
            </ListItem>
            <ListItem marginBottom='3'>
              <Link href='tel:+905428471047'>
                <ListIcon
                  as={FiPhone}
                  color='gray.600'
                  fontSize={['18px', '18px', '2xl']}
                  cursor='pointer'
                />
              </Link>
              <Link href='https://wa.me/+905428471047'>
                <ListIcon
                  as={FaWhatsapp}
                  color='#7ad06d'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              <Link href='tg://resolve?domain=ravolux '>
                <ListIcon
                  as={FaTelegram}
                  color='#2fa7de'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              +90 (542) 847 1047 Владислав
            </ListItem>
            <ListItem marginBottom='3'>
              <Link href='tel:+905338776057'>
                <ListIcon
                  as={FiPhone}
                  color='gray.600'
                  fontSize={['18px', '18px', '2xl']}
                  cursor='pointer'
                />
              </Link>
              <Link href='https://wa.me/+905338776057'>
                <ListIcon
                  as={FaWhatsapp}
                  color='#7ad06d'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              <Link href='tg://resolve?domain=ErsLin'>
                <ListIcon
                  as={FaTelegram}
                  color='#2fa7de'
                  cursor='pointer'
                  fontSize={['18px', '18px', '2xl']}
                />
              </Link>
              +90 (533) 877 6057 Эрсан
            </ListItem>
          </List>
        </Box>
      </Flex>
    </>
  )
}

export default About
