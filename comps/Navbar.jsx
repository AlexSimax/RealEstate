import Link from 'next/link'
import Image from 'next/image'
import Logo from '../src/img/LOGO.svg'
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
    <Box
      fontSize='3xl'
      color='brandOrange.100'
      fontWeight='bold'
      cursor='pointer'
    >
      <Link href='/' paddingLeft='2'>
        <Image cursor='pointer' src={Logo} alt='logo_RealEstate'></Image>
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
          <Link href='/searchBuy' passHref>
            <MenuItem icon={<BsSearch />}>Поиск</MenuItem>
          </Link>
          {/* <Link href='/searchRent' passHref>
            <MenuItem icon={<BsSearch />}>Поиск, Арендовать</MenuItem>
          </Link> */}
          <Link href='/about' passHref>
            <MenuItem icon={<FcAbout />}>О нас</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar
