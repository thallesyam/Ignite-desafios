import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"

type InfoTextProps = {
  content: string
}

export const InfoText = ({ content }: InfoTextProps) => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      { isMobileVersion ? (
        <Flex w="100%" align="center" direction="column" mb="4" justify="center" px="5" color="gray.900">
          <Text>
            { content }
          </Text>
        </Flex>

      ) : (
        <Flex w="50%" align="center" direction="column" mb="0" justify="center" px="5" color="gray.900">
          <Text>
            { content }
          </Text>
        </Flex>
      ) }

    </>
  )
}