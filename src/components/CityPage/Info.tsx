import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export const Info = () => {
  return (
    <Flex w={['100%', '50%']} align="center" direction="column" justify="center">
      <Flex w={['100%', '490px']} maxWidth="" justify="space-between" align="center" px="5">
          <Box textAlign="center">
            <Heading as="h3" color="yellow.900" fontWeight="600">
              50
            </Heading>
            <Text color="gray.900" fontWeight="600">
              países
            </Text>
          </Box>

          <Box textAlign="center">
            <Heading as="h3" color="yellow.900" fontWeight="600">
              60
            </Heading>
            <Text color="gray.900" fontWeight="600">
              línguas
            </Text>
          </Box>

          <Box textAlign="center">
            <Heading as="h3" color="yellow.900" fontWeight="600">
              27
            </Heading>
            <Text color="gray.900" fontWeight="600">
              cidades +100 
            </Text>
          </Box>
      </Flex>
    </Flex>
  )
}