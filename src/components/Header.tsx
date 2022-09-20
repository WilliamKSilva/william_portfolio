import { Flex, HStack, Text, Icon, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { GiBookCover, GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  return (
    <Box w="100vw" bg="blackAlpha.400">
      <Flex w="100%" align="center" p="3.5" justify="space-between">
        <HStack gap={2}>
          <Link href="/">
            <Flex as="a" direction="row" gap={2} align="center" _hover={{ cursor: 'pointer' }}>
              <Icon as={GiBookCover} color="pink.300" w="8" h="8" />
              <Text fontSize="lg" color="pink.300">William Kelvin</Text>
            </Flex>
          </Link>
        </HStack>        
      </Flex>
    </Box>
  );
}