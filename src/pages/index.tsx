import { Box, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Divider } from '../components/Divider'
import { SliderComponent } from '../components/SliderComponent'

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

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
