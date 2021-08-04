import {
  Flex,
  Image,
  SimpleGrid,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

type BannerProps = {
  imagePrincipal: string,
  grid: number[]
  children?: ReactNode
  isHome?: boolean
  imageHighlight?: boolean,
  height?: string
}

export const Banner = ({ 
  imagePrincipal, 
  grid,
  height = '300px',
  children = false, 
  imageHighlight = false, 
  isHome = false 
}: BannerProps) => {

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex w="100%" h={['300px', '100%' ]} minHeight="300px" maxHeight={height} pos="relative">
      <Image w="100%" objectFit="cover" src={`/${imagePrincipal}.png`} alt="Background" />

      <Center w="100%" h="100%" pos="absolute">
        <SimpleGrid w="100%" columns={grid} px={4}>

          { !isHome ? (
            <Flex direction="column" align="center" justify="center">
              { children }
            </Flex>
          ) : (
            <Flex>
              { children }
            </Flex>
          ) }

          { !isMobileVersion && imageHighlight && (
            <Flex align="center" direction="column" justify="center">
              <Image src="/airplane.svg" pos="absolute" bottom="-8" alt="Avião" />
            </Flex>
          )  }

        </SimpleGrid>
      </Center>
    </Flex>
  )
}
