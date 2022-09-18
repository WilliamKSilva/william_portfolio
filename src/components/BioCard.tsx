import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"


export const BioCard = () => {
  return (
    <Flex w="100%" align="center" justify="space-between" direction="column" gap={8}>
      <Box overflow="hidden" borderRadius={100}>
        <Image 
          width={90} 
          height={90} 
          src="https://avatars.githubusercontent.com/u/75429175?v=4" 
          alt="Profile pic" 
        />
      </Box>
      <Box w="80%">
        <Text fontSize="lg" color="white" textAlign="center">Olá, meu nome é William e eu sou um Desenvolvedor de Software!</Text>
      </Box>
    </Flex>
  )
}