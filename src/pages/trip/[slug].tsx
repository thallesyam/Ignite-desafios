import { Box, Center, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { trips } from '../../data/trips';

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

export default function Trip () {
  const { query: { slug } } = useRouter()

  const trip = trips.find(trip => {
    return `${slug}` === trip.slug
  })

  return (
    <>
      <Header isArrowBack />
      
      { trip && (
        <>
          <Banner 
            imagePrincipal={trip.image}  
            height="500px"
            grid={[1]}
          >
            <Stack spacing="5" align={['center', 'normal']} justify={['center', 'normal']}>
              <Heading as="h2" pos="absolute" left={["unset", 10]} bottom={["unset", 10]}  fontSize={['xl', 'xl', '4xl']} color="white.50">
                Europa
              </Heading>
            </Stack>
          </Banner>
        </>
      ) }
    </>

    
  )
}