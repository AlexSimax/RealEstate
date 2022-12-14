import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  )
}
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: 'hidden' }}
    >
      {data.map((item) => (
        <Box
          width={['300px', '500px', '910px']}
          // width='910px'
          itemID={item.id}
          key={item.id}
          overflow='hidden'
          p='1'
        >
          <Image
            placeholder='blur'
            blurDataURL={'https:' + item.fields.file.url}
            src={'https:' + item.fields.file.url}
            alt='home'
            width={1024}
            height={768}
            sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
          />
        </Box>
      ))}
    </ScrollMenu>
  )
}
