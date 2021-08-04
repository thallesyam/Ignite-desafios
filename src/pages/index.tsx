import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Divider } from '../components/Divider'
import { SliderComponent } from '../components/SliderComponent'

export default function Home() {
  return (
    <>
      <Header />

      <Banner 
        imagePrincipal="background"  
        imageHighlight
        isHome
        grid={[1, 1, 2]}
      >
        <Stack spacing="5">
          <Heading as="h2" fontSize={['xl', 'xl', '4xl']} color="white.50">
          5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize={['sm', 'sm', 'xl']} color="white.300">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. 
          </Text>
        </Stack>

      </Banner>

      <TravelTypes />

      <Divider />

      <Box my={['8', '14']}>
        <Text textAlign="center" fontSize={['xl', '4xl']}>
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>

      <SliderComponent />
    </>
  )
}
