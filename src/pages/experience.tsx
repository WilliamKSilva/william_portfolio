import { Box, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { ExperienceCard } from "../components/ExperienceCard";
import { Header } from "../components/Header";
import { Text } from "../components/Text";


const Experience: NextPage = () => {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Box width="full" mt="5" p="5">
        <Text>As minhas experiências profissionais:</Text>
      </Box>
      <VStack mt="10" gap={5} scrollBehavior="auto">
        <ExperienceCard title="teste" description="teste" date="teste" />
      </VStack>
    </Box>
  );
};

export default Experience;