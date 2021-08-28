import { Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { trips } from '../../data/trips';

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Info } from "../../components/CityPage/Info";
import { InfoText } from "../../components/CityPage/InfoText";
import { CardTrip } from "../../components/CityPage/CardTrip";

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
                { trip.text }
              </Heading>
            </Stack>
          </Banner>


          <Flex align="center" direction={['column', 'column', 'column', 'row']} mt={['6', '20']} justify="center" overflow="hidden">
            <InfoText content={trip.content} /> 
            <Info />
          </Flex>

          <Text color="gray.900" fontWeight="500" mt={["5", "20"]} fontSize="4xl" px="5">
            Cidades +100
          </Text>
          
          <SimpleGrid px="5" mb={10} columns={[1, 2 ,3, ,4]} mt={['10']} align="center" gap={5}>
            { trip.trips.map(trip => (
              <CardTrip key={trip.id} trip={trip} />
            )) }
          </SimpleGrid>
        </>
      ) }
    </>

    
  )
}