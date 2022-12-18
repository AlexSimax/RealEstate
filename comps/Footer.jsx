import { Box, Flex } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => (
  <Box marginTop='20px' borderTop='1px' borderColor='gray.100'>
    <Flex alignItems='center' justifyContent='space-around' flexWrap='wrap'>
      <Box textAlign='center' p='5' color='gray.600' fontSize='xs'>
        <p>Copyright {new Date().getFullYear()}, QWERTY</p>
      </Box>
      <Flex>
        <Link href='tel:+905338776057'>
          <Box
            color='gray.600'
            paddingTop={1}
            paddingRight={3}
            cursor='pointer'
          >
            <FiPhone />
          </Box>
        </Link>
        <Link href='https://wa.me/+905338776057'>
          <Box paddingTop={1} paddingRight={3} cursor='pointer'>
            <FaWhatsapp color='#7ad06d' />
          </Box>
        </Link>
        <Link href='tel:+905338776057'>
          <Box color='brandOrange.100' cursor='pointer'>
            +90 (533) 877 6057
          </Box>
        </Link>
      </Flex>
      <Flex color='gray.600'>
        <Box color='gray.600' paddingTop={1} paddingRight={3}>
          <FiMail color='gray.400' />
        </Box>
        <Link href='mailto:qwertyrealestate@gmail.com'>
          qwertyrealestate@gmail.com
        </Link>
      </Flex>
    </Flex>
  </Box>
)

export default Footer
