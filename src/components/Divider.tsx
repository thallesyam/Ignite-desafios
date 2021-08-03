import { Box, Flex } from '@chakra-ui/react'

export const Divider = () => {
  return (
    <Flex w="100%" justify="center" mt={['9', '80px']}>
      <Box w="90px" bg="gray.900" h="2px"></Box>
    </Flex>
  )
}
