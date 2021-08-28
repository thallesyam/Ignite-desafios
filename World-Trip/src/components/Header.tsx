import { Flex, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

type HeaderProps = {
  isArrowBack?: boolean
}

export const Header = ({ isArrowBack = false }: HeaderProps) => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1440px"
      margin="0 auto"
      align="center"
      justify={`${isArrowBack ? 'space-between' : 'center'}`}
      p="6"
    >
      {isArrowBack && (
        <Link href="/" passHref={true}>
          <Image src="/arrowBack.svg" alt="Arrow Left" />
        </Link>
      )}

      <Image src="/logo.svg" alt="Logo" />

      <Box></Box>
    </Flex>
  )
}
