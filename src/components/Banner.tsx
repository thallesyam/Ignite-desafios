import {
  Flex,
  Stack,
  Image,
  Text,
  SimpleGrid,
  Heading,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react'

export const Banner = () => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isMobileVersion) {
    return (
      <Flex w="100%" h="200px" pos="relative">
        <Image w="100%" src="/background.png" />

        <Center w="100%" h="100%" pos="absolute">
          <Flex direction="column" align="center" justify="center" px="5">
            <Stack spacing="5">
              <Heading as="h2" fontSize="xl" color="white.50">
                5 Continentes, <br /> infinitas possibilidades.
              </Heading>
              <Text fontSize="sm" color="white.300">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
          </Flex>
        </Center>
      </Flex>
    )
  }

  return (
    <Flex w="100%" pos="relative">
      <Image w="100%" src="/background.png" />

      <Center w="100%" h="100%" pos="absolute">
        <SimpleGrid w="100%" columns={2}>
          <Flex direction="column" align="center" justify="center">
            <Stack spacing="5">
              <Heading as="h2" fontSize="4xl" color="white.50">
                5 Continentes, <br /> infinitas possibilidades.
              </Heading>
              <Text fontSize="xl" color="white.300">
                Chegou a hora de tirar do papel a viagem que você <br /> sempre
                sonhou.{' '}
              </Text>
            </Stack>
          </Flex>

          <Flex align="center" direction="column" justify="center">
            <Image src="/airplane.svg" pos="absolute" bottom="-8" />
          </Flex>
        </SimpleGrid>
      </Center>
    </Flex>
  )
}
