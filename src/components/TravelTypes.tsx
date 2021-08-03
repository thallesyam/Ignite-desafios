import { Flex, VStack, Image, Text, Box } from '@chakra-ui/react'
import { travelTypes } from '../data/travelTypes'

export function TravelTypes() {
  const isMobile = false

  return (
    <VStack spacing="8">
      <Flex
        w="100%"
        maxWidth="1160px"
        margin={['2rem auto 0', '7rem auto 0']}
        justify={['center', 'space-between']}
        wrap={['wrap', 'nowrap']}
      >
        {travelTypes.map((travel) => (
          <Flex
            w={['50%', '100%']}
            key={travel.id}
            align="center"
            mt={['3', '0']}
            justify={['center', 'normal']}
            direction={['row', 'column']}
          >
            {isMobile ? (
              <Box
                w="10px"
                mr="2"
                h="10px"
                bg="yellow.900"
                borderRadius="full"
              ></Box>
            ) : (
              <Image w="85px" src={`/${travel.icon}.svg`} />
            )}

            <Text
              color="gray.900"
              fontWeight={600}
              mt={[0, 6]}
              fontSize={['lg', '2xl']}
            >
              {travel.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </VStack>
  )
}
