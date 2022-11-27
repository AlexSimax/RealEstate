import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='orange.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>
        QWERTY
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant='outlined'
          color='red.400'
          fontSize='2xl'
        />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>На главную</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Поиск</MenuItem>
          </Link>
          <Link href='/about' passHref>
            <MenuItem icon={<FiKey />}>Как купить</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar
