import { Flex, HStack, Text, Icon, Container, Box } from "@chakra-ui/react";
import { GiBookCover, GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  return (
    <Box w="100vw" bg="blackAlpha.400">
      <Flex w="100%" align="center" p="3.5" justify="space-between">
        <HStack gap={2}>
          <Icon as={GiBookCover} color="pink.300" w="8" h="8" />
          <Text fontSize="lg" color="pink.300">William Kelvin</Text>
        </HStack>
        
      </Flex>
    </Box>
  );
}