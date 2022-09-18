import { Box, Flex, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { Text } from "../components/Text";

const Projects: NextPage = () => {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Box width="full" mt="5" p="5">
        <Text>Alguns dos meus projetos: </Text>
      </Box>
      <VStack mt="10" gap={5} scrollBehavior="auto">
        <ProjectCard title="teste" description="teste content" />
        <ProjectCard title="teste" description="teste content" />
      </VStack>
    </Box>
  )
}

export default Projects;