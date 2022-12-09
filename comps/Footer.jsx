import { Box, Text, Flex, Spacer } from '@chakra-ui/react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => (
  <Box marginTop='20px' borderTop='1px' borderColor='gray.100'>
    <Flex alignItems='center' justifyContent='space-around' flexWrap='wrap'>
      <Box textAlign='center' p='5' color='gray.600' fontSize='xs'>
        <p>Copyright {new Date().getFullYear()}, QWERTY</p>
      </Box>
      <Flex>
        <Box color='gray.600' paddingTop={1} paddingRight={3}>
          <FiPhone />
        </Box>
        <Box paddingTop={1} paddingRight={3}>
          <FaWhatsapp color='#7ad06d' />
        </Box>
        <Box color='brandOrange.100'>+90 (542) 874 1047</Box>
      </Flex>
      <Flex color='gray.600'>
        <Box color='gray.600' paddingTop={1} paddingRight={3}>
          <FiMail color='gray.400' />
        </Box>
        qwertyrealestate@gmail.com
      </Flex>
    </Flex>
  </Box>
)

export default Footer
