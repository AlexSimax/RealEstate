import { Flex, Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import Image from 'next/image'
import aboutPicture from '../src/img/Home-key.jpg'
import { BsCheckLg } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
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
              Мы — агентство, работающее на рынке Северного Кипра более 5 лет, и
              предоставляем различный спектр услуг:
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
            <ListIcon as={FiPhone} color='gray.600' />
            <ListIcon as={FaWhatsapp} color='#7ad06d' />
            <ListIcon as={FaTelegram} color='#2fa7de' />
            +90 (533) 872 4681 Софья
          </ListItem>
          <ListItem marginBottom='3'>
            <ListIcon as={FiPhone} color='gray.600' />
            <ListIcon as={FaWhatsapp} color='#7ad06d' />
            <ListIcon as={FaTelegram} color='#2fa7de' />
            +90 (533) 848 3837 Руслан
          </ListItem>
          <ListItem marginBottom='3'>
            <ListIcon as={FiPhone} color='gray.600' />
            <ListIcon as={FaWhatsapp} color='#7ad06d' />
            <ListIcon as={FaTelegram} color='#2fa7de' />
            +90 (542) 847 1047 Владислав
          </ListItem>
          <ListItem marginBottom='3'>
            <ListIcon as={FiPhone} color='gray.600' />
            <ListIcon as={FaWhatsapp} color='#7ad06d' />
            <ListIcon as={FaTelegram} color='#2fa7de' />
            +90 (533) 877 6057 Эрсан
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export default About
