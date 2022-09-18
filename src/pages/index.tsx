import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Anchor } from '../components/Anchor'
import { BioCard } from '../components/BioCard'
import { Header } from '../components/Header'
import { Text } from '../components/Text'

const Home: NextPage = () => {
  return (
    <Box w="100vw" h="100vh" bg="blackAlpha.900">
      <Header />
      <Flex marginTop="10" justify="center">        
        <BioCard /> 
      </Flex>
      <Flex align="center" justify="center" direction="column" mt="10">
        <Text>Talvez você se interesse por esses links:</Text>
        <HStack mt="10" align="center" justify="center" gap={5}>
          <Anchor name="Projetos" />
          <Anchor name="Contato" />
          <Anchor name="Experiência" />
        </HStack>
      </Flex>
      
    </Box>
  )
}

export default Home
