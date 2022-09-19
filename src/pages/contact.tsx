import { Box, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { ContactCard } from "../components/ContactCard";
import { Header } from "../components/Header";
import { Text } from "../components/Text";


const Contact: NextPage = () => {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Box width="full" mt="5" p="5">
        <Text>Você pode me contatar por esses métodos:</Text>
      </Box>
      <HStack mt="10">
        <ContactCard name="teste" image_url="" />
        <ContactCard name="teste" image_url="" />
      </HStack>
    </Box>
  );
};

export default Contact;