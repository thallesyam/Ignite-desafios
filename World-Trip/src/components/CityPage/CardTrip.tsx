import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

type CardProps = {
  id: number,
  city: string
  country: string
  imgCircle?: string
  image: string
}

type CardTripsProps = {
  trip: CardProps,
}


export const CardTrip = ({ trip }: CardTripsProps) => {
  return (  
    <Flex w="100%" direction="column" mb={4} >
      <Image src={trip.image} alt={trip.city} w='100%' h="173px" borderTopRadius="4" borderBottomRadius="0" />
      <Flex px={6} py="18px" align="center" justify="space-between" borderBottomRadius={4} border="1px" borderColor="yellow.900" borderTop="0">
        <Box textAlign="left">
          <Heading as="h3" fontSize="xl">{trip.city}</Heading>
          <Text fontSize="sm">{trip.country}</Text>
        </Box>

        { trip.imgCircle && (
          <Box>
            <Image src={trip.imgCircle} borderRadius="full" w="30px" h="30px" boxSizing="border-box"  alt={trip.city}/>
          </Box>
        ) }
      </Flex>
    </Flex>
  )
}