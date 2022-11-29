import { Box, Text, Flex, Spacer } from '@chakra-ui/react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => (
  <Box marginTop='20px' borderTop='1px' borderColor='gray.100'>
    <Flex alignItems='center' justifyContent='space-around'>
      <Box textAlign='center' p='5' color='gray.600'>
        <p>Copyright 2017 - {new Date().getFullYear()}, QWERTY</p>
      </Box>
      {/* <Spacer /> */}
      <Text color='brandOrange.100' fontSize='2xl'>
        {/* <Flex> */}
        {/* <FiPhone /> <FaWhatsapp /> */}
        +90 (542) 874-10-47
        {/* </Flex> */}
      </Text>
      <Text color='gray.600'>
        {/* <Flex>
        <FiMail color='gray.400' /> */}
        qwertyrealestate@gmail.com
        {/* </Flex> */}
      </Text>
    </Flex>
  </Box>
)

export default Footer
